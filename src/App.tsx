import {
    FlatList,
    ImageSourcePropType,
    SafeAreaView,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import React from "react";
import Title from "@components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { ScrollView } from "react-native";
import { styles } from "./style";
import UserStory from "@components/UserStory/UserStory";
import defaultImage from "@assets/images/profile.png";

const App = () => {
    const userStories = [
        {
            name: "abel1",
            id: 1,
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            name: "abel2",
            id: 2,
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            name: "abel3",
            id: 3,
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            name: "abel4",
            id: 4,
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            name: "abel5",
            id: 5,
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            name: "abel6",
            id: 6,
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            name: "abel7",
            id: 7,
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            name: "abel8",
            id: 8,
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            name: "abel9",
            id: 9,
            profileImage: defaultImage as ImageSourcePropType,
        },
    ];

    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.header}>
                    <Title title={"Let's Explorer"} />
                    <TouchableOpacity style={styles.messageIco}>
                        <FontAwesomeIcon
                            icon={faEnvelope}
                            size={20}
                            color={"#898DAE"}
                        />
                        <View style={styles.messageNumberContainer}>
                            <Text style={styles.messageNumber}>2</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.userStoryContainer}>
                    <FlatList
                        data={userStories}
                        horizontal={true}
                        renderItem={({ item }) => (
                            <UserStory
                                name={item.name}
                                profileImage={item.profileImage}
                            />
                        )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default App;
