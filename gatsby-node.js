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
      path: `/alexdollard/${post.node.slug}`,
      component: slash(postPageTemplate),
      context: {
        posts: post.node
      }
    })
  })

  


  // We want to create a detailed page for each page node.
  // The path field contains the relative original WordPress link
  // and we use it for the slug to preserve url structure.
  // The Page ID is prefixed with 'PAGE_'
  // allWordpressPost.edges.forEach(edge => {
    // Gatsby uses Redux to manage its internal state.
    // Plugins and sites can use functions like "createPage"
    // to interact with Gatsby.
    // createPage({
      // Each page is required to have a `path` as well
      // as a template component. The `context` is
      // optional but is often necessary so the template
      // can query data specific to each page.
  //     path: edge.node.path,
  //     component: slash(pageTemplate),
  //     context: {
  //       id: edge.node.id,
  //       wordpress_id: edge.node.wordpress_id,
  //       date: edge.node.date,
  //       slug: edge.node.slug,
  //       title: edge.node.title,
  //       excerpt: edge.node.excerpt,
  //       content: edge.node.content
  //     },
  //   })
  // });

  // const posts = allWordpressPost.edges
  // const postsPerPage = 2
  // const numberOfPages = Math.ceil(posts.length / postsPerPage)
  // const postTemplate = path.resolve(`./src/templates/postPage.js`)
  // // We want to create a detailed page for each post node.
  // // The path field stems from the original WordPress link
  // // and we use it for the slug to preserve url structure.
  // // The Post ID is prefixed with 'POST_'
  // posts.forEach(edge => {
  //   createPage({
  //     path: edge.node.path,
  //     component: slash(postTemplate),
  //     context: {
  //       id: edge.node.id,
  //     },
  //   })
  // })

}