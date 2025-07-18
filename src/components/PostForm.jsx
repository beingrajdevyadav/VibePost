import React from 'react'

const PostForm = ({ postData, setPostData }) => {

  const handleInputChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  }

  const hanldeImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPostData({ ...postData, image: reader.result });
    };

    if (file) reader.readAsDataURL(file);
  }
  return (
    <>

      <form action="" className='post-form'>
        <h2>Post Form</h2>
        <hr />
        <input
          type="text"
          name='name'
          placeholder='Enter Your Name'
          value={postData.name}
          onChange={handleInputChange}
          className='name'
        />

        <textarea 
        name="quote"
        placeholder='Write A Quote'
        value={postData.quote}
        onChange={handleInputChange}
        rows={4}
        className='quote'
        ></textarea>

        <input 
        type="file"
        onChange={hanldeImageUpload}
        />

      </form>
    </>
  )
}

export default PostForm