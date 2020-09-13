import React from 'react';

export default class Cell extends React.Component {
  getValue() {
    const { value } = this.props;

    if (!value.isRevealed) {
      return null;
    }
    if (value.isMine) {
      return "Mine";
    }
    if (value.neighbour === 0) {
      return null;
    }
    return value.neighbour;
  }

  render() {
    const { value, onClick } = this.props;
    let className =
      "cell" +
      (value.isRevealed ? "" : " hidden") +
      (value.isMine ? " is-mine" : "");

    return (
      <div
        onClick={onClick}
        className={className}
      >
        {this.getValue()}
      </div>
    );
  }
}
