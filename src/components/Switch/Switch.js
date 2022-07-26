import React from "react";
import cx from "classnames";

import "./Switch.scss";

const Switch = ({ className, value, rightLabel, label, onChange, disabled }) => {

  const classNames = cx('Switch', {
    [className]: className && className.length,
    'Switch-RightLabel': rightLabel
  })

  return (
    <label className={classNames}>
        {
          label && <span className="SwitchLabel">{label}</span>
        }
        <input
          className="SwitchInput"
          type="checkbox"
          checked={value}
          onChange={onChange}
          disabled={disabled}
        />
        <span className="SwitchInner">
          <span className="SwitchBox"></span>
        </span>
    </label>
  );
};

export default Switch;
