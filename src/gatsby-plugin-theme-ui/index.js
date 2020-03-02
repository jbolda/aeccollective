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
      my: 5
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
    },
    homepage: {
      landing: {
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
        },
        components: null
      },
      about: {
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
        },
        components: null
      },
      engagements: {
        container: {
          backgroundColor: 'secondary'
        },
        heading: {
          ...headingTextStandards,
          color: 'muted'
        },
        text: {
          ...bodyTextStandards,
          color: 'muted'
        },
        link: {
          ...bodyTextStandards,
          color: 'primary'
        }
      },
      articles: {
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
    articles: {
      list: {
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
      },
      article: {
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
    }
  },
  styles: {
    root: {
      ...bodyTextStandards,
      color: 'text'
    },
    h1: {
      color: 'text',
      ...headingTextStandards,
      fontSize: 5
    },
    h2: {
      color: 'text',
      ...headingTextStandards,
      fontSize: 4
    },
    h3: {
      color: 'text',
      ...headingTextStandards,
      fontSize: 3
    },
    h4: {
      color: 'text',
      ...headingTextStandards,
      fontSize: 2
    },
    h5: {
      color: 'text',
      ...headingTextStandards,
      fontSize: 1
    },
    h6: {
      color: 'text',
      ...headingTextStandards,
      fontSize: 0
    },
    p: {
      color: 'text',
      ...bodyTextStandards
    },
    span: {
      color: 'text',
      ...bodyTextStandards
    },
    a: {
      color: 'primary',
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
