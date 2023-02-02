import React from 'react'
import Result from '../components/Result'
import Search from '../components/Search'

const Home = () => {
  return (
    <div className='flex-center h-screen'>
      <div className=' flex-col flex-center'>
      <Search/>
      <Result/>
      </div>
    </div>
  )
}

export default Home
