import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useGetPokemonByNsmeQuery } from '../../lib/api/poketmon';
import { RootState } from '../../reducers';
import { decrease, increase, reset } from '../../reducers/countSlice';
import { addTodo } from '../../reducers/todoSlice';

const Main = () => {
  const [input, setInput] = useState('');
  // redux-toolkit/state
  const count = useSelector((state: RootState) => state.count.count);
  const todos = useSelector((state: RootState) => state.todos.todos);
  const idRef = useRef(0);
  const dispatch = useDispatch();
  // redux-toolkit/query
  const {data, isLoading, error} = useGetPokemonByNsmeQuery('bulbasaur');

  // count
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onReset = () => dispatch(reset());

  // todos
  const onChange = useCallback((e) => {
    e.preventDefault();
    setInput(e.target.value);
  }, [])
  const onAddTodo = () => dispatch(addTodo({id: idRef.current++, content: input, done: false}));

  return (
    <>
      <div>
        <h1>Reduxs-toolkit testing</h1>
        <p>{count}</p>
        <button onClick={onIncrease}>+</button>
        <button onClick={onDecrease}>-</button>
        <button onClick={onReset}>reset</button>
      </div>
      <br/>
      <div>
        <input type="text" placeholder="add your todo" onChange={onChange}/>
        <button onClick={onAddTodo}>submit</button>
        <br />
        <ul>
          {todos && todos.map((todo) => <div style={{display: "flex"}}><li key={todo.id}>{todo.content}</li><button>done</button></div>)}
        </ul>
      </div>
      <br/>
      <br/>
      <br/>
      <div>
        {error && <div><p>there was an error</p></div>}
        {isLoading && <div><p>Loading...</p></div>}
        {data && <div><h3>{data.species.name}</h3>
          <img src={data.sprites.front_shiny} alt={data.species.name} /></div>}
      </div>
    </>
  );
};

export default Main;
