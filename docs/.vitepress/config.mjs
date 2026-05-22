import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/Roll-a/',
    title: "Roll a Template",
    description: "Get all docs for roll a template here!",
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Start', link: '/installation' },
            { text: 'Items', link: '/items-config' },
        ],

        sidebar: [
            {
                text: 'Game',
                items: [
                    { text: 'Installation', link: '/installation' },
                    { text: 'Rarity', link: '/rarity-config' },
                    { text: 'Items', link: '/items-config' },
                    { text: 'Dice', link: '/dice-config' },
                    { text: 'Upgrades', link: '/upgrades-config' },                            
                    { text: 'Products', link: '/products-config' },
                    { text: 'Gamepasses', link: '/gamepasses-config' },
                    { text: 'General', link: '/general-config' },
                    { text: 'Rebirth', link: '/rebirth-config' },                  
                    { text: 'Mutations/Events', link: '/mutation-config' },
                    { text: 'Admin', link: '/admin-config' },
                ],
            },

            {
                text: 'Info',
                items: [
                    { text: 'Rewards', link: '/rewards' },
                    { text: 'Boosts', link: '/boosts' },
                    { text: 'Admin Commands', link: '/admin-commands' },
                ],
            },
        ],

        search: {
            provider: 'local',
        },

        socialLinks: [
            { icon: 'discord', link: 'https://discord.gg/a8umQVdmtC' }
        ]
    }
})
