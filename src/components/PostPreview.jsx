import React from 'react'

const PostPreview = ({postData}) => {
  return (
    <div className='post-preview'>
      <h1>{postData.quote}</h1>
      <p>{postData.name}</p>
      <img src={postData.image} alt="author image" />
    </div>
  )
}

export default PostPreview