import * as React from 'react';
import {
  Drawer as MaterialDrawer,
  IconButton,
  withStyles,
  Divider,
  List,
  ListItemIcon,
  ListItemText,
  Typography,
  WithStyles,
} from '@material-ui/core';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import PeopleIcon from '@material-ui/icons/People';
import { ListItemLink } from '../../components/generic/ListItemLink';
import { styles } from './styles';
import { AppContext } from '../../context/App/AppProvider';

interface Props extends WithStyles<typeof styles> {}

function Drawer({ classes }: Props) {
  const appCtx = React.useContext(AppContext);
  return (
    <MaterialDrawer
      variant="permanent"
      classes={{
        paper: classes.drawerPaper + (appCtx.drawerOpen ? '' : ' ' + classes.drawerPaperClose),
      }}
      open={appCtx.drawerOpen}
    >
      <div className={classes.toolbarIcon}>
        <Typography variant="h6" color="inherit" noWrap className={classes.drawerTitle}>
          Menu
        </Typography>
        <IconButton onClick={appCtx.toggleDrawer}>
          <ChevronLeftIcon />
        </IconButton>
      </div>
      <Divider />
      <List component="nav">
        <ListItemLink to="/">
          <ListItemIcon>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText primary="Watchers" />
        </ListItemLink>
      </List>
    </MaterialDrawer>
  );
}

export default withStyles(styles)(Drawer);
