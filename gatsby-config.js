module.exports = {
    siteMetadata: {
        title: `Gatsby Default Starter`,
        description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
        author: `@gatsbyjs`,
    },
    plugins: [
        {
            resolve: "gatsby-plugin-postcss",
            options: {
                postCssPlugins: [
                    require("tailwindcss")("./tailwind.config.js"),
                ],
            },
        },
        {
            resolve: `gatsby-plugin-purgecss`,
            options: { tailwind: true },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        
        // this (optional) plugin enables Progressive Web App + Offline functionality
        // To learn more, visit: https://gatsby.dev/offline
        // `gatsby-plugin-offline`,
    ],
};
