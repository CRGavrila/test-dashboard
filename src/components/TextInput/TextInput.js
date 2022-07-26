import React, { forwardRef } from "react";
import PropTypes from "prop-types"
import cx from "classnames";

import "./TextInput.scss";

const TextInput = forwardRef(({ 
  className,
  label,
  empty,
  view,
  isRow,
  required,
  name,
  errorMessage,
  startAdornment,
  ...props
}, ref) => {
  const classNames = cx({
    TextInput: true,
    [className]: className && className.length > 0,
  });

  return (
    <div className={classNames}>
        <span className="InputStartAdorment">{startAdornment}</span>
        <input ref={ref} id={name} name={name} className={cx('TextInput-Input', {'TextInput-Input--startAdornment': startAdornment })} {...props} />
    </div>
  );
});

TextInput.propTypes = {
  name: PropTypes.string.isRequired,
  required: PropTypes.bool,
  startAdornment: PropTypes.node,
}

TextInput.defaultProps = {
  required: false,
  startAdornment: null
}

export default TextInput;
