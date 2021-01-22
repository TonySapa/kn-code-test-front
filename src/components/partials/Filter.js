/* eslint-disable react/prop-types */
import React from 'react'

const Filter = ({filterName, handleFilterChange}) => {
  return (
    <div>
      Find a Country
      <input 
        value={filterName}
        onChange={handleFilterChange}
      />
    </div>
  )
}

export default Filter