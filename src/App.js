import React from 'react';
import Todo from './Todo'
import './App.css';
import {Paper, List} from "@material-ui/core"

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
        item:[
          {id:0, title:"hello World", done: true},
          {id:1, title:"hello World2", done: false} ,
          {id:3, title:"소스코드를 고치면 알아서 해줍니다", done: false} 
          //값을 배열로 받았으므로 배열로 내보낼 수 있게끔 코드를 짜야 함
        ]
    };  
  }
  render(){
    var todoItems = this.state.item.length >0 && (
      <Paper style={{margin:16}}>
        <List>
          {this.state.item.map((item, idx)=> (
            <Todo item={item} key={item.id}/>
          ))}
        </List>
      </Paper>
    );
    //나는 item으로 하고 싶어서 this.state에 item만 넣어둠.
    //map = 원소를 배열로 하나씩 바꿔줌
    return (
      <div className='App'>
        
        {todoItems}
      </div>
    );   
  }
}
    
export default App;
