import {
    FlatList,
    ImageSourcePropType,
    SafeAreaView,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";
import Title from "@components/Title/Title";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
    Header,
    MessageIcon,
    MessageNumber,
    MessageNumberContainer,
    UserPostContainer,
    UserStoryContainer,
} from "./style";
import UserStory from "@components/UserStory/UserStory";
import defaultImage from "@assets/images/profile.png";
import defaultPost from "@assets/images/post.png";
import { IUserPosts, IUserStories } from "./interfaces";
import UserPost from "@/components/UserPost/UserPost";

const App = () => {
    const userStoriesPageSize: number = 4;
    const [userStoriesCurrentPage, setUserStoriesCurrentPage] =
        useState<number>(1);
    const [userStoriesRenderedData, setUserStoriesRenderedData] = useState<
        IUserStories[]
    >([]);
    const [isLoadingUserStories, setIsLoadingUserStories] =
        useState<boolean>(false);

    const userPostsPageSize: number = 2;
    const [userPostsCurrentPage, setUserPostsCurrentPage] = useState<number>(1);
    const [userPostsRenderedData, setUserPostsRenderedData] = useState<
        IUserPosts[]
    >([]);
    const [isLoadingUserPosts, setIsLoadingUserPosts] =
        useState<boolean>(false);

    const pagination = (
        database: IUserStories[] | IUserPosts[],
        currentPage: number,
        pageSize: number,
    ): IUserStories[] | IUserPosts[] => {
        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if (startIndex >= database.length) {
            return [];
        }
        return database.slice(startIndex, endIndex);
    };

    const userStories = [
        {
            id: 1,
            name: "김영수",
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            id: 2,
            name: "이지연",
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            id: 3,
            name: "박현우",
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            id: 4,
            name: "최미영",
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            id: 5,
            name: "홍성호",
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            id: 6,
            name: "정영미",
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            id: 7,
            name: "이민호",
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            id: 8,
            name: "김영철",
            profileImage: defaultImage as ImageSourcePropType,
        },
        {
            id: 9,
            name: "박지원",
            profileImage: defaultImage as ImageSourcePropType,
        },
    ];

    const userPosts = [
        {
            id: 1,
            firstName: "김",
            lastName: "지원",
            location: "서울",
            postImage: defaultPost as ImageSourcePropType,
            profileImage: defaultImage as ImageSourcePropType,
            likes: 599,
            comments: 24,
            bookmarks: 55,
        },
        {
            id: 2,
            firstName: "박",
            lastName: "영희",
            location: "부산",
            postImage: defaultPost as ImageSourcePropType,
            profileImage: defaultImage as ImageSourcePropType,
            likes: 432,
            comments: 18,
            bookmarks: 33,
        },
        {
            id: 3,
            firstName: "이",
            lastName: "철수",
            location: "대구",
            postImage: defaultPost as ImageSourcePropType,
            profileImage: defaultImage as ImageSourcePropType,
            likes: 786,
            comments: 37,
            bookmarks: 72,
        },
        {
            id: 4,
            firstName: "정",
            lastName: "미영",
            location: "광주",
            postImage: defaultPost as ImageSourcePropType,
            profileImage: defaultImage as ImageSourcePropType,
            likes: 231,
            comments: 12,
            bookmarks: 28,
        },
        {
            id: 5,
            firstName: "홍",
            lastName: "성우",
            location: "인천",
            postImage: defaultPost as ImageSourcePropType,
            profileImage: defaultImage as ImageSourcePropType,
            likes: 924,
            comments: 45,
            bookmarks: 88,
        },
        {
            id: 6,
            firstName: "이",
            lastName: "지연",
            location: "대전",
            postImage: defaultPost as ImageSourcePropType,
            profileImage: defaultImage as ImageSourcePropType,
            likes: 342,
            comments: 16,
            bookmarks: 39,
        },
        {
            id: 7,
            firstName: "김",
            lastName: "민호",
            location: "울산",
            postImage: defaultPost as ImageSourcePropType,
            profileImage: defaultImage as ImageSourcePropType,
            likes: 789,
            comments: 36,
            bookmarks: 67,
        },
        {
            id: 8,
            firstName: "박",
            lastName: "영진",
            location: "세종",
            postImage: defaultPost as ImageSourcePropType,
            profileImage: defaultImage as ImageSourcePropType,
            likes: 456,
            comments: 20,
            bookmarks: 49,
        },
        {
            id: 9,
            firstName: "최",
            lastName: "영희",
            location: "제주",
            postImage: defaultPost as ImageSourcePropType,
            profileImage: defaultImage as ImageSourcePropType,
            likes: 654,
            comments: 28,
            bookmarks: 61,
        },
    ];

    useEffect(() => {
        setIsLoadingUserStories(true);
        const getInitialDataStory = pagination(
            userStories,
            1,
            userStoriesPageSize,
        ) as IUserStories[];
        setUserStoriesRenderedData(getInitialDataStory);
        setIsLoadingUserStories(false);

        setIsLoadingUserPosts(true);
        const getInitialDataPost = pagination(
            userPosts,
            1,
            userPostsPageSize,
        ) as IUserPosts[];
        setUserPostsRenderedData(getInitialDataPost);
        setIsLoadingUserPosts(false);
    }, []);

    return (
        <SafeAreaView>
            <View>
                <FlatList
                    //모든 항목의 상단에 렌더링
                    ListHeaderComponent={
                        <>
                            <Header>
                                <Title title={"Let's Explorer"} />
                                <MessageIcon>
                                    <FontAwesomeIcon
                                        icon={faEnvelope}
                                        size={20}
                                        color={"#898DAE"}
                                    />
                                    <MessageNumberContainer>
                                        <MessageNumber>2</MessageNumber>
                                    </MessageNumberContainer>
                                </MessageIcon>
                            </Header>
                            <UserStoryContainer>
                                <FlatList
                                    showsHorizontalScrollIndicator={false} // 가로 스크롤 제거
                                    data={userStoriesRenderedData}
                                    renderItem={({ item }) => (
                                        <UserStory
                                            key={"userStory" + item.id}
                                            name={item.name}
                                            profileImage={item.profileImage}
                                        />
                                    )}
                                    horizontal={true}
                                    //스크롤 지점에 도달했을 때 실행할 함수를 정의
                                    onEndReached={() => {
                                        if (isLoadingUserStories) return;
                                        setIsLoadingUserStories(true);
                                        const contentToAppend = pagination(
                                            userStories,
                                            userStoriesCurrentPage + 1,
                                            userStoriesPageSize,
                                        );
                                        if (contentToAppend.length > 0) {
                                            setUserStoriesCurrentPage(
                                                userStoriesCurrentPage + 1,
                                            );
                                            setUserStoriesRenderedData(
                                                (prev: IUserStories[]) => [
                                                    ...prev,
                                                    ...(contentToAppend as IUserStories[]),
                                                ],
                                            );
                                        }
                                        console.log(
                                            "스토리 fetch",
                                            userPostsCurrentPage + 1,
                                        );
                                        setIsLoadingUserStories(false);
                                    }}
                                    //onEndReached 함수를 실행시킬 스크롤의 지점을 정할 수 있다. 0이 출발지점 1이 끝지점이며, 보통 무한스크롤의 경우 중반 쯤 내려왔을 때 데이터를 불러오는 것이 자연스럽기 때문에 0.6으로 지정해주었다.

                                    onEndReachedThreshold={0.5}
                                />
                            </UserStoryContainer>
                        </>
                    }
                    data={userPostsRenderedData}
                    showsVerticalScrollIndicator={false} // 세로 스크롤 제거
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if (isLoadingUserPosts) return;
                        setIsLoadingUserPosts(true);
                        const contentToAppend = pagination(
                            userPosts,
                            userPostsCurrentPage + 1,
                            userPostsPageSize,
                        );
                        if (contentToAppend.length > 0) {
                            setUserPostsCurrentPage(userPostsCurrentPage + 1);
                            setUserPostsRenderedData((prev: IUserPosts[]) => [
                                ...prev,
                                ...(contentToAppend as IUserPosts[]),
                            ]);
                        }
                        setIsLoadingUserPosts(false);
                        console.log("게시물 fetch", userPostsCurrentPage + 1);
                    }}
                    renderItem={({ item }) => (
                        <UserPostContainer>
                            <UserPost
                                firstName={item.firstName}
                                lastName={item.lastName}
                                location={item.location}
                                likes={item.likes}
                                postImage={item.postImage}
                                profileImage={item.profileImage}
                                comments={item.comments}
                                bookmarks={item.bookmarks}
                            />
                        </UserPostContainer>
                    )}
                />
            </View>
        </SafeAreaView>
    );
};

export default App;
