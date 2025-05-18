import React from "react";

class GreetingElementByClasses extends React.Component {
  render() {
    return <span>Hello, {this.props.name}! --- class-based </span>;
  }
}

export default GreetingElementByClasses;
