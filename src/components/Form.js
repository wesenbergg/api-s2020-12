import React, { useState } from 'react'

const List = ({addData, setMessage}) => {
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
    
    if(title.length < 3 || title.length > 40) return setMessage({type: "danger", text: "Tapahtuman lisäys epäonnistui tapahtuman nimellä: '" + newObject.title + "'. Tapahtuman otsikon pituus tulee olla 3-40 kirjainta."})
    if(author.length < 3 || author.length > 18) return setMessage({type: "danger", text: "Tapahtuman lisäys epäonnistui tapahtuman järjestäjällä: '" + newObject.author + "'. Järjestäjän nimen pituus tulee olla 3-18 kirjainta."})
    fetch('http://localhost:3001/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newObject)
        })
        .then(_ => {
          setTitle("")
          setAuthor("")
          addData(newObject)
          setMessage({type: "success", text: "Tapahtuma " + newObject.title + " lisätty tapahtumakalenteriin."})
        })
  }

  return(
    <>
      <form onSubmit={handleSubmit} className="bg-dark p-3 row form-inline justify-content-around">
        <input className="form-control col-sm-5 mb-1" value={title} onChange={e => setTitle(e.target.value)} placeholder="Tapahtuman nimi" required/>
        <input className="form-control col-sm-5 mb-1" value={author} onChange={e => setAuthor(e.target.value)} placeholder="Järjestäjän nimi" required/>
        <button type="submit col-sm-2" className="btn btn-outline-light" >Lisää kalenteriin</button>
      </form>
    </>
  )
}

export default List