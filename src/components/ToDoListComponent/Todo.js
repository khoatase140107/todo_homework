import { Component } from "react";

export default class Todo extends Component{
    render(){
        const {todo, deleteToDo} = this.props;
        const {id,title,isCompleted} = todo;
        return(
            <div className="todo" key={id}>
                <div className="todo-item">
                  <p
                    style={{
                      textDecoration: isCompleted
                        ? "default"
                        : "line-through",
                        textDecorationColor:isCompleted ? "#transparent" : "#DDDDDE" ,
                        color : isCompleted ? "black" : "#DDDDDE" 
                    }}
                  >
                    {title}
                  </p>
                  {isCompleted ? <button
                    className="btnDelete"
                    onClick={() => {
                      deleteToDo(id);
                    }}
                  >
                    Delete
                  </button> : ""}  
                  
                </div>
                <hr witdh={100} size="1" color="black" />
              </div>
        )
    }
}