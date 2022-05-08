import { Component } from "react";





export default class AddToDo extends Component {
    state = {
        inputValue: "",
    }
    handleChange = (e) => {
      e.preventDefault();
        this.setState({
            inputValue: e.target.value
        })
    }
    handleSubmit = (e) => {
      //console.log(e.target.value)
      e.preventDefault();
      e.target.reset();
    }
  render() {
      const {addToDo} = this.props;
    return (
      <div>
        <h1
          style={{
            textTransform: "uppercase",
          }}
        >
          Add Item
        </h1>
        <hr witdh={100} size="4" color="black" />
        <form onSubmit={this.handleSubmit} >
        <input className="inputSearch" placeholder="New Item Title" onChange={this.handleChange} required /> 
                <button className="btnSearch" onClick={() => {
                    addToDo(this.state.inputValue);
                } }>Add</button>
        </form>
      </div>
    );
  }
}
