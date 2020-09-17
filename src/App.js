import React, { useState, useEffect } from 'react'
import List from './components/List'
import Form from './components/Form'
import Message from './components/Message'

const App = () => {
  const [data, setData] = useState([])
  const [message, setMessage] = useState({type: "", text: ""})

  useEffect( () => {
    fetch("http://localhost:3001/posts")
    .then(res => res.json())
    .then(res => setData(res) )
  }, [])

  const addData = e => setData(data.concat(e))

  return (
    <div className="App container mt-5">
      <Message message={{...message}} />
      <Form addData={addData} setMessage={setMessage} />
      <List data={data} />
    </div>
  )
}

export default App;
