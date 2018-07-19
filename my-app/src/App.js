import React, {Component} from 'react';

import './todo.css'
import Header from './header'
import Footer from './footer'
import Item from './ListItem'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todoList: [],
            statusOfList: "All"

        };
    }

    generateUUID = () => {
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

    changeStatus = (value) => {
        this.setState({
            statusOfList: value
        })
    }

    addItems = (obj) => {
        let todos=this.deepCopy(this.state.todoList)
        todos.push(obj)
        this.setState({
            todoList: todos
        })

    }


    filterByStatus = (todos, status) => {

        const filterExecuters = {
            All() {
                return true;
            },
            Active(element) {
                return element.name==="";
            },
            Complete(element) {
                return element.name==="checked";
            }
        }

        const result = todos.filter(filterExecuters[status]);
        return result;
    }

    changeName=(id,content)=>{
        let todos=this.deepCopy(this.state.todoList)
        todos.find(item=>item.id==id).name=content

        this.setState({
           todoList:todos
    })
      }

    deepCopy(array) {
        return JSON.parse(JSON.stringify(array));
    }
    render() {
       let but=this
        return (
            <div className="container">
                <div>
                    <h2>Jquery To Do List</h2>
                    <p>
                        <em>Simple Todo List with adding and filter by diff status.</em>
                    </p>
                </div>
                <Header type={this.state.todoList} func={this.generateUUID} addfunc={this.addItems}/>

                {this.filterByStatus(this.state.todoList, this.state.statusOfList).map((x) => <Item key={x.id} id={x.id} name={x.name} value={x.value}  comple={x.complete}  changeName={(id,content)=>this.changeName(id,content)}  />)}
                <Footer status={this.state.statusOfList} change={this.changeStatus}/>
            </div>
        );
    }
}

export default App;
