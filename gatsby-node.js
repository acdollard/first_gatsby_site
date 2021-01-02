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
            categories {
              name
            }
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
  const postsPerPage = 5
  const numberOfPages = Math.ceil(posts.length / postsPerPage)
  const pageTemplate = path.resolve(`./src/templates/blogPage.js`);
  console.log(posts.length, postsPerPage, numberOfPages);
  // Create Page pages.
  Array.from({length: numberOfPages}).forEach((post, index) => {
    createPage({
      path: index === 0 ? '/blog' : `/blog/${index + 1}`,
      component: slash(pageTemplate),
      context: {
        posts: posts.slice(postsPerPage * index, (postsPerPage * index) + postsPerPage),
        numberOfPages,
        currentPage: index + 1
      }
    });

  })

  const postPageTemplate = path.resolve('./src/templates/postPage.js');

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.node.slug}`,
      component: slash(postPageTemplate),
      context: {
        posts: post.node,

      }
    })
  })


}