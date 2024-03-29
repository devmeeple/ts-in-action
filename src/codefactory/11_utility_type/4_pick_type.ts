/**
 * Pick Type
 */
interface Post {
  title: string;
  content: string;
  createdAt: Date;
}

function createPost(post: Pick<Post, 'title' | 'content'>): Post {
  return {
    ...post,
    createdAt: new Date(),
  };
}

createPost({
  title: '좌측담장, 좌측담장',
  content: '으로 들어가시면 됩니다.',
});
