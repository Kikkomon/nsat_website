module.exports = {
  siteMetadata: {
    title: 'North South Art Transfer',
    author: 'Jacob Ramsaywak',
    description: 'North South Art Transfer',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },      
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: "UA-136389035-2",
        
      },
      
    },
    'gatsby-plugin-sass',
  ],
}
