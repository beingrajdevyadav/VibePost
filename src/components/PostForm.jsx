import React from 'react'

const PostForm = ({ postData, setPostData }) => {

  const handleInputChange = (e) => {
    setPostData({ ...postData, [e.target.name]: e.target.value });
  }

  const hanldeImageUpload = (e) => {
    const file = e.target.file[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPostData({ ...postData, image: reader.result });
    };

    if (file) reader.readAsDataURL(file);
  }
  return (
    <>

      <form action="" className='post-form'>
        <input
          type="text"
          name='name'
          placeholder='Enter Your Name'
          value={postData.name}
          onChange={handleInputChange}
        />

        <textarea 
        name="quote"
        placeholder='Write A Quote'
        value={postData.quote}
        onChange={handleInputChange}
        rows={4}
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