import React from 'react';

/* function App() {
  return (
    <>
      <Cat/>
      <label htmlFor="bar">bar</label>  
      <input type="text" onClick={() => { console.log("Hi,Tom!") }} />
    </>
  )
} */

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  )
}

const Cat = () => {
  return (<div>Meow!</div>)
}

export default App;
