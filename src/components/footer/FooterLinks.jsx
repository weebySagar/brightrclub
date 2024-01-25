import React from 'react'

const FooterLinks = ({title,footerlinks}) => {
  return (
    <div className='footer-links'>
        <p className="title">{title}</p>
        {
            footerlinks.map(link=><a className='link' href='/'>{link}</a>)
        }
    </div>
  )
}

export default FooterLinks