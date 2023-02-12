import React from 'react'

function NoResult({ searchInput }) {
  return (
    <div className="users__content--center">
        No results for {searchInput}
    </div>
  )
}

export default NoResult;