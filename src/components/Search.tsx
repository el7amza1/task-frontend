import React from 'react'

function Search() {
  return (
    <div className='search flex-center'>
        <input type="tel" placeholder='search a number' />
        <button type="submit" className='btn-search'>Search</button>
    </div>
  )
}

export default Search
