import PostForm from './components/PostForm'
import PostPreview from './components/PostPreview';
import { useState } from 'react'
import './App.css'

function App() {
  const [postData, setPostData] = useState({
    name:"",
    quote: "",
    image : null,
  });

  return (
    <>
      <h1>PostApp</h1>
      <div className="container">
   <PostForm postData={postData} setPostData={setPostData} />
        <PostPreview postData={postData}/>
      </div>
     
    </>
  )
}

export default App
