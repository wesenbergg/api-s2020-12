import React, { useState } from 'react'

const List = ({addData}) => {
  const [title, setTitle] = useState("")
  const [author, setAuthor] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    const newObject = { 
      title,
      author,
      date: new Intl.DateTimeFormat('fi-FI').format(new Date()),
      id: Math.floor(Math.random() * 99999) + 5
    }
    
    fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newObject)
        })
        .then(_ => {
          setTitle("")
          setAuthor("")
          addData(newObject)
        })
  }

  return(
    <>
      <form onSubmit={handleSubmit} className="bg-dark p-3 row form-inline justify-content-around">
        <input className="form-control col-sm-5 mb-1" value={title} onChange={e => setTitle(e.target.value)} placeholder="Tapahtuman nimi" />
        <input className="form-control col-sm-5 mb-1" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Järjestäjän nimi" />
        <button type="submit col-sm-2" className="btn btn-outline-light" >Lisää kalenteriin</button>
      </form>
    </>
  )
}

export default List