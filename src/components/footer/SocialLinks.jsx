import React from 'react';

import socialLinks from '../../data/socialLinks';

const SocialLinks = ({title}) => {
  return (
    <div className="social-links">
        <p className="title">{title}</p>
        <div className="social-icons">
            {
                socialLinks.map(link=><a href={link.link} target='blank'><img src={link.icon} alt={link.name} /></a>)
            }
        </div>
    </div>
  )
}

export default SocialLinks