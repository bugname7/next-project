import axios from 'axios';

type Props = {
  params: { slug: string };
};

export async function generateMetadata({ params }: Props) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const post = res.data;

  return {
    title: post.title,
    description: post.body.slice(0, 100),
  };
}

export default async function BlogPostPage({ params }: Props) {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
  const post = res.data;

  return (
    <div>
      <h2 className="text-2xl font-bold mb-2">{post.title}</h2>
      <p>{post.body}</p>
    </div>
  );
}
