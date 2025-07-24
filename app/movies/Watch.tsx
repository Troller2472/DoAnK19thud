import MovieCard from "@/component/MovieCard";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useLocalSearchParams } from "expo-router";
import { FlatList, ScrollView, Text } from "react-native";
import CommentBox from "./CommentBox";
import VideoScreen from "./VideoScreen";

function WatchMovie() {
  const { title, description } = useLocalSearchParams();
  const { data: movies } = useFetch(() => fetchMovies({ query: "" }));
  return (
    <ScrollView className="flex-1 p-5 bg-primary">
      <Text className="text-white text-lg mt-5">{title}</Text>
      <VideoScreen></VideoScreen>

      <Text className="text-light-200 text-sm mt-2 mb-4">{description}</Text>

      <CommentBox />

      <Text className="text-light-200 text-sm mt-2 mb-100">You should try</Text>
      <FlatList
        data={movies}
        renderItem={({ item }) => <MovieCard {...item} />}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        columnWrapperStyle={{
          justifyContent: "flex-start",
          gap: 20,
          paddingRight: 5,
          marginBottom: 10,
        }}
        className="mt-2 pb-32"
        scrollEnabled={false}
      />
    </ScrollView>
  );
}

export default WatchMovie;
