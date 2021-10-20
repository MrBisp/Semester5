import React from 'react';
import { StyleSheet, View,Text} from 'react-native';

const Recipe = (props) => {
    return (
        <View style={styles.container}>
            <Text>Opskrift</Text>
            <Text>Name: {props.route.params.name}</Text>
            <Text>Length: {props.route.params.length}</Text>
        </View>
    );
}

export default Recipe;

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
});