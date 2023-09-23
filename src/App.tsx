import { Pressable, SafeAreaView, Text, View } from "react-native";
import React from "react";
import Title from "@components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { ScrollView } from "react-native";
import { styles } from "./style";

const App = () => {
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Title title={"Let's Explorer"} />
                    <Pressable style={styles.messageIco}>
                        <FontAwesomeIcon icon={faEnvelope} color={"#CACDDE"} />
                    </Pressable>
                    <View style={styles.messageNumberContainer}>
                        <Text style={styles.messageNumber}>2</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
