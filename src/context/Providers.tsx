import * as React from 'react';
import { AppProvider } from './App/AppProvider';
import { WatcherProvider } from './Watcher/WatcherProvider';

export function Providers(props: any) {
  return (
    <AppProvider>
      <WatcherProvider>{props.children}</WatcherProvider>
    </AppProvider>
  );
}
