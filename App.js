import React from 'react';
import Loader from "./Loader"
import * as Location from 'expo-location';
import { Alert } from 'react-native';
import axios from "axios"
import Weather from './Weather';

const api = "e71e68187e6da07eb17db48a8cf2dc1b"

export default class extends React.Component {
  state={
    isLoading:true,

  }

  getweather = async(latitude,longitude) =>{
    const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${api}&units=metric`)
  console.log(data)
  this.setState({
    isLoading:false,
    condition:data.weather[0].main, 
    temp:data.main.temp,
  })
  }
  getlocation = async() => {
    try{
      await Location.requestPermissionsAsync()
      const {coords:{latitude,longitude}} = await Location.getCurrentPositionAsync()
      this.getweather(latitude,longitude)
      console.log(latitude,longitude)
    } catch(error){
      Alert.alert("this is error")
    }
  }
  componentDidMount(){
  this.getlocation()
}

  render(){
    const {isLoading,temp,condition} = this.state
    return(
      isLoading ? <Loader/> : <Weather temp={Math.round(temp)} condition={condition} />
    )
  }
}

