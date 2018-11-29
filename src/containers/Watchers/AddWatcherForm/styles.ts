import { createStyles } from '@material-ui/core';

export const styles = (theme: any) => {
  return createStyles({
    root: {
      width: 'max-content',
      padding: theme.spacing.unit,
    },
    textField: {
      marginLeft: theme.spacing.unit * 2,
      marginRight: theme.spacing.unit * 2,
      width: 'max-content',
    },
    createButton: {
      display: 'block',
      margin: 'auto',
      marginTop: theme.spacing.unit * 2,
    },
    row: {
      display: 'inline',
    },
    /*container: {
      display: 'flex',
      flexWrap: 'wrap',
    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 200,
    },*/
  });
};
