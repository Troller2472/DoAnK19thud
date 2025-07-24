import { Ionicons } from "@expo/vector-icons";
import { Image, Pressable, ScrollView, Text, View } from "react-native";

export default function Profile() {
  return (
    <ScrollView style={{ flex: 1, backgroundColor: "#1a1625" }}>
      {/* Avatar + Info */}
      <View
        style={{
          alignItems: "center",
          paddingVertical: 32,
          backgroundColor: "#2b213a",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        }}
      >
        <Image
          source={{
            uri: "https://i.pravatar.cc/150?img=3",
          }}
          style={{
            width: 120,
            height: 120,
            borderRadius: 60,
            marginBottom: 12,
            borderWidth: 2,
            borderColor: "#fff",
          }}
        />
        <Text style={{ color: "#fff", fontSize: 20, fontWeight: "bold" }}>
          Thien Hoang
        </Text>
        <Text style={{ color: "#ccc", marginTop: 4 }}>thien@example.com</Text>

        <Pressable
          style={{
            marginTop: 16,
            backgroundColor: "#6e40c9",
            paddingHorizontal: 20,
            paddingVertical: 8,
            borderRadius: 20,
          }}
        >
          <Text style={{ color: "#fff", fontWeight: "500" }}>Edit Profile</Text>
        </Pressable>
      </View>

      {/* Menu Options */}
      <View style={{ padding: 16 }}>
        {[
          { icon: "heart-outline" as const, label: "Favorites" },
          { icon: "time-outline" as const, label: "Watch History" },
          { icon: "settings-outline" as const, label: "Settings" },
          { icon: "log-out-outline" as const, label: "Logout" },
        ].map((item, index) => (
          <Pressable
            key={index}
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingVertical: 14,
              borderBottomWidth: 1,
              borderBottomColor: "#3d2c54",
            }}
          >
            <Ionicons name={item.icon} size={22} color="#c5aaff" />
            <Text style={{ color: "#eee", marginLeft: 12, fontSize: 16 }}>
              {item.label}
            </Text>
          </Pressable>
        ))}
      </View>
    </ScrollView>
  );
}
