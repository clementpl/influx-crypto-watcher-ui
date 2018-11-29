import * as React from 'react';
import { TableCell, withStyles } from '@material-ui/core';

function MyCell({ className, classes, children }: any) {
  return <TableCell className={`${className} ${classes.cell}`}>{children}</TableCell>;
}

const styles: any = (theme: any) => {
  return {
    cell: {
      textAlign: 'center',
    },
  };
};

export default withStyles(styles)(MyCell);
