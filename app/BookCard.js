import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const BookCard = ({ Id, Titulo, Qtd, status, onActionPress }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.description}>{Id}</Text>
      <View style={styles.header}>
        <Text style={styles.title}>Titulo: {Titulo}</Text>
      </View>
      <Text style={styles.description}>Quantidade: {Qtd}</Text>
      <TouchableOpacity style={styles.button} onPress={onActionPress}>
        <Text style={styles.buttonText}>VER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
    marginVertical: 10,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  status: {
    fontSize: 14,
    fontWeight: 'bold',
    textTransform: 'uppercase',
  },
  done: {
    color: 'green',
  },
  pending: {
    color: 'orange',
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#6495ED',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  done: {
    width: 24,
    height: 24,
  },
});

export default BookCard;
