import { Button, List, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import './Todo.css'
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemText primary={props.todo.todo} secondary="deadline" />
            </ListItem>
            <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.todo.id).delete()} />
        </List>
            //<li>{props.text}</li>
         //todo参数的todo字段 //doc(props.todo.id)是限定条件
    )
}

export default Todo
