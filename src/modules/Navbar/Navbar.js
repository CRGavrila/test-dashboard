import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faBookmark, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import { useAppState } from 'lib/appState';
import { Avatar } from 'components'
import Logo from 'assets/images/Logo.png'
import Person from 'assets/images/person.png'

import './Navbar.scss'

const NavbarModule = ({ className }) => {
  const { drawer, handleDrawerClick } = useAppState();
  const classNames = cx({
    Navbar: true,
    [className]: className && className.length > 0,
  });


  return (
    <div className={classNames}>
      <div className='NavbarSides'>
        <button className='NavbarSidesAction'>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <span className='NavbarSidesAction'>WIDGETS</span>
      </div>
      <img src={Logo} alt="" />
      
      <div className='NavbarSides'>
        <button className='NavbarSidesAction'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
        <button onClick={() => handleDrawerClick(!drawer.open)} className='NavbarSidesAction NavbarSidesAction-Btn'>
          <Avatar className='NavbarSidesAvatar' img={Person} />
        </button>
        <button className='NavbarSidesAction'>
          <FontAwesomeIcon icon={faBookmark} />
        </button>
      </div>
    </div>
  )
}

export default NavbarModule