import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
  }

  componentDidMount() {
    console.log("component didmount");
  }
  render() {
    const {name,place} = this.props
    return (
      <div>
        <h1>full name : {name}</h1>
        <h2>place : {place}</h2>
        <h3>count fron class : {this.state.count}</h3>
        <button onClick={()=>{
          this.setState({count:this.state.count+1})
        }}>Counter</button>
      </div>
    );
  }
}

export default UserClass;
