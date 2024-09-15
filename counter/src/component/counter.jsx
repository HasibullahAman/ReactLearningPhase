import { Component } from "react";

class Counter extends Component {
  constructor() {
    super();
    this.state = {
      name: "Hasiubllah Aman",
    };

    // this.changeName = this.changeName.bind(this);

  }

//   changeName() {
//     this.setState({name:"Nawidullah Aman"})
//   }
    changeName = () =>{
        this.setState({name:"NawidullahAman"})
    }

  render() {
    return (
      <div>
        <p>ChangeName</p>
        <p>{this.state.name}</p>
        <button onClick={this.changeName}>ChangeName</button>
      </div>
    );
  }
}

export default Counter;
