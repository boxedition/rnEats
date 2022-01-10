import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';
import { Divider } from 'react-native-elements';

const YELP_API_KEY = "M4sMoPoaR403riZbOVt-xaE0BAifZFMZky_RiFyMS7gpdflgc530-Qk1DFbAWmGOiQzCEgqjkXkM3P9dyZqvhgzBUatbaJVKc3sf3bF2lDX0Bwge4fM8xHuoH7DVYXYx";

export default function Home({navigation}:any) {
    const [restaurantData, setrestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Hollywood");
    const [activeTab, setActiveTab] = useState("Delivery");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?terms=restaurants&location=${city}`;

        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
            .then((res) => res.json())
            .then(json =>{
                //console.log("Businesses",json.businesses);
                setrestaurantData(json.businesses.filter((business:any) => business.transactions.includes(activeTab.toLowerCase())));
                /* 
                 * Leiria, Lisboa
                setrestaurantData(json.businesses)
                */
            } );
    };

    useEffect(() => {
        getRestaurantsFromYelp();        
    }, [city, activeTab])

    return (
        <SafeAreaView style={{ backgroundColor: "#eee", flex: 1 }}>
            <View style={{
                backgroundColor: "white",
                padding: 15
            }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <Categories />
                <RestaurantItems restaurantData={restaurantData} navigation={navigation} />
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs />
        </SafeAreaView>
    );
}

