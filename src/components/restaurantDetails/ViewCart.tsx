import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useSelector } from 'react-redux'

export default function ViewCart() {
    /**
     * Obter todos os items selecionados
     */
    const items = useSelector((state) => state.cartReducer.selectedItems.items);

    /**
     * Calcular o preço total do carrinho
     */
    const total = items.map((item: any) => Number(item.price.replace('$', ''))).reduce((prev: number, current: number) => prev + current, 0);

    const totalCurrency = total.toLocaleString('en', {
        style: 'currency',
        currency: 'EUR'
    })
    //console.log(totalCurrency);
    
    return (
        <>
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
                    }}>

                        <Text style={{
                            color: 'white',
                            fontSize: 13,
                            marginRight:30,
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
            ):( 
                <></> 
            )}
        </>

    );
}
