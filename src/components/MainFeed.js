import React from 'react'
import "./MainFeed.css"
import MainFeedHeader from './MainFeedHeader'
import StatusBox from './StatusBox'
import PostApp from './PostApp'
const MainFeed = () => {
  return (
    <div className='main_feed__containeer'>
        {/* Main feed headeer  */}
        <MainFeedHeader/>
        {/* <div className='status__conatiner'>
             <StatusBox/>
             
       </div> */}
        <div>
              <PostApp/>
             

        </div>
       
    </div>
  )
}

export default MainFeed