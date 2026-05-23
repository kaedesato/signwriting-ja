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
			editLink: {
				baseUrl: 'https://github.com/kaedesato/signwriting-ja/edit/main/',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/kaedesato/signwriting-ja' }],
			sidebar: [
				{
					label: 'はじめに',
					items: [
						{ label: 'SignWritingとは？', slug: 'intro' },
						{ label: 'フォントのインストール', slug: 'font-installation' },
					],
				},
				{
					label: '教科書レッスン (全15章)',
					items: [
						{ label: '第1章: 視点と顔・頭部配置', slug: 'lessons/01-viewpoints' },
						{ label: '第2章: 3つの基本手形状', slug: 'lessons/02-basic-handshapes' },
						{ label: '第3章: 手形状の10のグループ', slug: 'lessons/03-ten-hand-groups' },
						{ label: '第4章: 手の甲・特殊な視点', slug: 'lessons/04-special-handshapes' },
						{ label: '第5章: 6つの接触記号', slug: 'lessons/05-contact-symbols' },
						{ label: '第6章: 6つの手指動作記号', slug: 'lessons/06-finger-symbols' },
						{ label: '第7章: 空間プレーンと直線運動', slug: 'lessons/07-planes-space' },
						{ label: '第8章: 曲線・立体的な運動', slug: 'lessons/08-curved-movements' },
						{ label: '第9章: 回転・手首の折り曲げ', slug: 'lessons/09-axial-movements' },
						{ label: '第10章: 円運動とその他の運動', slug: 'lessons/10-circular-movements' },
						{ label: '第11章: 10グループの表情記号', slug: 'lessons/11-facial-expressions' },
						{ label: '第12章: 頭部の視点と運動記号', slug: 'lessons/12-head-movements' },
						{ label: '第13章: 肩・胴体と全身の動き', slug: 'lessons/13-body-movements' },
						{ label: '第14章: 動作ダイナミクスと修飾子', slug: 'lessons/14-dynamics' },
						{ label: '第15章: 句読点と手話文学の執筆', slug: 'lessons/15-punctuation-writing' },
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
