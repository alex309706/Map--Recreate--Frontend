import React from 'react'
import { YMaps, Map,ObjectManager } from 'react-yandex-maps';
import Calendar from 'react-calendar';
import {useState, useEffect} from 'react';
import axios from 'axios'; 
import { ProfileButton } from '../ActualData';

function CustomCalendar({date,onClick}) {      
    return (
        <div className="calendar">
          <Calendar
             value={date}        
             onClickDay={onClick}
          />
          <label htmlFor="selectedDate">Выбранная дата</label>
            <input id="selectedDate" onChange={()=>console.log("Заглушка из MapOfSubdivisions.CustomCalendar. ID=selectedDate")} 
            type="text" value ={date.toDateString()}/>
        </div>
      );
}
export default function MapOfSubdivisions() {

    const [Datetime, setDatetime] = useState('1941-06-22')
    const [ActualData, setActualData] = useState([])
    const UrlToApi = 'http://localhost:25000/api/ActualData/';
    const [Url, setUrl] = useState(UrlToApi+Datetime)

    const FetchActualData = ()=>
    {
        axios.get(Url)
        .then(response => 
            {
                setActualData(response.data)
            })
         
    }
    useEffect(() => {
        FetchActualData()
    },[Url])
 
    const onDateClick = e =>
    {
        let year = e.getFullYear()
        let month = e.getMonth()+1
        let day=e.getDate()
        let date = year+"-"+month+"-"+day
        setDatetime(date)
        setUrl(UrlToApi+date)
    }
    const mapState = { center: [53.88,28.05], zoom: 7 };

    if(ActualData.length>0)
    return(
        <div>
            <ProfileButton/>
            <CustomCalendar date = {new Date(Datetime)} onClick = {onDateClick}/>
            <YMaps>
             <Map defaultState={mapState} className="map">
               <ObjectManager
                 objects={{
                   openBalloonOnClick:true
                 }}
                 clusters={{}}
                 options={{
                   clusterize: true,
                   gridSize: 32
                 }}
                 defaultFeatures ={{
                    type: 'FeatureCollection',
                    features:ActualData.map((oneActualData)=>
                    {
                        return{
                            type: 'Feature',
                            id: oneActualData.id,
                            geometry:{
                                type:'Point',
                                coordinates:[oneActualData.location.coordinateX,oneActualData.location.coordinateY]
                            },
                            properties:{
                                balloonContent:`
                                <p>Название: ${oneActualData.subdivision.name? oneActualData.subdivision.name: "Отсутствует поле" }.</p>
                                <p>Коммандир:${oneActualData.subdivision.commander.rank.name} 
                                
                                 ${oneActualData.subdivision.commander.lastName? oneActualData.subdivision.commander.lastName+" ": " " } 
                                 ${oneActualData.subdivision.commander.firstName? oneActualData.subdivision.commander.firstName+". ": " " } 
                                 ${oneActualData.subdivision.commander.patronymic? oneActualData.subdivision.commander.patronymic+". ": " " } 
                                </p>
                                <p>Численность: ${oneActualData.subdivision.strength? oneActualData.subdivision.strength+ " человек": "Отсутствует поле" }.</p>
                                <p>Состав: ${oneActualData.subdivision.composition? oneActualData.subdivision.composition: "Отсутствует поле" }.</p>
                                <p>Удостоверяющий документ: ${oneActualData.document.name? oneActualData.document.name: "Отсутствует поле" }.</p> 
                                <p>Страница документа: ${oneActualData.documentPage? oneActualData.documentPage: "Отсутствует поле" }.</p>` 
                                ,
                                
                             }
                        }
                    })
                }
            }
            modules={[
                "objectManager.addon.objectsBalloon",
                "objectManager.addon.clustersBalloon"
              ]}
              />
             </Map>
             </YMaps>
        </div>
    )
    else
    return(
        <div>
            <h1>No data for this period</h1>
             <CustomCalendar date = {new Date(Datetime)} onClick = {onDateClick}/>
        </div>
    )
}
