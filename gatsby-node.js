const path = require(`path`)
const crypto = require('crypto');

exports.onCreateNode = ({ node, boundActionCreators, getNode }) => {
  const { createNodeField } = boundActionCreators
  let slug
  if (
    node.internal.type === `JavascriptFrontmatter`
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

    resolve(
      graphql(
        `
          {

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

        return
      })
    )
  })
}

