import React from 'react'
import DownloadButton from './DownloadButton'

const PostPreview = ({ postData }) => {
  return (
    <div className='pp'>
      <div className='post-preview' id='post-preview'>
        <div className="quote-con">
          <h1>{postData.quote}</h1>
          <hr />
        </div>

        <div className="author">
          <img src={postData.image} alt="" />
          <p>{postData.name}</p>
        </div>

      </div>

      <DownloadButton />
    </div>

  )
}

export default PostPreview