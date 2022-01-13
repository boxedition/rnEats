import React, { useEffect } from 'react'
import { View, Text } from 'react-native'

const OrderItems=({item}: any) =>{
     useEffect(() => console.log(item), []);
    const {title, price} = item;

    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 20,
            borderBottomWidth: 1,
            borderBottomColor: '#999',

        }}>
            <Text style={{
                fontWeight: "600",
                fontSize: 15,
            }}>{title}</Text>
            <Text style={{
                opacity: 0.7,
                fontSize: 15,
            }}>{price}</Text>
        </View>
    );
}
export default OrderItems;