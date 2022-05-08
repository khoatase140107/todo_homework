import { Component } from "react";
import Todo from "./Todo";
export default class ListToDo extends Component {
  render() {
    const { listTodo, deleteToDo } = this.props;
    return (
      <div className="listToDo">
        <h1
          style={{
            textTransform: "uppercase",
          }}
        >
          todo
        </h1>
        <hr witdh={100} size="4" color="black" />
        
        <div className="listToDo"
        style={{
          width: 370,
          height: 270,
          overflow: "scroll"
        }}
        >
          {listTodo.map((item, index) => {
            return (
              <Todo key={index} todo={item} deleteToDo={deleteToDo}/>
            );
          })}
        </div>
      </div>
    );
  }
}
