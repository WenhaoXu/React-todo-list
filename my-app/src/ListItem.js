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
     let checked=  event.target.parentNode.className
      if(checked==""){
          event.target.parentNode.className="checked"
      }
        else{
          event.target.parentNode.className=""
      }
    }

    componentDidMount(){
        document.addEventListener("keydown",this.handleEnterKey);
    }
    componentWillUmount(){
        document.removeEventListener("keydown",this.handleEenterKey);
    }
    handleEnterKey = (e) => {
        if(e.keyCode === 13){
            e.target.contentEditable="false";
        }
    }

    editItem = (event) => {
          event.target.contentEditable="true";


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

