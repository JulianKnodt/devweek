import React from 'react'

const Upload = ({cb}) => {
  return (
    <div>
      <form action='/upload' encType="multipart/form-data" method='post'>
        <input type='file' name='file' />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Upload;