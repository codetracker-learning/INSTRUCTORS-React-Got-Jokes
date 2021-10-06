import React, { useState } from 'react';
import './App.css';
import getJoke from './helpers/jokeData';
// import Joker from './Joker';

function App() {
 const [btnText, setBtnText] = useState('Get A Joke');
 const [joke, setJoke] = useState({});

 const setButton = (text) => {
  setBtnText(text);
 }

 const getAJoke = () => {
   getJoke().then((obj) => {
      setJoke({
        setup: obj.setup,
        punchline: obj.delivery
      });

      setButton('Get Punchline');
   })
 }

  return (
    <>
      <h1>{ joke.setup }</h1>
      <p>{ btnText !== 'Get Punchline' ? joke.punchline : '' }</p>
      {
        btnText === 'Get A Joke' || btnText === 'Get A New Joke' ? 
        <button onClick={getAJoke}>{btnText}</button> : 
        <button onClick={() => setButton('Get A New Joke')}>{btnText}</button>
      }
    </>
  );
}

export default App;
