import React from "react";
import { Route, Redirect } from "react-router-dom";
import { connect } from "react-redux";

const PrivateRouteComponent = ({ component: Component, ...rest }) => {
  const { auth } = rest;

  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    auth: state.auth.isAuthenticated,
    location: ownProps.path,
    routeProps: {
      exact: ownProps.exact,
      path: ownProps.path
    }
  };
};

const PrivateRoute = connect(
  mapStateToProps,
  null
)(PrivateRouteComponent);
export default PrivateRoute;
