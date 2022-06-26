import React ,{useState}from 'react'
import Sidebar from './Sidebar';
import MainFeedHeader from "./MainFeedHeader"
import InputSearchBox from "./InputSearchBox";
import '../App.css';
import "./Post.css"

const Post = () => {
    const [image,setImage]=useState(true);
  return (
    <div className="App">
           <Sidebar/>
           {/* <div className="post__container">
                <form>
                   { image && <img className="post__img" src="https://images.pexels.com/photos/616376/pexels-photo-616376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />}
                    <input  except="image/*" type="file" placeholder="Add a Post " />
                     
                </form>
              
           </div> */} 
       
   </div>
  )
}

export default Post;