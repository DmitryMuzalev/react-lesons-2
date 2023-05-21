import React from 'react';
import { Navigate } from 'react-router';

export default function Auth(Component) {
  class RedirectHOC extends React.Component {
    render() {
      return this.props.isLogin ? (
        <Component {...this.props} />
      ) : (
        <Navigate to="/login" />
      );
    }
  }
  return RedirectHOC;
}
