import React from 'react';
import "./WeatherForecast.css";

const WeatherIcon = ({ img, imgAlt }) => {
    return (
        <img src={img} alt={imgAlt} />
    );
};

const WeatherData = ({ day, conditions, time }) => {
    return (
        <>
            <h2>{day}</h2>
            <p><span>conditions: </span>{conditions}</p>
            <p><span>time: </span>{time}</p>
        </>
    );
};

const WeatherForecast = ({ day, img, imgAlt, conditions, time }) => {
    return (
        <div className="weather">
            <WeatherIcon img={img} imgAlt={imgAlt} />
            <WeatherData day={day} conditions={conditions} time={time} />
        </div>
    );
};

export default WeatherForecast;