import React from 'react'

const Search = ({addingOnchangeFunctionality}) => {
  return (
    <div>
      <input
      onChange={(e)=>{addingOnchangeFunctionality(e.target.value)}}
      className='search' type='text' placeholder='Search User by name' />
    </div>
  )
}

export default Search
