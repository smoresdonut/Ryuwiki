import { defineConfig } from "vitepress";

export default defineConfig({
    title: 'Ryuwiki',
    description: 'Ryuwiki is a simple wiki for the Ryujinx project.',
    lang: 'en-US',
    lastUpdated: true,
    cleanUrls: true,
    appearance: true,
    ignoreDeadLinks: true,
    sitemap: {
    hostname: 'https://wiki.ryujinx.app'
    },
    head: [
        ["link", { rel: "icon", href: "assets/ryujint.webp" }],
        ["meta", { property: "og:description", content: "Ryuwiki is a simple wiki for the ryujinx project.", }],
        ["meta", { property: "og:type", content: "website" }],
        ["meta", { property: "og:url", content: "https://wiki.ryujinx.app" }],
        ["meta", { property: "og:image", content: "https://wiki.ryujinx.app/media/ryugay.webp" }],
        ["meta", { name: "twitter:description", content: "Ryuwiki is a simple wiki for the ryujinx project.", }],
    ],
    vite: {
        resolve: {
            preserveSymlinks: true
        }
    },
    markdown: {
        theme: "github-dark"
    },
    themeConfig: {
        logo: 'assets/ryujint.webp',
        sidebar: [
            {
                text: '',
                items: [ 
                    { text: 'Changelog', link: '/changelog'},

                    { text: 'FAQ', link: '/faq'}
                ]
            },
            {
                text: 'Quickstart',
                collapsed: false,
                items: [ 
                    { text: 'Setup & Configuration', link: '/setup'},
                    { text: 'Dumping Firmware & Keys', link: '/dumping'}
                ]
            },
            {
                text: 'Multiplayer',
                collapsed: false,
                items: [ 
                    { text: 'LDN (Local-Wireless)', link: '/ldn'}
                ]
            },
            {
                text: 'Compatiblity',
                collapsed: true,
                items: [
                    { text: 'Games List', link: '/compatbility'}
                ]
            }
        ],
        nav: [
            { text: 'Home', link: 'https://ryujinx.app'},
            { text: '💖Support me', link: 'https://ko-fi.com/smoresdonut'}
        ],
        search: { provider: 'local'},
        footer: {
            message: `Ryuwiki is licensed under <a href="https://github.com/smoresdonut/Ryuwiki/LICENSE">CC-BY-NC-SA-4.0</a>`,
            copyright: `Smoresdonut © ${new Date().getFullYear()}`
        },
        editLink: {
            pattern: 'https://github.com/smoresdonut/Ryuwiki/edit/master/:path'
        },
        socialLinks: [
            { icon: 'github', link: 'https://github.com/smoresdonut/Ryuwiki' },
        ],
    }
});