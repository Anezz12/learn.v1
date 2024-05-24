import Link from "next/link";

export default async function PostList() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch("http://dummyjson.com/posts?limit=10");
  const Post = await response.json();
  return (
    <ul>
      {data.posts.map((post) => (
        <li key={post.id} className="mb-5">
          <Link href={`/posts/${post.id}`}>{post.title}</Link>
          {/* <p className="text-lg">{post.body}</p> */}
        </li>
      ))}
    </ul>
  );
}
