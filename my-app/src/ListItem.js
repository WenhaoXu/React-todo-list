import React, {Component} from 'react';
import './todo.css'


export default class ListItem extends Component {

    constructor(props) {
        super();
        this.state = {
            uuid: props.id,
            complete: props.comp,
            value: props.value
        }
    }

    checkItem = (event) => {
     let checked=  event.target.parentNode
      if(checked==""){
          document.getElementById(this.state.uuid).setAttribute("className","checked")
      }
        else{
          document.getElementById(this.state.uuid).setAttribute("className","")
      }
    }

    editItem = () => {

    }

    //event, '{this.state.uuid}'    ondblclick
    render() {

        return (
            <li id={this.state.uuid} className={this.state.complete} onDoubleClick={this.editItem}>
                <input name="done-todo" type="checkbox" className="done-todo" onClick={this.checkItem}/>
                {this.state.value}</li>
        )
    }
}

