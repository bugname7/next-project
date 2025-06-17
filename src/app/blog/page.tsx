import Link from 'next/link';
import axios from 'axios';

export const metadata = {
  title: 'Blog',
  description: 'Postlar ro‘yxati',
};
interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await axios.get('https://jsonplaceholder.typicode.com/posts?_limit=10');
  return res.data;
}

export default async function BlogPage() {
  const posts = await getPosts();

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Blog ro‘yxati</h2>
      <ul className="space-y-2">
        {posts.map((post) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`} className="text-blue-600 hover:underline">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
