import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import './App.css';
import { Button, FormControl, Input, InputLabel } from '@material-ui/core';
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [todos, setTodos] = useState([]);//设置todo为列表 setCount来更新
  const [input, setInput] = useState('');

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  }, []);//从数据库拿数据 双循环set到todos列表 onSnapshot不用刷新页面?
  
  const addTodo = (event) => {
    event.preventDefault();//阻止整体刷新页面

    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div className="App">
      <h1>hello rocket</h1>
      <form>
        <FormControl>
          <InputLabel>Write A Todo</InputLabel>
          <Input value={input} onChange={event => setInput(event.target.value)}/>
        </FormControl>

        <Button disabled={!input} type="submit" onClick={addTodo} variant="contained" color="primary">
          Add todo
        </Button>
      </form>

      <ul>
        {todos.map(todo => (
          <Todo todo={todo}/>
          //调用函数 传递参数todo 循环todos列表 每个todo都调用函数显示一次
          //<li>{todo}</li>
        ))}
      </ul>

    </div>
  );
}

export default App;
