import React from 'react';
import { Link as GatsbyLink, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Nav from '@jbolda/gatsby-theme-layout/src/nav.js';
import {
  Box,
  Divider,
  Container,
  Heading,
  Text,
  Button,
  Image,
  Card,
  Badge,
  Link
} from 'theme-ui';
import LogoData from '../assets/logos/aecc_logo.svg';
import LogoInverse from '../assets/logos/aecc_logo_white.svg';

class SoftwarePage extends React.Component {
  constructor(props) {
    super();
    this.state = pullUnique(props.data.software.nodes);
  }

  disciplineClicked(index) {
    this.setState((prevState, props) => {
      let newState = { ...prevState };
      newState.disciplineButtons[
        prevState.uniqueDisciplines[index]
      ] = !prevState.disciplineButtons[prevState.uniqueDisciplines[index]];

      let filterData = node => {
        let availableDisciplines = node.childMdx.frontmatter.discipline.reduce(
          (accumulator, discipline) => {
            accumulator[discipline] = true;
            return accumulator;
          },
          {}
        );
        let disciplines = prevState.uniqueDisciplines;
        return disciplines.reduce((accumulator, discipline) => {
          if (
            newState.disciplineButtons[discipline] &&
            !availableDisciplines[discipline]
          ) {
            return false;
          } else {
            return accumulator;
          }
        }, true);
      };

      newState.filteredData = [...props.data.software.nodes.filter(filterData)];

      return newState;
    });
  }

  render() {
    return (
      <Nav
        logo={{
          data: LogoData,
          inverse: LogoInverse,
          alt: 'Architecture Engineering and Construction Collective Logo'
        }}
        location={this.props.location}
      >
        <Box
          as="section"
          sx={{ width: ['95%', '85%', '60%'], mx: ['2.5%', '7.5%', '20%'] }}
        >
          <Heading as="h1">AEC Industry Software</Heading>
          <Text as="p">
            We have created and are continually growing a list of software used
            within the industry. If we are missing any software that you use
            within the Architecture, Engineering and Construction industries,
            let us know! We would love to have you join and tell us in the
            community by clicking the{' '}
            <Link as={GatsbyLink} to={'/'}>
              join button on the widget on the homepage
            </Link>
            . Otherwise feel free to reach out via email at{' '}
            <Link href="mailto:hello@aeccollective.com">
              hello@aeccollective.com
            </Link>
            .
          </Text>
        </Box>
        <Box
          as="section"
          sx={{ width: ['95%', '85%', '60%'], mx: ['2.5%', '7.5%', '20%'] }}
        >
          <Text as="p">
            Filter by Discipline. Click on the following buttons.
          </Text>
          <Container>
            {this.state.uniqueDisciplines.map((discipline, index) => (
              <Button
                key={index}
                sx={{
                  m: 2,
                  bg: this.state.disciplineButtons[discipline]
                    ? `primary`
                    : `background`,
                  color: 'text',
                  borderColor: this.state.disciplineButtons[discipline]
                    ? `text`
                    : `secondary`,
                  borderStyle: `solid`,
                  borderWidth: '3px',
                  '&:hover': {
                    bg: 'secondary'
                  },
                  transition: 'all 0.4s'
                }}
                onClick={this.disciplineClicked.bind(this, index)}
              >
                {discipline}
              </Button>
            ))}
          </Container>
          <Text>{`We are showing ${this.state.filteredData.length} software titles matching your criteria.`}</Text>
          <Divider />
        </Box>
        <Box
          as="section"
          sx={{ width: ['95%', '85%', '60%'], mx: ['2.5%', '7.5%', '20%'] }}
        >
          {softwareTable(this.state.filteredData)}
        </Box>
      </Nav>
    );
  }
}

export default SoftwarePage;

const softwareTable = data =>
  data.length === 0 ? (
    <Text>No matching software.</Text>
  ) : (
    data.map(node => (
      <Card key={node.id} sx={{ p: 3, my: 6 }}>
        <Link as={GatsbyLink} to={node.childMdx.frontmatter.path}>
          <Heading as={'h3'}>{node.childMdx.frontmatter.title}</Heading>
          {logoImage(node.childMdx.frontmatter)}
        </Link>
        <Text>
          {'Discipline: '}
          {node.childMdx.frontmatter.discipline.map((disc, index) => {
            if (index === 0) {
              return <span key={index}>{disc}</span>;
            } else {
              return <span key={index}>, {disc}</span>;
            }
          })}
        </Text>
        <Text>
          {'Pricing: '}
          {node.childMdx.frontmatter.professionalPricing}
        </Text>
        <Text>{node.childMdx.frontmatter.description}</Text>
        {node.childMdx.frontmatter.tags.map(tag => (
          <Badge key={tag} sx={{ px: 2, m: 4 }}>
            {tag}
          </Badge>
        ))}
      </Card>
    ))
  );

const logoImage = frontmatter => {
  if (frontmatter?.logo?.name === 'placeholder') {
    return (
      <Img
        sizes={frontmatter.logo.childImageSharp.sizes}
        style={{ maxWidth: 200, width: 200, height: 0, marginBottom: '12px' }}
        alt={`${frontmatter.title} logo`}
      />
    );
  } else if (frontmatter?.logo?.childImageSharp) {
    return (
      <Img
        sizes={frontmatter.logo.childImageSharp.sizes}
        style={{ maxWidth: 200, width: 200, marginBottom: '12px' }}
        alt={`${frontmatter.title} logo`}
      />
    );
  } else if (frontmatter?.logo?.publicURL) {
    return (
      <Image
        src={frontmatter.logo.publicURL}
        sx={{ maxWidth: 200, width: 200, marginBottom: '12px' }}
        alt={`${frontmatter.title} logo`}
      />
    );
  } else {
    return null;
  }
};

const pullUnique = dataArray => {
  let uniqueDisciplines = { disciplineButtons: {} };
  dataArray.forEach(data => {
    data.childMdx.frontmatter.discipline.forEach(discipline => {
      uniqueDisciplines.disciplineButtons[discipline] = false;
    });
  });
  return {
    uniqueDisciplines: Object.keys(uniqueDisciplines.disciplineButtons),
    filteredData: dataArray,
    ...uniqueDisciplines
  };
};

export const pageQuery = graphql`
  query SoftwarePage {
    software: allFile(
      filter: {
        sourceInstanceName: { eq: "software" }
        internal: { mediaType: { eq: "text/mdx" } }
      }
    ) {
      nodes {
        childMdx {
          id
          body
          frontmatter {
            path
            title
            discipline
            tags
            professionalPricing
            description
            website
            logo {
              name
              publicURL
              childImageSharp {
                sizes(maxWidth: 200) {
                  ...GatsbyImageSharpSizes_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;
