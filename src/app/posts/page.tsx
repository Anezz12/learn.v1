import PostList from "@/components/post-list";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("http://dummyjson.com/posts?limit=10");
  const Post = await response.json();
  return (
    <main className=" text-center pt-32 px-5">
      <h1 className=" text-4xl md:text-5xl font-bold mb-5">All Post</h1>
      <Suspense fallback="Loading....">
        <PostList />
      </Suspense>
    </main>
  );
}
