import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';

const Avatar = ({ className, img, alt, round, size }) => {
  const classNames = cx({
    Avatar: true,
    'Avatar--round': round,
    [`Avatar--${size}`]: size,
    [className]: className && className.length > 0,
  });

  return (
    <div className={classNames}>
      {
        img && (
          <img src={img} alt={alt} />
        )
      }
    </div>
  )
}

Avatar.prototypes = {
  className: PropTypes.string,
  alt: PropTypes.string,
  round: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'medium', 'large'])
}

Avatar.defaultProps = {
  alt: '',
  size: 'small'
}

export default Avatar