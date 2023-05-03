import React from 'react'
import Nav from './Nav'
import Main from './Main'
import data from './data'

function App() {
  const cards = data.map((item) => {
    return (
      <Main 
        key = {item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
     <Nav />
     <div className="img-list">
      {cards}
     </div>
    </div>
  );
}

export default App;
