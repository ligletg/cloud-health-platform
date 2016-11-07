import React from "react";
import AppBar from 'material-ui/AppBar';

class AppContainer extends React.Component {
  render() {
    return (
      <AppBar
        title="Title"
        iconClassNameRight="muidocs-icon-navigation-expand-more"
      />
    );
  }
}

export default AppContainer;
