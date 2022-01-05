import React from 'react';
import HeaderTabs from '../components/HeaderTabs';
import {SafeAreaView} from 'react-native-safe-area-context';

export default function Home() {
    return (
        <SafeAreaView>
            <HeaderTabs />
        </SafeAreaView>
    );
}

