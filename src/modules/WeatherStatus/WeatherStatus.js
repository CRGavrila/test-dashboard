import React, { useMemo } from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloud } from '@fortawesome/free-solid-svg-icons';
import cx from 'classnames';

import { timeConvertor24, dateConvertorToDayAndMonth } from 'utils';

import './WeatherStatus.scss'

const perDay = [6, 9, 12, 15, 18, 21, 2]

const WeatherStatusModule = ({
  className,
  tabs,
  tab,
  onChangeTab,
  loading,
  weather
}) => {

  const range = useMemo(() => {
    if (!weather?.hourly) {
      return {
        time: [],
        value: []
      }
    }
    if(tab === 0 || tab === 1) {
      perDay.map(value => weather.hourly.time[value].split('T')[1])

      return {
        time: perDay.map(value => timeConvertor24(weather.hourly.time[value].split('T')[1])),
        value: perDay.map(value => weather?.hourly?.temperature_2m[value])
      }
    }
    
    const day = []
    const value = []

    for (let i = 0; i < weather.hourly.time.length; i += 24) {
      day.push(dateConvertorToDayAndMonth(weather.hourly.time[i].split('T')[0]));
      value.push(weather?.hourly?.temperature_2m[i]);
    }

    return {
      time: day,
      value: value
    }

  }, [tab, weather?.hourly])

  const classNames = cx({
    WeatherStatus: true,
    [className]: className && className.length > 0,
  });

  return (
    <div className={classNames}>
      {
        loading
          ? <div>loading...</div>
          : (
            <>
              <div className='WeatherStatusInfos'>
                <FontAwesomeIcon fontSize={120} icon={faCloud} />
                <ul className='WeatherStatusInfos-Tabs'>
                  {
                    tabs.map(({ label }, idx) => (
                      <li key={label.replace(/s/gi, '-').toLowerCase()} onClick={() => onChangeTab(idx)} tabIndex={-1} className={`WeatherStatusInfos-Tab ${tab === idx ? 'WeatherStatusInfos-Tab--active' : ''}`}>{label}</li>
                    ))
                  }
                </ul>
              </div>
              <div className='WeatherStatusInfos-Footer'>
                <ul className='WeatherStatusInfos-Footer-List'>
                  {
                    range.time && range.time.length > 0 && range.time.map((item, idx) => (
                      <li  className='WeatherStatusInfos-Footer-ListItem' key={`weather-values--${idx}`}>
                        <div>{`${range.value[idx]}°C`}</div>
                        <div>{item}</div>
                      </li>
                    ))
                  }
                </ul>
              </div>
            </>
          )
      }
      
    </div>
  )
}

WeatherStatusModule.prototypes = {
  className: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
  time: PropTypes.string,
  category: PropTypes.string,
  bgImage: PropTypes.string
}

export default WeatherStatusModule