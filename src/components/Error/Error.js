import React from 'react'

function Error({ error }) {
  return (
    <div className='error'>
        There was an error: {error}
        <br />
        Please refresh the page or contack support.
    </div>
  )
}

export default Error