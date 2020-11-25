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
  // const result = await graphql(`
  // {
  //   allWordpressPost {
  //     edges {
  //       node {
  //         excerpt
  //         wordpress_id
  //         date(formatString: "Do MM YYYY HH:mm")
  //         title
  //         content
  //         slug
  //       }
  //     }
  //   }
  // }
  // `)


  const results = await graphql(`
    query {
      allWordpressPost(sort: { fields: [date],
                                order: DESC }){
        edges {
          node {
            id
            excerpt
            date(formatString: "dddd MMM Do, YYYY hh:mma")
            title
            content
            slug
          }
        }
      }
    }
  `)

  // Check for any errors
  if (results.errors) {
    throw new Error(results.errors)
  }
  console.log("<-------------------------------------------------------------------===================>");


  // Access query results via object destructuring
  // const sortedPosts = results.data.allWordpressPost.edges.sort(function(a,b) {
  //   return a.id - b.id
  // })
  const posts = results.data.allWordpressPost.edges

  // Create Page pages.
  const pageTemplate = path.resolve(`./src/templates/blogPage.js`);

  createPage({
    path: "/blog",
    component: slash(pageTemplate),
    context: {
      posts: posts
    }
  });

  const postPageTemplate = path.resolve('./src/templates/postPage.js');

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: slash(postPageTemplate),
      context: {
        posts: post.node
      }
    })
  })


}