import React from "react";
import constDate from "./constDate";
import WeatherTemp from "./WeatherTemp";

export default function Info(props) {
    return (
    <div className ="Info">
    <h1>{props.data.city}</h1>
    <ul>
    <li><constDate date={props.data.date} /></li>
    <li className="text-capitalize">{props.data.description}</li>
    </ul>

    <div className="row">
    <div className="col-6">
    <img src={props.data.iconUrl} alt={props.data.description}/>
    <WeatherTemp celsius={props.date.temperature}/>
    </div>
    <div className="col-6">
    <ul>
    <li>Precipitation: 15%</li>
    <li>Humudity: {props.data.humidity}60%</li>
    <li>Wind: {props.data.wind} 5km/h</li>
    </ul>
    </div>
    </div>
    </div>
    );
}
