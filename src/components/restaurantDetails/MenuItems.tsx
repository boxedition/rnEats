import React, { useEffect } from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

export default function MenuItems({ restaurantName, foods, hideCheckbox, marginLeft, ...props }: any) {

    const dispatch = useDispatch();
    const selectItem = (item: any, checkboxValue: boolean) => dispatch({
        type: 'ADD_TO_CART', payload: {
            ...item,
            restaurantName: restaurantName,
            checkboxValue: checkboxValue,
        },
    });


    //useEffect(()=>console.log("[Props]", props),[]);
    const cardItems = useSelector((state) => state.cartReducer.selectedItems.items);

    const isFoodInCart = (food: any, cardItems: any) => {
        return Boolean(cardItems.find((item) => item.title == food.title));
    };

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food: any, index: number) => (
                <View key={index}>
                    <View style={styles.menuItemStyle} >
                        {hideCheckbox ? (<></>) : (
                            <BouncyCheckbox fillColor='green' iconStyle={{
                                bordercolor: "lightgray",
                                borderRadius: 25,
                            }}
                                isChecked={isFoodInCart(food, cardItems)}
                                onPress={(checkboxValue) => selectItem(food, checkboxValue)}
                            />
                        )}
                        <FoodInfo food={food} />
                        <FoodImage food={food} marginLeft={marginLeft? marginLeft : 0} />
                    </View>
                    <Divider width={0.5} orientation='vertical' style={{
                        marginHorizontal: 20,
                    }} />
                </View>
            ))}
        </ScrollView>
    );
}

const FoodInfo = (props: any) => (
    <View style={{
        width: 240,
        justifyContent: 'space-evenly',
    }} >
        <Text style={styles.titleStyle}>{props.food.title}</Text>
        <Text>{props.food.description}</Text>
        <Text>{props.food.price}</Text>
    </View>
);

const FoodImage = ({marginLeft, ...props}: any) => (
    <View>
        <Image source={{ uri: props.food.image }} style={{
            width: 100,
            height: 100,
            borderRadius: 10,
            marginLeft: marginLeft,
        }} />
    </View>
);

const styles = StyleSheet.create({
    menuItemStyle: {
        flexDirection: 'row',
        margin: 20,
        justifyContent: 'space-between',
    },
    titleStyle: {
        fontSize: 19,
        fontWeight: "600",
    }
})
