const path = require(`path`);
const _ = require('lodash');

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise((resolve, reject) => {
    resolve(
      graphql(
        `
          {
            allFile(
              filter: {
                sourceInstanceName: { eq: "software" }
                ext: { eq: ".mdx" }
              }
            ) {
              nodes {
                childMdx {
                  frontmatter {
                    path
                    tags
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

        // Create from markdown
        let tags = [];
        result.data.allFile.nodes.forEach(node => {
          if (node && node.childMdx && node.childMdx.frontmatter) {
            const frontmatter = node.childMdx.frontmatter;
            createPage({
              path: frontmatter.path, // required
              component: path.resolve(`src/templates/mdSoftware.js`)
            });
            if (frontmatter.tags) {
              tags = tags.concat(frontmatter.tags);
            }
          }
        });
        // Eliminate duplicate tags
        tags = _.uniq(tags);
        return;
      })
    );
  });
};
