import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

export const localRestaurants = [
    {
        "name": "Gary Danko",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
        "categories": ["Café", "Bar"],
        "price": "$$",
        "review_count": 5296,
        "rating": 4.5,
    },
    {
        "name": "Amazonia",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
        "categories": ["Café", "Bar"],
        "price": "$",
        "review_count": 100,
        "rating": 3,
    },
    ,
    {
        "name": "32",
        "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/CPc91bGzKBe95aM5edjhhQ/o.jpg",
        "categories": ["Restaurant", "Bar"],
        "price": "$",
        "review_count": 521,
        "rating": 4,
    },

];

export default function RestaurantItems({ navigation, ...props }: any) {
    return (
        <>
            {props.restaurantData.map((restaurant: any, index: number) => (
                <TouchableOpacity key={index} activeOpacity={1} style={{ marginBottom: 20 }} onPress={
                    () => navigation.navigate("RestaurantDetails", {
                        name: restaurant.name,
                        image: restaurant.image_url,
                        price: restaurant.price,
                        reviews: restaurant.review_count,
                        rating: restaurant.rating,
                        categories: restaurant.categories,
                    })}
                >
                    <View style={{
                        padding: 15,
                        marginTop: 10,
                        backgroundColor: 'white',
                    }}
                    >
                        <RestautantImage image={restaurant?.image_url} />
                        <RestautantInfo name={restaurant?.name} rating={restaurant?.rating} />
                    </View>

                </TouchableOpacity>
            ))}
        </>
    );
}

const RestautantImage = (props: any) => {
    return (
        <>
            <Image source={{
                uri: props.image,
            }}
                style={{
                    width: "100%",
                    height: 180,
                }}
            />
            <TouchableOpacity style={{
                position: 'absolute',
                right: 20,
                top: 20,
            }}>
                <MaterialCommunityIcons name='heart-outline' size={25} color='#ffffff' />
            </TouchableOpacity>
        </>
    );
}

const RestautantInfo = (props: any) => {
    return (
        <View style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: 10,
        }}>
            <View>
                <Text style={{
                    fontSize: 15,
                    fontWeight: 'bold',

                }}
                >{props.name}</Text>
                <Text style={{
                    fontSize: 13,
                    color: 'gray',

                }}
                >30-45 min</Text>
            </View>
            <View style={{
                backgroundColor: '#eee',
                height: 30,
                width: 30,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 15,
            }}>
                <Text>{props.rating}</Text>
            </View>

        </View>
    );
}