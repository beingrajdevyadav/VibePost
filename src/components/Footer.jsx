import React from 'react'

const Footer = () => {
    const date = new Date();
  return (
    <div className='footer'>
        <p>Copyright &copy; {date.getFullYear()} VibePost. </p>
        <p>Powered By VibePost.</p>
    </div>
  )
}

export default Footer