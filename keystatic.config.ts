import { config, fields, collection } from '@keystatic/core';

export default config({
  storage:
    process.env.NODE_ENV === 'development'
      ? { kind: 'local' }
      : {
          kind: 'github',
          repo: 'yunusaritonang311-jpg/nakamuraalsut',
        },
  collections: {
    blog: collection({
      label: 'Artikel Blog',
      slugField: 'title', // Ganti 'slug' menjadi 'slugField' dengan nilai 'title'
      path: 'src/content/blog/*',
      entryLayout: 'content',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Judul Artikel' } }),
        pubDate: fields.date({ label: 'Tanggal Terbit' }),
        description: fields.text({ label: 'Deskripsi / Ringkasan', multiline: true }),
        content: fields.mdx({
          label: 'Isi Konten Artikel',
        }),
      },
    }),
  },
});