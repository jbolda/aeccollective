const path = require(`path`)
const crypto = require('crypto');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  let slug
  if (
    node.internal.type === `JavascriptFrontmatter` ||
    node.internal.type === `MarkdownRemark`
  ) {
    try {
      const fileNode = getNode(node.parent)
      const parsedFilePath = path.parse(fileNode.relativePath)
      if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
      } else if (parsedFilePath.name === `index` && parsedFilePath.dir === ``) {
        slug = `/`
      } else if (parsedFilePath.name === `index` && parsedFilePath.dir !== ``) {
        slug = `/${parsedFilePath.dir}/`
      } else {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`
      }

      // Add slug as a field on the node.
      createNodeField({ node, name: `slug`, value: slug })
    } catch (error) {
      // nil
    }

  }
}

exports.createPages = ({ graphql, boundActionCreators }) => {
  const { createPage } = boundActionCreators

  return new Promise((resolve, reject) => {
    const pages = []

    const mdTypicalPage = path.resolve(`src/templates/mdTypicalPage.js`)

    resolve(
      graphql(
        `
          {
            allMarkdownRemark {
              edges {
                node {
                  frontmatter {
                    layoutType
                    path
                  }
                  fields {
                    slug
                  }
                }
              }
            }
            allJavascriptFrontmatter {
              edges {
                node {
                  fileAbsolutePath
                  frontmatter {
                    layoutType
                    path
                  }
                }
              }
            }
          }
        `
      ).then(result => {
        if (result.errors) {
          console.log('--------------errors-------------')
          console.log(result.errors)
          console.log('--------------result-------------')
          console.log(result)
          reject(result.errors)
        }


        result.data.allJavascriptFrontmatter.edges.forEach(edge => {
          let {frontmatter} = edge.node
            createPage({
              path: frontmatter.path, // required
              component: path.resolve(edge.node.fileAbsolutePath)
            })
        })

        // Create from markdown
        result.data.allMarkdownRemark.edges.forEach(edge => {
          let frontmatter = edge.node.frontmatter
          if (frontmatter.layoutType === `page`) {
            createPage({
              path: frontmatter.path, // required
              component: mdTypicalPage,
              context: {
                slug: edge.node.fields.slug,
              },
            })
          }
        })

        return
      })
    )
  })
}

