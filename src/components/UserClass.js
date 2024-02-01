import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {name,place} = this.props
    return (
      <div>
        <h1>full name : {name}</h1>
        <h2>place : {place}</h2>
      </div>
    );
  }
}

export default UserClass;
