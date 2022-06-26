import React from 'react'
import "./Box.css"

const Box = ({url}) => {
  return (
    <div className='box'>
       <div className='img_box'>
           <img src={url} alt="" />
       </div>
        <div className='button_container'>
       
            <button>
                <span className='span_tag'>2001</span>
                Likes
            </button>
            <button>
                <span className='span_tag'>4501</span>
                comments
            </button>
            <button>
                <span className='span_tag'>943</span>
                shares
            </button>
        </div>
    </div>
  )
}

export default Box