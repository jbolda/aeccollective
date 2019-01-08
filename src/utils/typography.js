import Typography from 'typography';

const typography = new Typography({
  baseFontSize: '16px',
  googleFonts: [
    {
      name: 'Miriam Libre',
      styles: ['800']
    },
    {
      name: 'Raleway',
      styles: ['400', '400i', '700']
    }
  ],
  headerFontFamily: ['Miriam Libre', 'sans-serif'],
  bodyFontFamily: ['Raleway', 'sans-serif'],
  headerWeight: 800,
  bodyWeight: 400,
  boldWeight: 700,
  baseLineHeight: 1.5
});

export default typography;
