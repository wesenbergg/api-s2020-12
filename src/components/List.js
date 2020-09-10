import React from 'react'

const List = ({data}) => {
  const showData = () => data.map(e =>
    <tr key={e.id}>
      <td>{e.id}</td>
      <td>{e.title}</td>
      <td>{e.author}</td>
      <td>{e.date}</td>
    </tr>)

  return(
    <>
      <h3 className="mt-5">Tapahtumakalenteri</h3>
      <table className="table table-striped table-sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Nimi</th>
              <th>Järjestäjä</th>
              <th>Päivämäärä</th>
            </tr>
          </thead>
          <tbody>
            {showData()}
          </tbody>
        </table>
    </>
  )
}

export default List