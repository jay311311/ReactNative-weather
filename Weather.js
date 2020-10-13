import React from"react"
import PropTypes from "prop-types"
import {StyleSheet, View,Text,StatusBar} from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import { MaterialCommunityIcons } from '@expo/vector-icons'; 


const weatherOptions = {
    Haze:{
        iconName:"weather-hail",
        gradients:["#3E5151","#DECBA4"],
        content:"stay at warm house"
    },

    Thunderstorm:{
        iconName:"weather-lightning",
        gradients:["#544a7d","#ffd452"],
        content:"stay at home"
    },
    Drizzle:{
        iconName:"weather-rainy",
        gradients:["#0052D4","#9CECFB"],
        content:"take a umbrella"
    },
    Rain:{
        iconName:"weather-pouring",
        gradients:["#000428","#004e92"],
        content:"wear a raincoat"
    },
    Snow:{
        iconName:"weather-snowy",
        gradients:["#7BC6CC","#BE93C5"],
        content:"take a cill inside"
    },
    Atmosphere:{
        iconName:"weather-partly-cloudy",
        gradients:["#FF5F6D","#FFC371"],
        content:"Good weather for a walk"
    },
    Clear:{
        iconName:"weather-sunny",
        gradients:["#FF512F","#F09819"],
        content:"Good weather for going to the picnic"
    },
    Clouds:{
        iconName:"weather-cloudy",
        gradients:["#0083B0","#00B4DB"],
        content:"wear a jacket to go outside"
    },
    Mist:{
        iconName:"weather-fog",
        gradients:["#4568DC","#B06AB3"],
        content:"tutn on the ligth everywhere"
    }
}

export default function Weather({temp,condition}){
    return(
            <LinearGradient
                style={styles.container} 
                colors={weatherOptions[condition].gradients}>
                    <StatusBar barStyle={"light-content"}></StatusBar>
                    <View style={styles.halfContainer}>
                        <MaterialCommunityIcons 
                            name={weatherOptions[condition].iconName} 
                            size={96}  
                            color="white" />
                        <Text style={styles.temps}>{temp}°C</Text>
                    </View>
                    <View style={{...styles.halfContainer, ...styles.textContainer}}>
                        <Text style={styles.main}>{condition}</Text>
                        <Text style={styles.sub}>{weatherOptions[condition].content}</Text>
                    </View>
           </LinearGradient>
    )
}

Weather.propTypes={
    temp:PropTypes.number.isRequired,
    condition : PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain", 
        "Snow",
        "Atmosphere", 
        "Clear", 
        "Clouds",
        "Mist"
    ]).isRequired
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },temps:{
        fontSize:32,
        textAlign:"center",
        color:"white"
    },
    halfContainer:{
        flex:1,
        justifyContent:"center",
        
    },
    main : {
        color:"white",
        marginTop:50,
        marginRight:130,
        fontSize:40,
        fontWeight:"300"
    },
    sub:{ 
        marginTop:20,
        color:"white",
        fontWeight:"600",
        fontSize:20
        },
    textContainer:{
        flex:1,
        alignItems:"flex-start",
        justifyContent:"flex-start",
        paddingHorizontal:20
    }
})