module.exports = {
   plugins: [
      `gatsby-plugin-sass`,
      {
         resolve: `gatsby-source-filesystem`,
         options: {
            name: `src`,
            path: `${__dirname}/src/posts`,
         },
      },
      `gatsby-transformer-remark`,
   ],
   pathPrefix: "/Real-Valladolid",

}
