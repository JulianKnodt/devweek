import React from 'react'

const Upload = ({cb}) => {
  return (
    <div className="container upload">
      <h3>Upload your project</h3>
      <form action='/upload' encType="multipart/form-data" method='post'>
        <input type='file' name='file' />
        <input type='submit' />
      </form>
    </div>
  )
}

export default Upload;