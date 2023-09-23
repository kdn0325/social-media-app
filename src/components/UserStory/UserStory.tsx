import { View, Text } from "react-native";
import React from "react";
import { styles } from "./styles";
import { ITitle } from "@/interfaces";

const UserStory = ({ title }: ITitle) => {
    return (
        <View>
            <Text style={styles.title}>{title}</Text>
        </View>
    );
};

export default UserStory;
