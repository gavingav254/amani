import { create } from "zustand";

import type { Circle, Post } from "../types";
import { circles, postsByCircle } from "../utils/sampleData";

type CommunityState = {
  circles: Circle[];
  activePosts: Record<string, Post[]>;
  toggleCircleJoin: (circleId: string) => void;
  createPost: (circleId: string, post: Omit<Post, "id" | "circleId" | "createdAt" | "likes" | "comments">) => void;
  likePost: (circleId: string, postId: string) => void;
};

export const useCommunityStore = create<CommunityState>((set) => ({
  circles,
  activePosts: postsByCircle,
  toggleCircleJoin: (circleId) =>
    set((state) => ({
      circles: state.circles.map((circle) =>
        circle.id === circleId ? { ...circle, joined: !circle.joined } : circle
      )
    })),
  createPost: (circleId, post) =>
    set((state) => ({
      activePosts: {
        ...state.activePosts,
        [circleId]: [
          {
            id: `post-${Date.now()}`,
            circleId,
            createdAt: "Just now",
            likes: 0,
            comments: 0,
            ...post
          },
          ...(state.activePosts[circleId] ?? [])
        ]
      }
    })),
  likePost: (circleId, postId) =>
    set((state) => ({
      activePosts: {
        ...state.activePosts,
        [circleId]: (state.activePosts[circleId] ?? []).map((post) =>
          post.id === postId ? { ...post, likes: post.likes + 1 } : post
        )
      }
    }))
}));
