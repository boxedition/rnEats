import React from 'react'
import {useState} from 'react'
import { View, Text, TouchableOpacity } from 'react-native'

export default function HeaderTabs() {
    const [activeTab, setActiveTab] = useState("Delivery");
    
    return (
        <View style={{ flexDirection: 'row', alignSelf: 'center' }}>
            <HeaderButton text="Delivery" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab}/>
            <HeaderButton text="Pickup" btnColor="black" textColor="white" activeTab={activeTab} setActiveTab={setActiveTab}/>
        </View>
    );
}


const HeaderButton = (props) => {
    return (
        <TouchableOpacity
            style={{
                backgroundColor: props.activeTab == props.text ? "black" : "white",
                paddingVertical: 5,
                paddingHorizontal: 15,
                borderRadius: 30,

            }}
            onPress={()=> props.setActiveTab(props.text)}
        >
            <Text style={{
                color: props.activeTab == props.text ? "white" : "black",
                fontSize: 15,
                fontWeight: "900",
            }}
            >{props.text}</Text>
        </TouchableOpacity>
    );
};