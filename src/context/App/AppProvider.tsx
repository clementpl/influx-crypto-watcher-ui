import * as React from 'react';

interface AppCtx {
  drawerOpen: boolean;
  toggleDrawer?: any;
  toastMsg: string;
  setToastMsg?: any;
}

const initialState: AppCtx = {
  drawerOpen: false,
  toastMsg: '',
};

export const AppContext = React.createContext(initialState);

export class AppProvider extends React.Component {
  state = initialState;

  public toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen });
  }

  public setToastMsg(msg: string) {
    this.setState({ toastMsg: msg });
  }

  public render(): JSX.Element {
    return (
      <AppContext.Provider value={{ ...this.state, setToastMsg: this.setToastMsg.bind(this), toggleDrawer: this.toggleDrawer.bind(this) }}>
        {this.props.children}
      </AppContext.Provider>
    );
  }
}
