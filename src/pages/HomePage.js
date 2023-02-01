import React from 'react'
import Banner from '../components/Banner'
import Welcome from '../components/Welcome'
import ListItem from '../components/ListItem'
import Description from '../components/Description'
import Menu from '../components/Menu'
import Location from '../components/Location'
import News from '../components/News'
const HomePage = () => {
  return (
    <div className=' bg-[black]'>
        <Banner/>
        <div className='bg-[#222]'>
            <Welcome/>
            <ListItem/>
            <Description/>
            <Menu/>
            <Location/>
            <News/>
        </div>
    </div>
  )
}

export default HomePage