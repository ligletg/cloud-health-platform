import React from "react";
import AppBar from 'material-ui/AppBar';
// import styles from "./tilescontainer.scss";
import style from "../../stylesheets/components/_tilescontainer.scss";

class TilesContainer extends React.Component {
  render() {
    return (
      <div class={style["tilescontainer-wrapper"]}>
        <h1>This is the Home page !</h1>
      </div>
    );
  }
}

export default TilesContainer;
