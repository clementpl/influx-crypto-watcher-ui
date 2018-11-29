import * as React from 'react';
import { AppBar, Toolbar, IconButton, Typography, Badge, withStyles, WithStyles } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { AppContext } from '../../context/App/AppProvider';
// Style (css)
import { styles } from './styles';

interface Props extends WithStyles<typeof styles> {}

function Header({ classes }: Props) {
  const appCtx = React.useContext(AppContext);
  return (
    <AppBar position="fixed" className={classes.appBar + (appCtx.drawerOpen ? ' ' + classes.appBarShift : '')}>
      <Toolbar disableGutters={!appCtx.drawerOpen} className={classes.toolbar}>
        <IconButton
          color="inherit"
          aria-label="Open drawer"
          onClick={appCtx.toggleDrawer}
          className={classes.menuButton + (!appCtx.drawerOpen ? '' : ' ' + classes.menuButtonHidden)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" color="inherit" noWrap className={classes.title}>
          Influx Crypto Watcher
        </Typography>
        <IconButton color="inherit">
          <Badge badgeContent={0} color="error">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}

export default withStyles(styles)(Header);
