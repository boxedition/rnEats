import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'

export default function RestaurantDetails({route, navigation}:any) {
    return (
        <View style={{flex:1}}>
            <About route={route}/>
            <Divider width={2} style={{
                marginVertical:5,
            }} />
            <MenuItems />
        </View>
    )
}
