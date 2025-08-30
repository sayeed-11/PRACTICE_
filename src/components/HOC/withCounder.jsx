import React from "react";

const withCounder = (OriginalComponent) => {
  class NewComponents extends React.Component {
    state = { count: 0 };
    increment = () => {
      this.setState(({count}) => ({ count: count + 1 }));
    };
    render() {
      const { count } = this.state;
      return <OriginalComponent count={count} increment={this.increment}/>;
    }
  }
  return NewComponents;
};

export default withCounder;
