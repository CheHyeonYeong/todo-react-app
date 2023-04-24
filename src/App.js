import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import './App.css';
import {Paper, List, Container} from "@material-ui/core";
import { call } from "./service/ApiService"

class App extends React.Component { 

  constructor(props){
    super(props);
    this.state = {
        item:[
          
          //값을 배열로 받았으므로 배열로 내보낼 수 있게끔 코드를 짜야 함
          //배열에 추가하는 함수를 자식에 보내는 방법 or 값을 모두 배열로 만들어서 prop를 통해 자식에게 보낼 수 있음
        ]
    };  
  }

  
  componentDidMount(){
    call("/todo","GET",null).then((response)=>
    this.setState({item: response.data}))
  }

  add = (item) => {
    call("/todo","POST",item).then((response)=>
    this.setState({item: response.data})
    );
  }

  delete = (item) =>{
    call("/todo","DELETE",item).then((response)=>
    this.setState({item: response.data})
    ); 
  }

  update = (item)=>{
    call("/todo", "PUT", item).then((response)=>
    this.setState({item: response.data}))
  }
  
  render(){
    var todoItems = this.state.item.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.item.map((item, id)=> (
            <Todo item={item} key={item.id} delete={this.delete}
            update={this.update}/>
          ))}
        </List>
      </Paper>
    );
    //나는 item으로 하고 싶어서 this.state에 item만 넣어둠.
    //map = 원소를 배열로 하나씩 바꿔줌
    return (
      <div className="App">
        <Container maxWidth="md">
          <AddTodo add={this.add}/> 
          <div className='TodoList'>{todoItems}</div>
        </Container>
      </div>
    );   
  }
}
    
export default App;
