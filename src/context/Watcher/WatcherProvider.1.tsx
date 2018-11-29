import * as React from 'react';
import CryptoWatcherAPI, { Watcher } from '../../service/CryptoWatcherAPI';

interface WatcherCtx {
  watchers: Array<Watcher> | [];
  watcher: Watcher | {};
  getWatchers: Function;
  getWatcher: Function;
  startWatcher: Function;
  stopWatcher: Function;
  deleteWatcher: Function;
}

const initialState: WatcherCtx = {
  watchers: [],
  watcher: {},
  getWatchers: () => [],
  getWatcher: (id: string) => ({ id }),
  startWatcher: (id: string) => ({ id }),
  stopWatcher: (id: string) => ({ id }),
  deleteWatcher: (id: string) => ({ id }),
};

export const WatcherContext = React.createContext(initialState);

export class WatcherProvider extends React.Component {
  state = initialState;

  public async getWatchers(): Promise<void> {
    const w = await CryptoWatcherAPI.getWatchers();
    this.setState({ watchers: w });
  }

  public async getWatcher(id: string): Promise<void> {
    const w = await CryptoWatcherAPI.getWatcher(id);
    this.setState({ watcher: w });
  }

  public async startWatcher(id: string): Promise<void> {
    await CryptoWatcherAPI.startWatcher(id);
    this.getWatchers();
  }

  public async stopWatcher(id: string): Promise<void> {
    await CryptoWatcherAPI.stopWatcher(id);
    this.getWatchers();
  }

  public async deleteWatcher(id: string): Promise<void> {
    await CryptoWatcherAPI.deleteWatcher(id);
    this.getWatchers();
  }

  /**
   * Render Provider, bind context actions to provider value
   *
   * @returns {JSX.Element}
   * @memberof WatcherProvider
   */
  public render(): JSX.Element {
    return (
      <WatcherContext.Provider
        value={{
          ...this.state,
          getWatchers: this.getWatchers.bind(this),
          getWatcher: this.getWatcher.bind(this),
          startWatcher: this.startWatcher.bind(this),
          stopWatcher: this.stopWatcher.bind(this),
          deleteWatcher: this.deleteWatcher.bind(this),
        }}
      >
        {this.props.children}
      </WatcherContext.Provider>
    );
  }
}
