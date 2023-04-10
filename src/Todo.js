import React from "react";

class Todo extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            item : {id: 0, title: "hello World!", done:true},
        }
    }
    render(){
        return(
            <div className="App">
                <Todo item={this.state.item}/>
            </div>
        )
    }
}
export default Todo;