import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'

export default class BottomTabs extends Component {
    render() {
        return (
            <View style={{
                flexDirection: 'row',
                margin: 10,
                marginHorizontal: 30,
                justifyContent: 'space-between'
            }}>
                <Icon icon="home" text="Home" />
                <Icon icon="search" text="Browse" />
                <Icon icon="shopping-bag" text="Grocery" />
                <Icon icon="receipt" text="Orders" />
                <Icon icon="user" text="Account" />
            </View>
        )
    }
}


const Icon = (props: any) => {
    return (
        <TouchableOpacity>
            <View>
                <FontAwesome5 name={props.icon} size={25} style={{
                    marginTop: 3,
                    alignSelf: 'center',
                }} />
                <Text>{props.text}</Text>
            </View>
        </TouchableOpacity>
    );
};
