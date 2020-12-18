import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import lightGreen from '@material-ui/core/colors/lightGreen';

export default createMuiTheme({
  palette: {
    primary: {
      main: lightGreen[700],
      contrastText: '#ffffff',
    },
    secondary: {
      main: blue[700],
      contrastText: '#ffffff',
    },
  },
});
