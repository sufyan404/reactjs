import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {userid} = useParams()
  return (
    <div className='flex justify-center items-center p-8 bg-gray-700 text-white text-3xl'>User: {userid} </div>
  )
}

export default User