// const path = require(`path`);
// const _ = require('lodash');
// const fs = require('fs');

// exports.onCreateNode = ({ node, actions, getNode }) => {
//   const { createNodeField } = actions;
//   let slug;
//   if (
//     node.internal.type === `JavascriptFrontmatter` ||
//     node.internal.type === `Mdx`
//   ) {
//     try {
//       const fileNode = getNode(node.parent);
//       const parsedFilePath = path.parse(fileNode.relativePath);
//       if (parsedFilePath.name !== `index` && parsedFilePath.dir !== ``) {
//         slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
//       } else if (parsedFilePath.name === `index` && parsedFilePath.dir === ``) {
//         slug = `/`;
//       } else if (parsedFilePath.name === `index` && parsedFilePath.dir !== ``) {
//         slug = `/${parsedFilePath.dir}/`;
//       } else {
//         slug = `/${parsedFilePath.dir}/${parsedFilePath.name}/`;
//       }

//       // Add slug as a field on the node.
//       createNodeField({ node, name: `slug`, value: slug });
//     } catch (error) {
//       // nil
//     }
//   }
// };

// exports.createPages = ({ graphql, actions }) => {
//   return new Promise((resolve, reject) => {
//     resolve(
//       graphql(
//         `
//           {
//             allMdx {
//               edges {
//                 node {
//                   frontmatter {
//                     layoutType
//                     path
//                     templateKey
//                     tags
//                   }
//                   fields {
//                     slug
//                   }
//                 }
//               }
//             }
//           }
//         `
//       ).then(result => {
//         if (result.errors) {
//           console.log('--------------errors-------------');
//           console.log(result.errors);
//           console.log('--------------result-------------');
//           console.log(result);
//           reject(result.errors);
//         }

//         // Create from markdown
//         let tags = [];
//         result.data.allMdx.edges.forEach(edge => {
//           let frontmatter = edge.node.frontmatter;
//           if (frontmatter.tags) {
//             tags = tags.concat(frontmatter.tags);
//           }
//         });
//         // Eliminate duplicate tags
//         tags = _.uniq(tags);
//         return;
//       })
//     );
//   });
// };
