import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import LottieView from 'lottie-react-native';
import firebase from "../../firebase"
import MenuItems from '../components/restaurantDetails/MenuItems';
import { ScrollView } from 'react-native-gesture-handler';

export default function OrderCompleted() {

    const [lastOrder, setlastOrder] = useState({
        items: [
            {
                title: "Ai Gertrudes",
                description: "Minha nossa",
                price: "10",
                image: "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3B707DAE-A600-44FC-B7D5-15896184874D/Derivates/e3304b41-3431-4b6e-b600-8ee6bd94cdbe.jpg",
            },
        ]
    });

    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);

    /**
     * Calcular o preço total do carrinho
     */
    const total = items.map((item: any) => Number(item.price.replace('$', ''))).reduce((prev: number, current: number) => prev + current, 0);

    const totalCurrency = total.toLocaleString('en', {
        style: 'currency',
        currency: 'EUR',
    })

    useEffect(() => {
        const db = firebase.firestore();
        const unsubscribe = db.collection("rnEats-Orders")
        .orderBy('createdAt', 'desc')
        .limit(1)
        .onSnapshot((snapshot) => {
            console.log("[FIRESTORE] SnapShot", snapshot);
            snapshot.docs.map((doc)=>{
                setlastOrder(doc.data());
            });
        });
        return () =>unsubscribe();
    }, []);

    return (
        <SafeAreaView style={{
            flex: 1,
            backgroundColor: 'white',
        }}>
            <View style={{
                margin:15,
                alignItems: 'center',
                height: "100%"
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
                <Text style={{
                    fontSize:20,
                    fontWeight: 'bold',
                }}>Your order at {restaurantName} has been placed for {totalCurrency}</Text>
            </View>
            <ScrollView>
                <MenuItems foods={lastOrder.items} hideCheckbox={true} />
                <LottieView style={{
                    height:200,
                    alignSelf: 'center',
                    marginBottom: 30
                }}
                source={require("../assets/animations/cooking.json")}
                autoPlay
                speed={0.5}/>

            </ScrollView>

           
            </View>
        </SafeAreaView>
    )
}
