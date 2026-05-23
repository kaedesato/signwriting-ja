// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Sutton式手話文字 (SignWriting)',
			locales: {
				root: {
					label: '日本語',
					lang: 'ja',
				},
			},
			head: [
				{
					tag: 'script',
					attrs: {
						type: 'module',
						src: 'https://unpkg.com/@sutton-signwriting/sgnw-components@latest/dist/sgnw-components/sgnw-components.esm.js',
					},
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						type: 'text/css',
						href: 'https://unpkg.com/@sutton-signwriting/sgnw-components@latest/dist/sgnw-components/sgnw-components.css',
					},
				},
			],
			customCss: [
				'./src/styles/custom.css',
			],
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sutton-signwriting' }],
			sidebar: [
				{
					label: 'はじめに',
					items: [
						{ label: 'SignWritingとは？', slug: 'intro' },
						{ label: 'フォントのインストール', slug: 'font-installation' },
					],
				},
				{
					label: '解説ドキュメント',
					items: [
						{ label: '1. 基本概念', slug: 'basics' },
						{ label: '2. 接触と動き', slug: 'movements' },
						{ label: '3. 表情と頭部記号', slug: 'facial-expressions' },
					],
				},
				{
					label: '技術仕様',
					items: [
						{ label: 'Unicode & FSW仕様', slug: 'specs' },
					],
				},
				{
					label: 'ツール',
					items: [
						{ label: 'サンドボックス', slug: 'sandbox' },
					],
				},
			],
		}),
	],
});
