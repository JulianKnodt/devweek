import React from 'react'

const Search = ({cb}) => {
  return (
    <input 
      type='text' 
      onChange={ ({target}) => { cb(target.value) } }
      placeholder='Search products'
    />
  )
}

export default Search