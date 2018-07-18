import React, { Component } from 'react';

import './todo.css'
import Header from './header'
import Footer from './footer'
import Item from './ListItem'
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
          todoList:[],
            statusOfList:"all"

        };
    }

    generateUUID=() =>{
        /*jshint bitwise:false */
        var i,
            random;
        var uuid = '';

        for (i = 0; i < 32; i++) {
            random = Math.random() * 16 | 0;
            if (i === 8 || i === 12 || i === 16 || i === 20) {
                uuid += '-';
            }
            uuid += (i === 12
                ? 4
                : (i === 16
                    ? (random & 3 | 8)
                    : random)).toString(16);
        }
        return uuid;
    }

     addItems=(obj)=>{
        console.log(obj )
         this.state.todoList.push(obj);
        this.setState({
            todoList: this.state.todoList
        })

         console.log(this.state.todoList)
     }


  render() {
    return (
      <div className="App">

          <Header  type={this.state.todoList} func={this.generateUUID} addfunc={this.addItems}/>
          <Item  id={"1234-1442-21421-1414"} comp={"checked"} value={"test ashffajfk"} />

          {this.state.todoList.map((x)=><Item id={x.id} comp="" value={x.value}/>)}
          <Footer/>
      </div>
    );
  }
}

export default App;
