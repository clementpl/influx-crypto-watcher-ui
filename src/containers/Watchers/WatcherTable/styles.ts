import { createStyles } from '@material-ui/core';

export const styles = (theme: any) => {
  return createStyles({
    root: {
      width: '100%',
      margin: 'auto',
      overflowX: 'auto',
    },
    header: {
      backgroundColor: theme.palette.grey.main,
    },
    headerCell: {
      color: 'white',
      fontSize: '0.85rem',
      fontWeight: 'bold',
    },
    iconButton: {
      color: theme.palette.grey.main,
    },
  });
};
