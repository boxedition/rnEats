import React from 'react'
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import { Divider } from 'react-native-elements';
import BouncyCheckbox from 'react-native-bouncy-checkbox';
import { useDispatch, useSelector } from 'react-redux';

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



export default function MenuItems({restaurantName}:any) {

const dispatch = useDispatch();
const selectItem = (item:any, checkboxValue: boolean) => dispatch({
    type: 'ADD_TO_CART', payload: {
        ...item,
        restaurantName: restaurantName, 
        checkboxValue: checkboxValue,
    },
});

const cardItems = useSelector((state) => state.cartReducer.selectedItems.items);

const isFoodInCart = (food:any, cardItems:any) => {
    return Boolean(cardItems.find((item)=> item.title == food.title));    
};

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            {foods.map((food: any, index: number) => (
                <View key={index}>
                    <View style={styles.menuItemStyle} >
                        <BouncyCheckbox fillColor='green' iconStyle={{
                            bordercolor: "lightgray",
                            borderRadius: 25,
                        }} 
                        isChecked={isFoodInCart(food, cardItems)}
                        onPress={(checkboxValue)=>selectItem(food, checkboxValue)}
                        />
                        <FoodInfo food={food} />
                        <FoodImage food={food} />
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

const FoodImage = (props: any) => (
    <View>
        <Image source={{ uri: props.food.image }} style={{
            width: 100,
            height: 100,
            borderRadius: 10,
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
