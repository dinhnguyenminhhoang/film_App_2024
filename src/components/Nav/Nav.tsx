import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import resuableStyle from "../Resuable/Resuable.style";
import { Entypo, Feather, FontAwesome } from "@expo/vector-icons";

interface NavProps {
    title: string;
}
const Nav: React.FC<NavProps> = ({ title }) => {
    return (
        <View style={[styles.container, resuableStyle.flexRow]}>
            <View style={[resuableStyle.flexRow]}>
                <Entypo name="menu" size={24} color="black" />
                <Text>Home</Text>
            </View>
            <View style={[resuableStyle.flexRow]}>
                <FontAwesome name="search" size={24} color="black" />
                <Feather name="more-vertical" size={24} color="black" />
            </View>
        </View>
    );
};

export default Nav;

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
    },
});
