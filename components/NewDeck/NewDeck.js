import React, { Component } from 'react'
import { StyleSheet, View, ScrollView, TouchableOpacity } from "react-native"
import { Avatar, Text, Card, Button, List, ListItem, Badge, Input } from "react-native-elements"
import { StackNavigator } from 'react-navigation'


export const NewDeck = () => (
  <View>
    <Input
      placeholder="Write Deck Title"
    />
    <Button
      text="SUBMIT"
      //loading
      //loadingProps={{ size: "large", color: "rgba(111, 202, 186, 1)" }}
      textStyle={{fontWeight: "700"}}
      buttonStyle={{
        backgroundColor: "rgba(92, 99,216, 1)",
        width: 300,
        height: 45,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5
      }}
      containerStyle={{marginTop: 20}}
    />
  </View>
)
