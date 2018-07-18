import React, {Component} from 'react';
import './todo.css'


export default class footer extends Component{

    render() {

        return (
            <div>
                footer
            {/*<ul id="filters">*/}
                {/*<li>*/}
                    {/*<a href="#" data-filter="all" className="${todoForm.statusOfList == " all" ? " selected" : ""}"*/}
                       {/*onClick="showTodoList('all')">ALL</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<a href="#" data-filter="active" className="${todoForm.statusOfList == " active" ? "*/}
                       {/*selected" : ""}"*/}
                       {/*onClick="showTodoList('active')">Active</a>*/}
                {/*</li>*/}
                {/*<li>*/}
                    {/*<a href="#" data-filter="complete" className="${todoForm.statusOfList == " complete" ? "*/}
                       {/*selected" : ""}"*/}
                      {/*>Complete</a>*/}
                  {/*</li>*/}
            {/*</ul>*/}
        </div>

        )
    }

}
