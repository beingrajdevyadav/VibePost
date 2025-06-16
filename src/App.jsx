import PostForm from './components/PostForm'
import PostPreview from './components/PostPreview';
import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Route, Routes } from 'react-router-dom';

function App() {
  const [postData, setPostData] = useState({
    name: "",
    quote: "",
    image: null,
  });

  return (
    <>
      <Header />
      <Navbar />


      <div className="container">
        <Routes>
          <Route path='/' element={<PostForm postData={postData} setPostData={setPostData} />} />
          <Route path='/preview' element={<PostPreview postData={postData} />} />
        </Routes>


      </div>



      <Footer />
    </>
  )
}

export default App
