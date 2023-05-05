import React from "react";
import  {View}  from "react-native";
import {StatusBar} from "react-native";
import Screens from "./navigation";
function App(){
    return(
        <View  style={{flex:1}}>
            <StatusBar backgroundColor={'transparent'} barStyle={"light-content"} translucent={true}/>
         <Screens/>
        </View>
    )
}

export default App();