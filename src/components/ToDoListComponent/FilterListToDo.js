import { Component } from "react";

export default class FilterListToDo extends Component{
    handleSearch = (e) => {
        e.preventDefault();
        e.target.reset();
    }
    render(){
        const {filterListToDo , resetInput} = this.props;
        return(
            <div>
                <h1>Filter tasks(by name)</h1>
                <form onSubmit={this.handleSearch} >
                <input className="inputSearch"  placeholder="Enter your name task to search" onChange={(event) => {
                    filterListToDo(event.target.value) 
                }}  /> 
                <button className="btnSearch" onClick={resetInput}>Clear</button>
                </form>
                
            </div>
        )
    }
}