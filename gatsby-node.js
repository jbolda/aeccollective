const path = require(`path`);
const crypto = require('crypto');
const _ = require('lodash');

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  let slug;
  if (
    node.internal.type === `JavascriptFrontmatter` ||
    node.internal.type === `MarkdownRemark`
  ) {
    try {
      const fileNode = getNode(node.parent);
      const parsedFilePath = path.parse(fileNode.relativePath);
      if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      } else if (parsedFilePath.name === `index` && parsedFilePath.dir === ``) {
        slug = `/`;
      } else if (parsedFilePath.name === `index` && parsedFilePath.dir !== ``) {
        slug = `/${parsedFilePath.dir}/`;
      } else {
        slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
      }

      // Add slug as a field on the node.
      createNodeField({ node, name: `slug`, value: slug });
    } catch (error) {
      // nil
    }
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    const pages = [];

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
                    templateKey
                    tags
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
          console.log('--------------errors-------------');
          console.log(result.errors);
          console.log('--------------result-------------');
          console.log(result);
          reject(result.errors);
        }

        result.data.allJavascriptFrontmatter.edges.forEach(edge => {
          let { frontmatter } = edge.node;
          createPage({
            path: frontmatter.path, // required
            component: path.resolve(edge.node.fileAbsolutePath)
          });
        });

        // Create from markdown
        let tags = [];
        result.data.allMarkdownRemark.edges.forEach(edge => {
          let frontmatter = edge.node.frontmatter;
          createPage({
            path: frontmatter.path, // required
            component: path.resolve(
              `src/templates/${String(frontmatter.templateKey)}.js`
            ),
            context: {
              slug: edge.node.fields.slug
            }
          });
          if (frontmatter.tags) {
            tags = tags.concat(frontmatter.tags);
          }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);
        return;
      })
    );
  });
};
