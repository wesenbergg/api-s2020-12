import React, { useState, useEffect } from 'react'
import List from './components/List'
import Form from './components/Form'

const App = () => {
  const [data, setData] = useState([])

  useEffect( () => {
    fetch("http://localhost:3001/posts")
    .then(res => res.json())
    .then(res => setData(res) )
  }, [])

  const addData = e => setData(data.concat(e))

  return (
    <div className="App container mt-5">
      <Form addData={addData} />
      <List data={data} />
    </div>
  )
}

export default App;
