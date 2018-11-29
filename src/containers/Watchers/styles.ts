import { createStyles } from '@material-ui/core';

export const styles = (theme: any) => {
  return createStyles({
    root: {
      width: '80%',
      padding: theme.spacing.unit,
      margin: 'auto',
      overflowX: 'auto',
      textAlign: 'center',
    },
    createForm: {
      margin: 'auto',
      marginBottom: theme.spacing.unit * 3,
    },
  });
};
