import { useLocalSearchParams } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { getRequest, getRequestbyId, postRequest } from "../api";


export default function BooksPage() {

    const { id } = useLocalSearchParams();



    const emprestarLivro = (index, id) => {
        const updatedLivros = [...Biblioteca];
        updatedLivros.splice(index, id);
        postRequest()
        setBiblioteca(updatedLivros);
    };


    return (
        <View style={style.container}>
            <Text>My Book Page {id}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    }
})