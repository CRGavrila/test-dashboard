import React, { useEffect, useState, useMemo } from 'react'

import BgImage from 'assets/images/stone-beach-gotland.jpg'

import { Navbar, LastNews, WeatherStatus } from 'modules'

import { getWeather } from 'services'

import './DashboardLayout.scss'

const DashboardLayout = () => {
  const [tab, setTab] = useState(0)
  const [weatherData, setWeatherData] = useState(null)
  const [newsData, setNewsData] = useState(null)
  const [loadingNews, setLoadingNews] = useState(true)
  const [loadingWeather, setLoadingWeather] = useState(true)

  const tabsValues = useMemo(() => {
    
    const today = new Date();
    let tomorrow = new Date()
    let weekDays = new Date()

    tomorrow.setDate(today.getDate() + 1)
    weekDays.setDate(today.getDate() + 7)

    const todayFormatted = today.toISOString().split('T')[0]
    const tomorrowFormatted = tomorrow.toISOString().split('T')[0]
    const weekDaysFormatted = weekDays.toISOString().split('T')[0]

    return [
      todayFormatted,
      tomorrowFormatted,
      weekDaysFormatted
    ]

  }, [])

  const tabItems = [
    { label: "TODAY" }, { label: "TOMORROW" }, { label: "WEEK" },
  ]

  async function getNewsAsync () {
    setNewsData({
      title: "Astronauts could land on Red Planet by 2039",
      url: "SPACE.com",
      time: "20",
      category: "science",
      bgImage: BgImage 
    })
  }
 

  useEffect(() => {
    getNewsAsync()
    setLoadingNews(false)
  }, [])
  
  useEffect(() => {
    setLoadingWeather(true)
    getWeatherAsync()
    getNewsAsync()
    setLoadingWeather(false)

    async function getWeatherAsync () {
      const { data } = await getWeather(tab === 2 ? tabsValues[0]: tabsValues[tab] , tabsValues[tab])
  
      setNewsData({
        title: "Astronauts could land on Red Planet by 2039",
        url: "SPACE.com",
        time: "20",
        category: "science",
        bgImage: BgImage 
      })
      setWeatherData(data)
    }

  }, [tab, tabsValues])

  const handleTab = (idx) => {
    setTab(idx)
  }

  return (
    <div className='DashboardLayout'>
      <Navbar />
      <div className='DashboardLayoutSides'>
        <LastNews
          className='DashboardLayoutSides-Item'
          {...newsData}
          loading={loadingNews}
        />
        <WeatherStatus
          tab={tab}
          tabs={tabItems}
          weather={weatherData}
          className='DashboardLayoutSides-Item'
          loading={loadingWeather}
          onChangeTab={handleTab}
        />
      </div>
    </div>
  )
}

export default DashboardLayout