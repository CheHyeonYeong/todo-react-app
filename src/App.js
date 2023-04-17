import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import './App.css';
import {Paper, List, Container} from "@material-ui/core";


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

  //추가하고자 하는 item이 오면 setting 과정을 지나서 Additem에 아이템을 넣어준다.

  add = (item) => {
    const thisItem = this.state.item;
    item.id="ID-" + thisItem.length; 
    item.done = false;
    thisItem.push(item);
    this.setState({item:thisItem});
    console.log("items : ", this.state.item);
  }

  delete = (item) =>{
    //app.js에서 실제로 작용 -> delete는 app.js에서 해야 함
    //props에서 받아서 넘겨주는 방식으로 간다.
    const thisItem = this.state.item;
    console.log("Before delete", this.state.item); //test용 코드
    const newItem = thisItem.filter(e=> e.id !==item.id);
    this.setState({items: newItem}, ()=> {
      console.log("After Delete : ", this.state.item);    
    });
    
  }
  render(){
    var todoItems = this.state.item.length > 0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.item.map((item, id)=> (
            <Todo item={item} key={item.id} delete={this.delete}/>
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
