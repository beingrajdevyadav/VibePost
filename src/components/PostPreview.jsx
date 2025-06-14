import React from 'react'

const PostPreview = ({ postData }) => {
  return (
    <>
      <div className='post-preview'>
        <div className="quote-con">
          <h1>{postData.quote}</h1>
          <hr />
        </div>

        <div className="author">
          <img src={postData.image} alt="" />
          <p>{postData.name}</p>
        </div>

      </div>

    </>

  )
}

export default PostPreview