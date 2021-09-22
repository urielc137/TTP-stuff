import React from 'react';
import ReactDOM from 'react-dom';

const App = () =>{
  return (
  <div>
    <h1>Blah again</h1>
    <div>Blah again</div>
  </div>
  )
  
  //return <h1>Hi there General Kenobi!!</h1>
  //return React.createElement('h1', {classname:'title'}, 'Be creative!')
}

ReactDOM.render(<App/>, document.querySelector('#root'));