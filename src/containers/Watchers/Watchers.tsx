import * as React from 'react';
import { withStyles } from '@material-ui/core';
import { styles } from './styles';
import { Watcher } from '../../service/CryptoWatcherAPI';
import { WatcherContext } from '../../context/Watcher/WatcherProvider';
import { AppContext } from '../../context/App/AppProvider';
import WatcherTable from './WatcherTable/WatcherTable';
import AddWatcherForm from './AddWatcherForm/AddWatcherForm';

function Watchers({ classes }: any) {
  const watcherCtx = React.useContext(WatcherContext);
  const appCtx = React.useContext(AppContext);
  // Fetch watchers whenMount
  React.useEffect(() => {
    watcherCtx.getWatchers();
  }, []);
  const watchers: Watcher[] = watcherCtx.watchers;

  return (
    <div className={classes.root}>
      <AddWatcherForm
        className={classes.createForm}
        createWatcher={async (watcher: any) => {
          try {
            const w = await watcherCtx.createWatcher(watcher);
            appCtx.setToastMsg(`Watcher ${w.id} Created`);
          } catch (error) {
            appCtx.setToastMsg(error.message);
          }
        }}
      />
      <WatcherTable
        watchers={watchers}
        stopWatcher={async (watcher: any) => {
          await watcherCtx.stopWatcher(watcher.id);
          appCtx.setToastMsg(`Watcher ${watcher.id} stopped`);
        }}
        startWatcher={async (watcher: any) => {
          await watcherCtx.startWatcher(watcher.id);
          appCtx.setToastMsg(`Watcher ${watcher.id} running`);
        }}
        deleteWatcher={async (watcher: any) => {
          await watcherCtx.deleteWatcher(watcher.id);
          appCtx.setToastMsg(`Watcher ${watcher.id} deleted`);
        }}
      />
    </div>
  );
}

export default withStyles(styles)(Watchers);
