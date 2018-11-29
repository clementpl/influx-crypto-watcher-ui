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
  createWatcher: Function;
}

const initialState: WatcherCtx = {
  watchers: [],
  watcher: {},
  getWatchers: () => [],
  getWatcher: (id: string) => ({ id }),
  startWatcher: (id: string) => ({ id }),
  stopWatcher: (id: string) => ({ id }),
  deleteWatcher: (id: string) => ({ id }),
  createWatcher: (watcher: any) => watcher,
};

export const WatcherContext = React.createContext(initialState);

/**
 * Watcher provider (provide any method usefull to manipulate watchers)
 *
 * @export
 * @param {*} { children }
 * @returns
 */
export function WatcherProvider({ children }: any) {
  const [watchers, setWatchers] = React.useState(initialState.watchers);
  const [watcher, setWatcher] = React.useState(initialState.watcher);

  async function createWatcher(watcherConfig: any): Promise<Watcher> {
    try {
      const w = await CryptoWatcherAPI.createWatcher(watcherConfig);
      this.getWatchers();
      return w;
    } catch (error) {
      throw error;
    }
  }

  async function getWatchers(): Promise<void> {
    const w = await CryptoWatcherAPI.getWatchers();
    setWatchers(w);
  }

  async function getWatcher(id: string): Promise<void> {
    const w = await CryptoWatcherAPI.getWatcher(id);
    setWatcher(w);
  }

  async function startWatcher(id: string): Promise<void> {
    await CryptoWatcherAPI.startWatcher(id);
    this.getWatchers();
  }

  async function stopWatcher(id: string): Promise<void> {
    await CryptoWatcherAPI.stopWatcher(id);
    this.getWatchers();
  }

  async function deleteWatcher(id: string): Promise<void> {
    await CryptoWatcherAPI.deleteWatcher(id);
    this.getWatchers();
  }

  return (
    <WatcherContext.Provider
      value={{
        watchers,
        watcher,
        getWatchers,
        getWatcher,
        startWatcher,
        stopWatcher,
        deleteWatcher,
        createWatcher,
      }}
    >
      {children}
    </WatcherContext.Provider>
  );
}
