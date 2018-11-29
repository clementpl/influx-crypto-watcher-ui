import * as React from 'react';
import { withStyles, TextField, Paper, Typography, Button, FormGroup } from '@material-ui/core';
import { styles } from './styles';
import { AppContext } from '../../../context/App/AppProvider';

const initialState = {
  type: 'MarketWatcher',
  exchange: 'Binance',
  base: 'BTC',
  quote: 'USDT',
  extra: {
    refreshInterval: 30000,
  },
};

function AddWatcherForm({ className, classes, createWatcher }: any) {
  //const watcherCtx = React.useContext(WatcherContext);
  // watcher ctx.createWatcher
  const [watcherConfig, setWatcherConfig] = React.useState(initialState);
  function handleExchangeChange(e: any) {
    setWatcherConfig({
      ...watcherConfig,
      exchange: e.target.value,
    });
  }

  function handleBaseChange(e: any) {
    setWatcherConfig({
      ...watcherConfig,
      base: e.target.value,
    });
  }

  function handleQuoteChange(e: any) {
    setWatcherConfig({
      ...watcherConfig,
      quote: e.target.value,
    });
  }

  function handleRefreshIntervalChange(e: any) {
    setWatcherConfig({
      ...watcherConfig,
      extra: {
        ...watcherConfig.extra,
        refreshInterval: +e.target.value,
      },
    });
  }

  async function handleSubmit(e: any) {
    e.preventDefault();
    await createWatcher(watcherConfig);
  }

  return (
    <Paper className={className + ' ' + classes.root}>
      <Typography>Create watcher</Typography>
      <form>
        <FormGroup className={classes.row}>
          <TextField
            id="exchange-input"
            label="Exchange"
            className={classes.textField}
            value={watcherConfig.exchange}
            onChange={handleExchangeChange}
            margin="normal"
          />
          <TextField
            id="base-input"
            label="Base"
            className={classes.textField}
            value={watcherConfig.base}
            onChange={handleBaseChange}
            margin="normal"
          />
          <TextField
            id="quote-input"
            label="Quote"
            className={classes.textField}
            value={watcherConfig.quote}
            onChange={handleQuoteChange}
            margin="normal"
          />
        </FormGroup>
        <div />
        <FormGroup className={classes.row}>
          <TextField
            id="refresh-input"
            type="number"
            label="Refresh interval"
            className={classes.textField}
            value={watcherConfig.extra.refreshInterval}
            onChange={handleRefreshIntervalChange}
            margin="normal"
          />
        </FormGroup>
        <Button className={classes.createButton} variant="contained" color="primary" onClick={handleSubmit}>
          Create
        </Button>
      </form>
    </Paper>
  );
}

export default withStyles(styles)(AddWatcherForm);
