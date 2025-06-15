import PostForm from './components/PostForm'
import PostPreview from './components/PostPreview';
import { useState } from 'react'
import './App.css'
import Header from './components/Header';

function App() {
  const [postData, setPostData] = useState({
    name: "",
    quote: "",
    image: null,
  });

  return (
    <>
     
     <Header/>

      <div className="container">
        <PostForm postData={postData} setPostData={setPostData} />
        <PostPreview postData={postData} />
      </div>

    </>
  )
}

export default App
