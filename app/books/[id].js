import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { getRequest, getRequestbyId, postRequest } from "../api";
import { useEffect, useState } from "react";
import { router } from 'expo-router';
import { TextInput } from "react-native-web";

export default function BooksPage() {
    const [locatario, setLocatario] = useState([]);
    const [locatarioNome, setLocatarioNome] = useState("");
    const [locatarioAnoNasc, setLocatarioAnoNasc] = useState("");
    const [livro, setLivro] = useState([]);
    const { id } = useLocalSearchParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await getRequestbyId(id);
                setLivro(response);
            } catch (error) {
                console.error("Failed to fetch data:", error);
            }
        };

        fetchData();
    }, []);


    const emprestarLivro = (id) => {
        const response = postRequest(id, locatario.nome, locatario.anoNasc)
        setLocatario(response);
    };



    return (
        <View style={styles.card}>
            <View style={styles.card}>
                <View style={styles.header}>
                    <Text style={styles.title}>{livro.id}</Text>
                    <Text style={styles.description}>{livro.titulo}</Text>
                </View>
                <Text style={styles.description}>Autor: {livro.autor}</Text>
                <Text style={styles.description}>Ano: {livro.anoLancamento}</Text>
                <Text style={styles.description}>Quantidade: {livro.qtd}</Text>

                <Text style={styles.label}>Nome:</Text>
                <TextInput
                    style={styles.input}
                    value={locatarioNome}
                    onChangeText={setLocatarioNome}
                    placeholder="Nome do Locatario"
                />
                <Text style={styles.label}>Ano de Nascimento:</Text>
                <TextInput
                    style={styles.input}
                    value={locatarioAnoNasc}
                    onChangeText={setLocatarioAnoNasc}
                    placeholder="Ano de Nascimento"
                />
                <TouchableOpacity style={styles.button} onPress={() => emprestarLivro(id)}>
                    <Text style={styles.buttonText}>Emprestar</Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}

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
        backgroundColor: '#d33f49',
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
    label: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 8,
        marginTop: 20,
      },
      input: {
        borderWidth: 1,
        borderColor: "#ccc",
        borderRadius: 8,
        padding: 12,
        fontSize: 16,
      }
});