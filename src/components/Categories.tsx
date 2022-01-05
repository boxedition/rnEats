import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';


const items = [
    {
        title: "Pick-Up",
        image: require("../assets/images/shopping-bag.png"),
    },
    {
        title: "Bakery Items",
        image: require("../assets/images/bread.png"),
    },
    {
        title: "Fast Foods",
        image: require("../assets/images/fast-food.png"),
    },
    {
        title: "Soft Drinks",
        image: require("../assets/images/soft-drink.png"),
    },
    {
        title: "Coffee",
        image: require("../assets/images/coffee.png"),
    },
    {
        title: "Deals",
        image: require("../assets/images/deals.png"),
    },
    {
        title: "Dessert",
        image: require("../assets/images/desserts.png"),
    }
];

export default function Categories() {
    return (
        <View style={{
            marginTop: 5,
            backgroundColor: "#fff",
            paddingVertical: 10,
            paddingLeft: 20,
        }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {items.map((item, index) => (
                    <View key={index} style={{
                        alignItems: 'center',
                        marginRight: 30
                    }}>
                        <Image source={item.image} style={{
                            width: 50,
                            height: 40,
                            resizeMode: 'contain',
                        }}
                        />
                        <Text style={{
                            fontSize: 15,
                            fontWeight: "900",
                        }}
                        >{item.title}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}
