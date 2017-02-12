import React from 'react'

const Search = ({cb}) => {
  return (
    <div className="searchbar">
    <input 
      type='text' 
      onChange={ ({target}) => { cb(target.value) } }
      placeholder='Search products'
    />
    <span className="btn">SEARCH</span>
    </div>
  )
}

export default Search