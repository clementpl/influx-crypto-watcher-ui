import * as React from 'react';
import { Snackbar } from '@material-ui/core';
import { AppContext } from '../../context/App/AppProvider';

export function Toast(props: any) {
  const appCtx = React.useContext(AppContext);
  return (
    <Snackbar
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      autoHideDuration={5000}
      onClose={() => appCtx.setToastMsg('')}
      open={appCtx.toastMsg.length > 0 ? true : false}
      ContentProps={{
        'aria-describedby': 'message-id',
      }}
      message={<span id="message-id">{appCtx.toastMsg}</span>}
    />
  );
}
