import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

export default function Task(props) {
  return (
    <View style={styles.item}>
        <View style={styles.itemLeft}>
            <View style={styles.square}></View>
            <Text>{props.text}</Text>
        </View>
        <View style={styles.circular}></View>
    </View>
  )
}

const styles = StyleSheet.create({
    item: {
        backgroundColor: "white",
        padding: 15,
        borderRadius: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 20,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',
    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        marginRight: 15,
        borderRadius: 5,
    },
    text: {
        maxWidth: '80%',
    },
    circular: {
        width: 12,
        height: 12,
        borderColor: '#55BCF6',
        borderWidth: 2,
        marginRight: 5,
        borderRadius: 15,
    },
});