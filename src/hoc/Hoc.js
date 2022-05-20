import React from "react";

const Wrapper = (WrappedComponent) => {
  class Wrapper extends React.Component {
    state = {
      num: 4,
    };

    render() {
      return <WrappedComponent num={this.state.num} />;
    }
  }
  return Wrapper;
};

export default Wrapper;
