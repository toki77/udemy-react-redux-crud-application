import React from 'react';

function App() {
  return (
    <>
      <label htmlFor="bar">bar</label>  
      <input type="text" onClick={() => { console.log("Hi,Tom!") }} />
    </>
  )
}

export default App;
