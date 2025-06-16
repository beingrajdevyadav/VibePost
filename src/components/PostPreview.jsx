import React from 'react'
import DownloadButton from './DownloadButton'

const PostPreview = ({ postData }) => {
  return (
    <div className='pp'>
      <div className='post-preview' id='post-preview'>

         <div className="author">
          <img src={postData.image} alt="" />
          <p>{postData.name}</p>
        </div>
        <div className="quote-con">
          <h2>{postData.quote}</h2>
        </div>

      </div>

      <div className="btn-box">
        {postData.quote?(<DownloadButton />): ""}
        
      </div>
    </div>

  )
}

export default PostPreview