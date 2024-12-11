import { ScrollView, StyleSheet, Text, View, TouchableOpacity, Button } from "react-native";
import React from 'react';
import { Pressable } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { getRequest, getRequestbyId, postRequest } from "./api";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function CredPage() {
    return(
        <View style={styles.container}>
          <View style={styles.navigator}>
          <TouchableOpacity style={styles.button} onPress={() => {
                router.push({
                  pathname: "/inicio",
                })
              }}>
                  <Text style={styles.buttonText}>INICIO</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.button} onPress={() => {
                router.push({
                  pathname: "/livros",
                })
              }}>
              <Text style={styles.buttonText}>LIVROS</Text>
              </TouchableOpacity>
  
              <TouchableOpacity style={styles.button} onPress={() => {
                router.push({
                  pathname: "/creditos",
                })
              }}>
                  <Text style={styles.buttonText}>CRÉDITOS</Text>
              </TouchableOpacity>
            
          </View>
        
        <View style={styles.title}>
              
        </View>
              <Text style={styles.title}>OBRIGADO DEUS!!</Text>

        </View>
      )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: "center",
      padding: 24,
    },
    main: {
      flex: 1,
      justifyContent: "center",
      maxWidth: 960,
      marginHorizontal: "auto",
    },
    title: {
      fontSize: 64,
      fontWeight: "bold",
    },
    subtitle: {
      fontSize: 36,
      color: "#38434D",
    },
    navigator: { 
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 10,
  },
    button: {
      backgroundColor: '#6495ED',
      paddingVertical: 10,
      alignItems: 'center',
      width: 100,
      margin: 10,
    },
    buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: 'bold',
    },
    description: {
        fontSize: 14,
        color: '#fff',
    }
  });