import React from 'react';
import {StyleSheet, View, Text, FlatList, Image, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import ImageCard from "./ImageCard";
import Image1 from "../assets/champignon.jpg"
import Image2 from "../assets/bacon.jpg"


const DATA = [
    {
        id: '1',
        title: 'Fyldte champignon',
        image: Image1
    },
    {
        id: '2',
        title: 'Baconsvøbte bønner i ovn',
        image: Image2
    },
    {
        id: '4',
        title: 'Third Item',
        image: Image1
    },
    {
        id: '5',
        title: 'Third Item',
        image: Image1
    },
    {
        id: '6',
        title: 'Third Item',
        image: Image1
    },
    {
        id: '7',
        title: 'Third Item',
        image: Image1
    },
    {
        id: '8',
        title: 'Third Item',
        image: Image1
    },
];

const HomeScreen = ({navigation}) => {
    const renderItem = ({ item }) => (
        <ImageCard navigation={navigation} title={item.title} image={item.image} />
    );

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.h1}>Sulten igen, Flemming?</Text>
            <SafeAreaView>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                    keyExtractor={item => item.id}
                />
            </SafeAreaView>
        </ScrollView>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default HomeScreen;


const styles = StyleSheet.create({
    container: {
        paddingTop:40
    },
    h1: {
        fontSize: 42,
        fontWeight: '700',
        paddingLeft: 20
    }
});