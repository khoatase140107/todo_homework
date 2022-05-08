//import { render } from "@testing-library/react";
import { Component } from "react";
import FilterListToDo from "./FilterListToDo";
import ListToDo from "./ListToDo";
import AddToDo from "./AddToDo";

const initialState = {
  todos: [
    { id: 1, title: "Đi cafe với gấu", isCompleted: true },
    { id: 2, title: "Học ReactJS", isCompleted: false },
    { id: 3, title: "Học cách thổi nến", isCompleted: false },
    { id: 4, title: "Dắt gấu đi dạo", isCompleted: false },
    { id: 5, title: "Trade coin", isCompleted: false },
  ],
}

export default class TodoList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      addValue: null,
      searchValueTodos: initialState.todos
    };
  }

  filterListToDo = (searchValue) => {
    if (searchValue.length > 0) {
      
      const newTodos = initialState.todos.filter((todo) =>
        todo.title.includes(searchValue)
      );
     
      this.setState({
        searchValueTodos: newTodos,
        searchValue,
      });
    } else {
      
      this.setState({
        searchValue: "",
        searchValueTodos: initialState.todos,
      });
    }
  };

  resetInput = () => {
    this.setState({
      searchValue: null,
      searchValueTodos: initialState.todos,
    });
  };
  deleteToDo = (id) => {
    //const todos = this.state.todos;
    const indexToDoDelete = initialState.todos.findIndex(
      (todo) => todo.id === id
    );
    initialState.todos[indexToDoDelete].isCompleted = false;
    // this.setState({
    //   searchValueTodos: initialState.todos,
    // });
    this.filterListToDo(this.state.searchValue);
  };

  addToDo = (valueAdd) => {
    //const todos = this.state.todos;
    console.log(valueAdd)
    if(valueAdd.length > 0){
      const newTodo = {
        id: initialState.todos.length + 1,
        title: valueAdd,
        isCompleted: true,
      };
      initialState.todos.push(newTodo)
    this.filterListToDo(this.state.searchValue);
    }
    
    //const newTodos = [...todos, newTodo];
    // this.setState({
    //   todos: [...initialState.todos, newTodo],
    // });
    // this.setState(newTodos, () => {
    //    todos: newTodos;
    // })
    
  };
  render() {
    return (
      <div className="myTodoList">
        <div className="listTask">
          <FilterListToDo
            resetInput={this.resetInput}
            filterListToDo={this.filterListToDo}
          />
          <ListToDo
            deleteToDo={this.deleteToDo}
            listTodo={this.state.searchValueTodos}
          />
          <AddToDo addToDo={this.addToDo} />
        </div>
      </div>
    );
  }
}
