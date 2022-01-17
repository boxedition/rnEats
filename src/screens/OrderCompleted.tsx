import React from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';

export default function OrderCompleted() {

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);

    /**
     * Calcular o preço total do carrinho
     */
    const total = items.map((item: any) => Number(item.price.replace('$', ''))).reduce((prev: number, current: number) => prev + current, 0);

    const totalCurrency = total.toLocaleString('en', {
        style: 'currency',
        currency: 'EUR',
    })
    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <LottieView style={{
                height:100,
                alignSelf: 'center',
                marginBottom: 30,
            }}
            source={require("../assets/animations/check-mark.json")}
            autoPlay
            speed={0.5}
            loop={false}/>

            <View>
                <Text>Your order at {restaurantName} has been placed for {totalCurrency}</Text>
            </View>

            <LottieView style={{
                height:200,
                alignSelf: 'center',
            }}
            source={require("../assets/animations/cooking.json")}
            autoPlay
            speed={0.5}/>
        </SafeAreaView>
    )
}
