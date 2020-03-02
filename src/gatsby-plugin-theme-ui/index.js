const headingTextStandards = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading'
};

const bodyTextStandards = {
  fontFamily: 'body',
  fontWeight: 'body',
  lineHeight: 'body'
};

export default {
  initialColorModeName: 'light',
  useCustomProperties: true, // true is default
  // ^ prevents FOUC aka flash of unstyled content
  useColorSchemeMediaQuery: true, // turns on dark mode if set in browser
  breakpoints: ['40em', '56em', '64em'],
  space: [0, 2, 4, 8, 12, 16, 20, 24, 28],
  fonts: {
    body: 'Miriam Libre, sans-serif',
    heading: 'Raleway, sans-serif',
    monospace: 'Menlo, monospace'
  },
  fontSizes: [12, 14, 16, 24, 32, 48, 64, 96, 128],
  fontWeights: {
    body: 400,
    heading: 800,
    bold: 700
  },
  lineHeights: {
    body: 2.0,
    heading: 1.5
  },
  colors: {
    text: '#25274D',
    background: '#F4F4F4',
    primary: '#82ccdd',
    secondary: '#60a3bc',
    muted: '#25274D',
    modes: {
      dark: {
        text: '#F4F4F4',
        background: '#25274D',
        primary: '#60a3bc',
        secondary: '#464866',
        muted: '#82ccdd'
      }
    }
  },
  text: {
    heading: {
      ...headingTextStandards,
      letterSpacing: 'heading',
      my: 5,
      color: 'text'
    },
    body: {
      ...bodyTextStandards,
      letterSpacing: 'body'
    }
  },
  cards: {
    primary: {
      borderRadius: 4,
      boxShadow: '0 0 8px rgba(0, 0, 0, 0.125)',
      borderColor: 'muted'
    }
  },
  badges: {
    primary: {
      mr: 3,
      py: 0,
      px: 3,
      borderRadius: 8,
      bg: 'background',
      color: 'text',
      borderColor: `text`,
      borderStyle: `inset`,
      borderWidth: '3px'
    }
  },
  jboldaGatsbyTheme: {
    layout: {
      heading: {
        ...headingTextStandards,
        color: 'text'
      },
      text: {
        ...bodyTextStandards,
        color: 'text'
      },
      link: {
        ...bodyTextStandards,
        color: 'primary'
      }
    }
  },
  styles: {
    root: {
      ...bodyTextStandards,
      color: 'text'
    },
    h1: {
      ...headingTextStandards,
      fontSize: 5
    },
    h2: {
      ...headingTextStandards,
      fontSize: 4
    },
    h3: {
      ...headingTextStandards,
      fontSize: 3
    },
    h4: {
      ...headingTextStandards,
      fontSize: 2
    },
    h5: {
      ...headingTextStandards,
      fontSize: 1
    },
    h6: {
      ...headingTextStandards,
      fontSize: 0
    },
    p: {
      ...bodyTextStandards
    },
    span: {
      ...bodyTextStandards
    },
    a: {
      color: 'muted',
      textDecorationColor: 'primary',
      '&:link': {
        background: 'muted',
        textDecoration: 'underline solid',
        textDecorationColor: 'primary'
      },
      '&:visited': {
        textDecorationColor: 'secondary'
      },
      '&:hover': {
        textDecorationColor: 'muted',
        textDecorationThickness: '4px'
      },
      ...bodyTextStandards
    },
    pre: {
      fontFamily: 'monospace',
      overflowX: 'auto',
      code: {
        color: 'inherit'
      }
    },
    code: {
      fontFamily: 'monospace',
      fontSize: 'inherit'
    },
    table: {
      width: '100%',
      borderCollapse: 'separate',
      borderSpacing: 0
    },
    th: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    td: {
      textAlign: 'left',
      borderBottomStyle: 'solid'
    },
    img: {
      maxWidth: '100%'
    }
  }
};
