import React from 'react'

const forecastCard = ({ data }) => {
  return (
    <div key={data.date}>
        <p>---------------------------- 0 ---------------------------</p>
        <p>{data.date}</p>
        <p>{data.day.condition.text}</p>
        <div>
            <img src={data.day.condition.icon}/>
            <div>
                <div>
                    <p>{data.day.avgtemp_c}C</p>
                    <div>
                        <p>{data.day.maxtemp_c}C</p>
                        <p>{data.day.mintemp_c}C</p>
                    </div>
                </div>
                <div>
                    <p>{data.day.daily_chance_of_rain}%</p>
                    <p>{data.day.avghumidity}%</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default forecastCard