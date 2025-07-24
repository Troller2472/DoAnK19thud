import { useState } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default function CommentBox() {
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState<string[]>([]);

  const handleAddComment = () => {
    if (!comment.trim()) return;
    setComments([comment, ...comments]);
    setComment("");
  };

  return (
    <View className="mt-4 mb-6 boder-5 border-light-200 p-4 rounded-lg bg-dark-200">
      <Text className="text-white text-base font-semibold mb-2">Comments</Text>

      <View className="flex-row items-center gap-2 mb-4">
        <TextInput
          placeholder="Leave a comment..."
          placeholderTextColor="#ccc"
          value={comment}
          onChangeText={setComment}
          className="flex-1 bg-white/10 text-white p-2 rounded-lg"
        />
        <TouchableOpacity onPress={handleAddComment}>
          <Text className="text-blue-400 font-semibold">Send</Text>
        </TouchableOpacity>
      </View>

      {comments.length === 0 ? (
        <Text className="text-light-200 italic">Nothing here...</Text>
      ) : (
        comments.map((c, idx) => (
          <Text key={idx} className="text-white mb-2 bg-white/5 p-2 rounded-md">
            Unknow :{c}
          </Text>
        ))
      )}
    </View>
  );
}
