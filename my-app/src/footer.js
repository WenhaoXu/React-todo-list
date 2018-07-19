import React, {Component} from 'react';
import './todo.css'


export default class footer extends Component{

    constructor(props){
         super(props);
         this.state={
             status: props.status

         }
    }

    showTodoList=(event)=>{
      let sta= event.target.text;
        this.props.change(sta)

    }

    render() {

        return (
            <div>
            <ul id="filters">
                <li>
                    <a href="#" data-filter="all" className={this.state.status == " all" ? " selected" : ""}
                       onClick={this.showTodoList}>All</a>
                </li>
                <li>
                    <a href="#" data-filter="active" className={this.state.status== " active" ? "selected" : ""}
                       onClick={this.showTodoList}>Active</a>
                </li>
                <li>
                    <a href="#" data-filter="complete" className={this.state.status == " complete" ? "selected" : ""}
                       onClick={this.showTodoList}>Complete</a>
                  </li>
            </ul>
        </div>

        )
    }

}
