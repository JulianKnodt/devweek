import React from 'react'

const Search = ({onType}) => {
  return (
    <input 
      type='text' 
      onChange={ ({target}) => { onType(target.value) } }
      placeholder='Search products'
    />
  )
}

export default Search