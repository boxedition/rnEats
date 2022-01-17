import React, { useState } from 'react'
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux';
import OrderItems from './OrderItems';
import LottieView from 'lottie-react-native';

import firebase from '../../../firebase';

export default function ViewCart({ navigation }: any) {
    /**
     * Obter todos os items selecionados
     */
    const [modalVisible, setModalVisible] = useState(false);
    const { items, restaurantName } = useSelector((state) => state.cartReducer.selectedItems);

    const [loading, setLoading] = useState(false);

    /**
     * Calcular o preço total do carrinho
     */
    const total = items.map((item: any) => Number(item.price.replace('$', ''))).reduce((prev: number, current: number) => prev + current, 0);

    const totalCurrency = total.toLocaleString('en', {
        style: 'currency',
        currency: 'EUR',
    })

    const addOrderToFirebase = () =>{ 
        setLoading(true);
        const db = firebase.firestore();
        db.collection("rnEats-Orders").add({
            items:items,
            restaurantName: restaurantName,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        }).then(()=>{
            setTimeout(() => {
                setLoading(false);
                navigation.navigate('OrderCompleted'); 
            }, 500);
            setModalVisible(false);
        });
    };

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer} >
                    <View style={styles.modalCheckoutContainer} >
                        <Text style={styles.restaurantName} >{restaurantName}</Text>
                        {items.map((item: any, index: number) => (
                            <OrderItems key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText} >Subtotal</Text>
                            <Text>{totalCurrency}</Text>
                        </View>
                        <View style={{
                            flexDirection: 'row',
                            justifyContent: 'center',
                        }}>
                            <TouchableOpacity style={{
                                marginTop: 20,
                                backgroundColor: 'black',
                                alignItems: 'center',
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: 'relative',
                            }}
                            
                            onPress={()=> {addOrderToFirebase()}}>
                                <Text style={{
                                    color: 'white',
                                    fontSize: 15,
                                }}>Checkout</Text>
                                <Text style={{
                                    position: 'absolute',
                                    right:15,
                                    top: 15,
                                    color: 'white'}} >
                                    {total? totalCurrency : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <Modal
                animationType='slide'
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View style={{
                    flex: 1,
                    alignItems: 'center',
                    flexDirection: 'row',
                    position: 'absolute',
                    bottom: 30,
                    zIndex: 999,
                }} >
                    <View style={{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        width: "100%"
                    }} >
                        <TouchableOpacity style={{
                            marginTop: 20,
                            backgroundColor: 'black',
                            flexDirection: 'row',
                            justifyContent: 'flex-end',
                            padding: 12,
                            borderRadius: 30,
                            width: 300,
                            position: 'relative',
                        }}
                            onPress={() => setModalVisible(true)}>

                            <Text style={{
                                color: 'white',
                                fontSize: 13,
                                marginRight: 30,
                            }}>View cart</Text>
                            <Text style={{
                                color: 'white',
                                fontSize: 13,
                            }}
                            >{totalCurrency}</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                /* CUIDADO Bruxaria de Fragmentos */
            ) : (
                <></>
            )}
            {loading ? (
            <View style={{
                backgroundColor: 'black',
                position: 'absolute',
                opacity: 0.6,
                justifyContent: 'center',
                alignItems:'center',
                height: "100%",
                width: "100%",
            }}>
                <LottieView style={{
                    height:300,
                }}
                source={require("../../assets/animations/scanner.json")}
                autoPlay
                speed={3}
                />
            </View>
            ) : (<></>)}
        </>

    );
}

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: "rgba(0,0,0,0.7)",
    },

    modalCheckoutContainer: {
        backgroundColor: "white",
        padding: 15,
        height: 400,
        borderWidth: 1,
    },
    restaurantName: {
        textAlign: 'center',
        fontWeight: '600',
        marginBottom: 10,
        fontSize: 20,
    },
    subtotalContainer: {
        flexDirection: 'row',
        justifyContent: "space-between",
        marginTop: 15,
    },
    subtotalText: {
        textAlign: 'left',
        fontWeight: "600",
        fontSize: 15,
        marginBottom: 10,
    }

})
