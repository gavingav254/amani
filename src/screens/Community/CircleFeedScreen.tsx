import type { StackScreenProps } from "@react-navigation/stack";
import { useMemo, useState } from "react";
import { Image, Pressable, StyleSheet, Switch, Text, TextInput, View } from "react-native";

import { PostCard } from "../../components/circles/PostCard";
import { AppButton } from "../../components/common/AppButton";
import { Card } from "../../components/common/Card";
import { Screen } from "../../components/common/Screen";
import { colors } from "../../constants/colors";
import { fonts } from "../../constants/fonts";
import type { AppStackParamList } from "../../navigation/types";
import { useAuthStore } from "../../store/authStore";
import { useCommunityStore } from "../../store/communityStore";

type Props = StackScreenProps<AppStackParamList, "CircleFeed">;

const calmingImage = "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?w=900";

export function CircleFeedScreen({ navigation, route }: Props) {
  const [content, setContent] = useState("");
  const [postAnonymously, setPostAnonymously] = useState(true);
  const [includeImage, setIncludeImage] = useState(false);
  const user = useAuthStore((state) => state.user);
  const circles = useCommunityStore((state) => state.circles);
  const activePosts = useCommunityStore((state) => state.activePosts);
  const createPost = useCommunityStore((state) => state.createPost);
  const likePost = useCommunityStore((state) => state.likePost);

  const circle = circles.find((item) => item.id === route.params.circleId);
  const posts = useMemo(
    () => activePosts[route.params.circleId] ?? [],
    [activePosts, route.params.circleId]
  );

  const handleCreatePost = () => {
    const trimmed = content.trim();

    if (!trimmed) {
      return;
    }

    createPost(route.params.circleId, {
      authorName: user?.name ?? "Friend",
      anonymous: postAnonymously,
      content: trimmed,
      imageUrl: includeImage ? calmingImage : undefined
    });
    setContent("");
    setIncludeImage(false);
  };

  return (
    <Screen>
      <Pressable onPress={() => navigation.goBack()}>
        <Text style={styles.back}>Back</Text>
      </Pressable>
      <Text style={styles.title}>{circle?.name ?? "Circle Feed"}</Text>
      <Text style={styles.subtitle}>{circle?.description}</Text>

      <Card style={styles.composer}>
        <Text style={styles.composerTitle}>Share with care</Text>
        <TextInput
          multiline
          onChangeText={setContent}
          placeholder="What would you like the circle to know?"
          placeholderTextColor={colors.muted}
          style={styles.input}
          textAlignVertical="top"
          value={content}
        />
        {includeImage ? <Image source={{ uri: calmingImage }} style={styles.previewImage} /> : null}
        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Post anonymously</Text>
          <Switch value={postAnonymously} onValueChange={setPostAnonymously} />
        </View>
        <View style={styles.toggleRow}>
          <Text style={styles.toggleLabel}>Add optional image</Text>
          <Switch value={includeImage} onValueChange={setIncludeImage} />
        </View>
        <AppButton label="Post" onPress={handleCreatePost} />
      </Card>

      <View style={styles.posts}>
        {posts.map((post) => (
          <PostCard
            key={post.id}
            post={post}
            onLike={() => likePost(route.params.circleId, post.id)}
          />
        ))}
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  back: {
    color: colors.primary,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.bold,
    marginBottom: 16
  },
  composer: {
    gap: 12,
    marginTop: 18
  },
  composerTitle: {
    color: colors.text,
    fontSize: fonts.sizes.lg,
    fontWeight: fonts.weights.black
  },
  input: {
    backgroundColor: colors.secondary,
    borderRadius: 16,
    color: colors.text,
    fontSize: fonts.sizes.md,
    minHeight: 110,
    padding: 14
  },
  posts: {
    gap: 14,
    marginTop: 18
  },
  previewImage: {
    borderRadius: 16,
    height: 140,
    width: "100%"
  },
  subtitle: {
    color: colors.muted,
    fontSize: fonts.sizes.md,
    lineHeight: fonts.lineHeights.md
  },
  title: {
    color: colors.text,
    fontSize: fonts.sizes["2xl"],
    fontWeight: fonts.weights.black
  },
  toggleLabel: {
    color: colors.text,
    fontSize: fonts.sizes.md,
    fontWeight: fonts.weights.semibold
  },
  toggleRow: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between"
  }
});
