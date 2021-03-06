import React ,{Component } from  'react';
import Todos from './components/Todos';
import Header from './components/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

import './App.css';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

      todos : [
        {
        id: uuid.v4(),
        title: "Read a book" ,
        completed:false
        } ,

        {
          id: uuid.v4(),
          title: "go to class" ,
          completed:false
          } ,

          {
            id: uuid.v4(),
            title: "call  mom" ,
            completed:false
            } ,

            {
              id: uuid.v4(),
              title: "Play a game" ,
              completed:false
              } 
      ]

     };

  }

  markComplete = (id)=> {
       this.setState({todos: this.state.todos.map (todo =>{
         if(todo.id ===id){
           todo.completed =!todo.completed
         }
         return todo;
       })});
  }

  delTodo = (id)=> {
    this.setState({todos: [...this.state.todos.filter(todo => todo.id !== id)] }
    );
  }

addTodo= (title) => {
  const newTodo ={
    id: uuid.v4() ,
    title ,
    completed: false
  }
  this.setState({todos: [...this.state.todos ,newTodo]});
}



//function App() {
  render(){
    console.log(this.state.todos)
  return (
    <div className="App">
    <div className="container">
      <Header />
      <AddTodo addTodo={this.addTodo}/>
      <Todos todos={this.state.todos} markComplete = {this.markComplete} delTodo={this.delTodo}/>
    </div>
   
    </div>
  );
}
}


export default App;
