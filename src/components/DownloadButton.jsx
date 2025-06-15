import html2canvas from 'html2canvas';
import React from 'react'

const DownloadButton = () => {
    const downloadImage = async()=>{
        const element = document.getElementById("post-preview");
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL("image/jpeg");

        const link = document.createElement("a");
        link.href = data;
        link.download = "my-vibe-post.jpg";
        link.click();
    }
  return (
    <button onClick={downloadImage}>Download Post</button>
  )
}

export default DownloadButton