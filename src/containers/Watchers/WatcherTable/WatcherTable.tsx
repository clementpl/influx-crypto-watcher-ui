import * as React from 'react';
import { Paper, Table, TableHead, TableRow, TableBody, withStyles, IconButton, Tooltip } from '@material-ui/core';
import PlayIcon from '@material-ui/icons/PlayArrow';
import PauseIcon from '@material-ui/icons/Pause';
import DeleteIcon from '@material-ui/icons/Delete';
import MyCell from './MyCell';
import { styles } from './styles';

function WatcherTable({ classes, watchers, stopWatcher, startWatcher, deleteWatcher }: any) {
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow className={classes.header}>
            <MyCell className={classes.headerCell}>Status</MyCell>
            <MyCell className={classes.headerCell}>Exchange</MyCell>
            <MyCell className={classes.headerCell}>Base</MyCell>
            <MyCell className={classes.headerCell}>Quote</MyCell>
            <MyCell className={classes.headerCell}>Actions</MyCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {watchers
            .filter((watcher: any) => watcher.type === 'MarketWatcher')
            .map((watcher: any) => {
              return (
                <TableRow className={classes.row} key={watcher.id}>
                  <MyCell>{watcher.status}</MyCell>
                  <MyCell>{watcher.exchange}</MyCell>
                  <MyCell>{watcher.base}</MyCell>
                  <MyCell>{watcher.quote}</MyCell>
                  <MyCell>
                    <Tooltip title="Stop" placement="bottom">
                      <IconButton className={classes.iconButton} onClick={() => stopWatcher(watcher)}>
                        <PauseIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Start" placement="bottom">
                      <IconButton className={classes.iconButton} onClick={() => startWatcher(watcher)}>
                        <PlayIcon />
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Delete" placement="bottom">
                      <IconButton className={classes.iconButton} onClick={() => deleteWatcher(watcher)}>
                        <DeleteIcon />
                      </IconButton>
                    </Tooltip>
                  </MyCell>
                </TableRow>
              );
            })}
        </TableBody>
      </Table>
    </Paper>
  );
}

export default withStyles(styles)(WatcherTable);
