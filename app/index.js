import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from 'react';
import { Pressable } from 'react-native';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { getRequest, getRequestbyId, postRequest } from "./api";
import { useEffect, useState } from "react";
import BookCard from "./BookCard";

export default function Page() {
  const [Biblioteca, setBiblioteca] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getRequest(); 
        setBiblioteca(response);
      } catch (error) {
        console.error("Failed to fetch data:", error);
      }
    };

    fetchData();
  }, []);


    return (
      <View style={styles.container}>

      {Biblioteca.length > 0 ? <View style={styles.separator} /> : <></>}

      <ScrollView>
        {Biblioteca?.map((item, index) => (
          <BookCard
            Id={item.id}
            Titulo={item.titulo}
            Qtd={item.qtd}
            status={"Done"}
            onActionPress={() => {
              router.push({
                pathname: "books/[id]",
                params: {id: item.id}
              })
            }}
          />
        ))}
      </ScrollView>
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
});
