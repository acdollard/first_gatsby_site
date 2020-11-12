const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

// Implement the Gatsby API “createPages”. This is
// called after the Gatsby bootstrap is finished so you have
// access to any information necessary to programmatically
// create pages.
// Will create pages for WordPress pages (route : /{slug})
// Will create pages for WordPress posts (route : /post/{slug})
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  // The “graphql” function allows us to run arbitrary
  // queries against the local Gatsby GraphQL schema. Think of
  // it like the site has a built-in database constructed
  // from the fetched data that you can run queries against.
  const result = await graphql(`
  {
    allWordpressPost {
      edges {
        node {
          excerpt
          wordpress_id
          date(formatString: "Do MM YYYY HH:mm")
          title
          content
          slug
        }
      }
    }
  }
  `)

  // Check for any errors
  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPost } = result.data.allWordpressPost.edges;
  const sortedPosts = result.data.allWordpressPost.edges.sort(function(a,b) {
    return a.wordpress_id - b.wordpress_id
  })

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/blogPage.js`);

  createPage({
    path: "/alexdollard/blog",
    component: slash(pageTemplate),
    context: {
      posts: sortedPosts
    }
  });

  const postPageTemplate = path.resolve('./src/templates/postPage.js');

  result.data.allWordpressPost.edges.forEach((post) => {
    createPage({
      path: `/${post.node.slug}`,
      component: slash(postPageTemplate),
      context: {
        posts: post.node
      }
    })
  })

}