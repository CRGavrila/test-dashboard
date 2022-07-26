import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWifi3, faClock } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';



import './LastNews.scss'

const LastNewsModule = ({
  className,
  title,
  url,
  time,
  category,
  bgImage
}) => {
  const classNames = cx({
    LastNews: true,
    [className]: className && className.length > 0,
  });

  return (
    <div style={{ backgroundImage: `url(${bgImage})` }} className={classNames}>
      <h2 className='LastNewsTitle'>{title}</h2>
      <div className='LastNewsFooter'>
        <div className='LastNewsFooterSide'>
          <div className='LastNewsFooterSideItem'>
            <FontAwesomeIcon className='LastNewsFooter-Signal' fontSize={32} icon={faWifi3} />
            <span className='LastNewsFooterSideItem-Text'>{url}</span>
          </div>
          <div className='LastNewsFooterSideItem'>
            <FontAwesomeIcon fontSize={32} icon={faClock} />
            <span className='LastNewsFooterSideItem-Text'>{`${time} ago`}</span>
          </div>
        </div>
        <span className='LastNewsFooterCategory'>{category}</span>
      </div>
    </div>
  )
}

LastNewsModule.prototypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  time: PropTypes.string,
  category: PropTypes.string,
  bgImage: PropTypes.string
}

export default LastNewsModule