import * as React from 'react';
import { useState, useEffect } from 'react';
import {
    StyleSheet,
    View,
} from "react-native";


export default function PreviousQuizScore({ navigation }) {

    useEffect(() => {

    }, []);

    return (
        <View style={styles.container}>
        
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#fff',
        padding: 20,
    },
});
