import * as React from 'react';
import { ListItem } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { ListItemProps } from '@material-ui/core/ListItem';
import { LocationDescriptor } from 'history';

interface Props extends ListItemProps {
  // ListItemProps and LinkProps both define an 'innerRef' property
  // which are incompatible. Therefore the props `to` and `replace` are
  // simply duplicated here.
  to: LocationDescriptor;
  replace?: boolean;
}

function createLink({ innerRef, ...props }: Props) {
  // Remove `innerRef` from properties as the interface
  // is incompatible. The property `innerRef` should not be
  // needed as the `ListItem` component already provides that
  // feature with a different interface.
  return <Link {...props} />;
}

export class ListItemLink extends React.PureComponent<Props> {
  render() {
    return <ListItem {...this.props} component={createLink} />;
  }
}
