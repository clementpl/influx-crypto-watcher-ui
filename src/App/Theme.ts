import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import indigo from '@material-ui/core/colors/indigo';
import teal from '@material-ui/core/colors/teal';
import green from '@material-ui/core/colors/green';
import red from '@material-ui/core/colors/red';
import grey from '@material-ui/core/colors/grey';

export const theme = createMuiTheme(<any>{
  palette: {
    primary: {
      main: indigo['800'],
    },
    secondary: {
      main: teal['600'],
    },
    error: {
      main: red['800'],
    },
    red: {
      main: red['600'],
    },
    green: {
      main: green['600'],
    },
    blue: {
      main: blue['600'],
    },
    grey: {
      main: grey['800'],
    },
    black: {
      main: 'black',
    },
  },
  typography: {
    useNextVariants: true,
  },
});
