const path = require('path')

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),
      },
    },
  })
}

exports.createPages = ({ graphql, actions: { createPage } }) => {
  return new Promise((resolve, reject) => {
    const templateNewsPage = path.resolve('./src/templates/NewsPage.tsx')

    resolve(
      graphql(
        `
          {
            allContentfulNews {
              nodes {
                postBody {
                  json
                }
                postTitle
                author {
                  name
                  roles {
                    colorCode
                    roleName
                  }
                  profilePicture {
                    fluid {
                      src
                      srcSet
                    }
                  }
                }
                pageSlug
                featuredImage {
                  fluid {
                    src
                    srcSet
                  }
                }
                createdAt
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }

        const news = result.data.allContentfulNews.nodes

        news.map(post => {
          createPage({
            path: `/news/${post.pageSlug}`,
            component: templateNewsPage,
            context: post,
          })
        })
      })
    )
  })
}
