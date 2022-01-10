import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'

export default function RestaurantDetails({route}:any) {
    return (
        <View>
            <About route={route}/>
            <Divider width={2} style={{
                marginVertical:20,
            }} />
            <MenuItems />
        </View>
    )
}
