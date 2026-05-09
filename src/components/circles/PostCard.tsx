import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { Post } from "../../types";
import { Card } from "../common/Card";

type PostCardProps = {
  post: Post;
  onLike: () => void;
};

export function PostCard({ post, onLike }: PostCardProps) {
  return (
    <Card style={styles.card}>
      <View style={styles.header}>
        <View style={styles.avatar}>
          <Text style={styles.avatarText}>{post.anonymous ? "A" : post.authorName.charAt(0)}</Text>
        </View>
        <View>
          <Text style={styles.author}>{post.anonymous ? "Anonymous" : post.authorName}</Text>
          <Text style={styles.time}>{post.createdAt}</Text>
        </View>
      </View>
      <Text style={styles.content}>{post.content}</Text>
      {post.imageUrl ? <Image source={{ uri: post.imageUrl }} style={styles.image} /> : null}
      <View style={styles.actions}>
        <Pressable style={styles.action} onPress={onLike}>
          <Ionicons name="heart-outline" size={18} color={colors.primary} />
          <Text style={styles.actionText}>{post.likes}</Text>
        </Pressable>
        <View style={styles.action}>
          <Ionicons name="chatbubble-outline" size={18} color={colors.primary} />
          <Text style={styles.actionText}>{post.comments}</Text>
        </View>
        <View style={styles.action}>
          <Ionicons name="share-social-outline" size={18} color={colors.primary} />
          <Text style={styles.actionText}>Share</Text>
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  action: {
    alignItems: "center",
    flexDirection: "row",
    gap: 5
  },
  actionText: {
    color: colors.primary,
    fontSize: fonts.sizes.sm,
    fontWeight: fonts.weights.bold
  },
  actions: {
    flexDirection: "row",
    gap: 18
  },
  author: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold
  },
  avatar: {
    alignItems: "center",
    backgroundColor: colors.secondary,
    borderRadius: 20,
    height: 40,
    justifyContent: "center",
    width: 40
  },
  avatarText: {
    color: colors.primary,
    fontWeight: fonts.weights.black
  },
  card: {
    gap: 14
  },
  content: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  },
  header: {
    alignItems: "center",
    flexDirection: "row",
    gap: 12
  },
  image: {
    borderRadius: 16,
    height: 160,
    width: "100%"
  },
  time: {
    color: colors.muted,
    fontSize: fonts.sizes.xs
  }
});
