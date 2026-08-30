// // @ts-check

// import mdx from '@astrojs/mdx';
// import sitemap from '@astrojs/sitemap';
// import { defineConfig, fontProviders } from 'astro/config';

// // https://astro.build/config
// export default defineConfig({
// 	site: 'https://nakamuraalamsutera.com',
// 	integrations: [mdx(), sitemap()],
// 	fonts: [
// 		{
// 			provider: fontProviders.local(),
// 			name: 'Atkinson',
// 			cssVariable: '--font-atkinson',
// 			fallbacks: ['sans-serif'],
// 			options: {
// 				variants: [
// 					{
// 						src: ['./src/assets/fonts/atkinson-regular.woff'],
// 						weight: 400,
// 						style: 'normal',
// 						display: 'swap',
// 					},
// 					{
// 						src: ['./src/assets/fonts/atkinson-bold.woff'],
// 						weight: 700,
// 						style: 'normal',
// 						display: 'swap',
// 					},
// 				],
// 			},
// 		},
// 	],
// });

import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import netlify from '@astrojs/netlify';
import keystatic from '@keystatic/astro';
import { defineConfig, fontProviders } from 'astro/config';

import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';

export default defineConfig({
    site: 'https://nakamuraalamsutera.com',
    output: 'static',
    adapter: netlify(),
    integrations: [mdx(), sitemap(), keystatic(), react(), markdoc()],
    fonts: [
        {
            provider: fontProviders.local(),
            name: 'Atkinson',
            cssVariable: '--font-atkinson',
            fallbacks: ['sans-serif'],
            options: {
                variants: [
                    {
                        src: ['./src/assets/fonts/atkinson-regular.woff'],
                        weight: 400,
                        style: 'normal',
                        display: 'swap',
                    },
                    {
                        src: ['./src/assets/fonts/atkinson-bold.woff'],
                        weight: 700,
                        style: 'normal',
                        display: 'swap',
                    },
                ],
            },
        },
    ],
});