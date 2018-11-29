import * as React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { withStyles, WithStyles, MuiThemeProvider } from '@material-ui/core';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from './Drawer/Drawer';
import Header from './Header/Header';
import Watchers from '../containers/Watchers/Watchers';

// Containers
import { styles } from './style';
import { theme } from './Theme';
import { Toast } from './Toast/Toast';

interface Props extends WithStyles<typeof styles> {}

function App({ classes }: Props): JSX.Element {
  return (
    <MuiThemeProvider theme={theme}>
      <Toast />
      <Router>
        <div className={classes.root}>
          <CssBaseline />
          <Header />
          <Drawer />
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Route exact path="/" component={Watchers} />
          </main>
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default withStyles(styles)(App);
