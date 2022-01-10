import React from 'react'
import { View, Text, Image } from 'react-native'

const yelpRestaurantInfo = {
    name: "Restaurante Do Caraças",
    image: "https://www.vinumatgrahams.com/wp-content/uploads/2017/10/vinum-restaurante-5.jpg",
    price: "$$",
    reviews: "200",
    rating: "3.9",
    categories: [{ title: "thai" }, { title: "Confort food" }]

};

export default function About(props: any) {
    const { name, image, price, reviews, rating, categories } = props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(' ∙ ');
    const description = `${formattedCategories} ${price ? " ∙ " + price : ""}  ${rating}⭐ (${reviews}) `;
    return (
        <View>
            <RestautantImage image={image} />
            <RestautantName name={name} />
            <RestautantDescription description={description} />
        </View>
    )
}

const RestautantImage = (props: any) => (
    <Image source={{ uri: props.image }} style={{
        width: "100%",
        height: 180,
    }} />

);

const RestautantName = (props: any) => (
    <Text style={{
        fontSize: 30,
        fontWeight: "600",
        marginTop: 10,
        marginHorizontal: 15,
    }} >{props.name}</Text>
);

const RestautantDescription = (props: any) => (
    <Text style={{
        marginTop: 10,
        marginHorizontal: 15,
        fontWeight: "400",
        fontSize: 15
    }} >{props.description}</Text>
);