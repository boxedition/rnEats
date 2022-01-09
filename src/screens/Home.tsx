import React, { useEffect, useState } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView, View } from 'react-native';
import HeaderTabs from '../components/HeaderTabs';
import SearchBar from '../components/SearchBar';
import Categories from '../components/Categories';
import RestaurantItems, { localRestaurants } from '../components/RestaurantItems';
import BottomTabs from '../components/BottomTabs';
import { Divider } from 'react-native-elements';

const YELP_API_KEY = "M4sMoPoaR403riZbOVt-xaE0BAifZFMZky_RiFyMS7gpdflgc530-Qk1DFbAWmGOiQzCEgqjkXkM3P9dyZqvhgzBUatbaJVKc3sf3bF2lDX0Bwge4fM8xHuoH7DVYXYx";

export default function Home() {
    const [restaurantData, setrestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("Leiria");
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
                <RestaurantItems restaurantData={restaurantData} />
            </ScrollView>
            <Divider width={1}/>
            <BottomTabs />
        </SafeAreaView>
    );
}

