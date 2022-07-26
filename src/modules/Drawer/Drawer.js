import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faEnvelope, faUnlockKeyhole } from '@fortawesome/free-solid-svg-icons';

import TextInput from 'components/TextInput/TextInput';

import './Drawer.scss'
import Avatar from 'components/Avatar/Avatar';

import ProfileImg from 'assets/images/profile.png'
import Switch from 'components/Switch/Switch';
import { useAppState } from 'lib/appState';

const profileInputs = [
  {
    type: "text",
    name: "username",
    icon: faUser
  },
  {
    type: "text",
    name: "position",
    icon: faBars
  },
  {
    type: "text",
    name: "email",
    icon: faEnvelope
  },
  {
    type: "text",
    name: "password",
    icon: faUnlockKeyhole,
  }
]

const profileNotifications = [
  {
    name: "monday",
    label: "Monday",
    type: "switch"
  },
  {
    name: "tuesday",
    label: "Tuesday",
    type: "switch"
  },
  {
    name: "wednesday",
    label: "Wednesday",
    type: "switch"
  },
  {
    name: "thursday",
    label: "Thursday",
    type: "switch"
  },
  {
    name: "friday",
    label: "Friday",
    type: "switch",
    disabled: true
  },
]

const Drawer = ({ className, open }) => {
  const { profile, notifications, handleNotification, changeProfileInput } = useAppState()
  const classNames = cx({
    Drawer: true,
    'Drawer--open': open,
    [className]: className && className.length > 0,
  });
  return (
    <div className={classNames}>
      <Avatar className='DrawerProfile' img={ProfileImg} alt="" size="large" round />
      <div>
        {
          profileInputs.map(({ type, name, icon }) => (
            <TextInput
              className='DrawerProfileInput'
              key={name}
              name={name}
              type={type}
              onChange={changeProfileInput}
              value={profile[name]}
              startAdornment={(
                <FontAwesomeIcon icon={icon} />
              )}
            />
          ))
        }
      </div>
      <h3>EMAIL NOTIFICATIONS</h3>

      <ul className='DrawerNotifications-List'>
        {
          profileNotifications.map(({ name, label, disabled }) => (
            <li className='DrawerNotifications-ListItem'>
              <Switch
                value={notifications[name]}
                key={name}
                label={label}
                name={name}
                disabled={disabled}
                onChange={ev => handleNotification(name, !notifications[name])}
              />
            </li>
          ))
        }
      </ul>
    </div>
  )
}

Drawer.prototypes = {
  className: PropTypes.string,
  open: PropTypes.bool
}

Drawer.defaultProps = {
  className: null,
  open: false
}

export default Drawer