import {createMuiTheme} from '@material-ui/core/styles';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#eceff1',
    },
    secondary: {
      light: '#0066ff',
      main: "#66fcf1",
      // dark: will be calculated from palette.secondary.main,
      contrastText: '#ffcc00',
    },
    background: "#263238",
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: 3,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: 0.2,
  },
});

export default theme;