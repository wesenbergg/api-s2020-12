import React from 'react'

const Message = ({message}) => {
  const { type, text } = {...message}

  if(type === undefined || type === '') return<></>

  return(
    <>
      <div class={`alert alert-${type}`} role="alert">
        {text}
      </div>
    </>
  )
}

export default Message