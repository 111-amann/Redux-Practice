import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deleteUser } from './store/reducers/userSlice';

function App() {
    const {users} = useSelector(state => state.userSlice);
    const dispatch = useDispatch()
  return (
    <div className='w-full h-screen bg-zinc-900 p-10'>
      <div className="h-80 bg-zinc-700 text-zinc-300">
        <ul className='p-5'>
        {users.map((user, index) => (
          <li key={index} className='mt-1'>
            {user.firstname} {user.lastname} <span onClick={() => dispatch(deleteUser(index))} className='text-red-500 cursor-pointer'>X</span>
          </li>
        ))}
        </ul>
      </div>
    </div>
  )
}

export default App
