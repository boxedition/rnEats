import React from 'react'
import { View, Text } from 'react-native'
import { Divider } from 'react-native-elements'
import { SafeAreaView } from 'react-native-safe-area-context'
import About from '../components/restaurantDetails/About'
import MenuItems from '../components/restaurantDetails/MenuItems'
import ViewCart from '../components/restaurantDetails/ViewCart'


const foods = [
    {
        title: "Lasagna",
        description: "description Lasagna",
        price: "13.50",
        image: "https://www.recipeselected.com/wp-content/uploads/2018/08/Recipes-Selected-Lasagna.jpg",
    },
    {
        title: "Lasagna #2",
        description: "description Lasagna #2",
        price: "1.50",
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3B707DAE-A600-44FC-B7D5-15896184874D/Derivates/e3304b41-3431-4b6e-b600-8ee6bd94cdbe.jpg",
    },
    {
        title: "Lasagna #3",
        description: "description Lasagna #3",
        price: "3.50",
        image: "https://www.yourfoodtown.com/wp-content/uploads/2020/10/3.12_Three-Cheese-Beef-Lasagna-1024x512-1.jpg",
    },
    {
        title: "Lasagna #4",
        description: "description Lasagna #4",
        price: "10",
        image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3B707DAE-A600-44FC-B7D5-15896184874D/Derivates/e3304b41-3431-4b6e-b600-8ee6bd94cdbe.jpg",
    },
];

export default function RestaurantDetails({route, navigation}:any) {
    return (
        <View style={{flex:1}}>
            <About route={route}/>
            <Divider width={2} style={{
                marginVertical:5,
            }} />
            <MenuItems restaurantName={route.params.name} foods={foods} />
            <ViewCart navigation={navigation} />
        </View>
    )
}
