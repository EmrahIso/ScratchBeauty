import {
  blogData,
  type BlogDataArray,
  type BlogDataObj,
} from '@/lib/blogDataDetails';

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const posts: BlogDataArray = blogData;
  const post: BlogDataObj | undefined = posts.items.find(
    (blogPost: BlogDataObj) => blogPost.slug === slug
  );

  if (!post) return <p className='mt-[100px] my-40'>Post nije pronađen</p>;

  return (
    <article className='max-w-3xl mx-auto p-6 mt-[100px]'>
      <div className='mt-12'>
        <span className='block text-center text-(--color-pink) font-bold animate-[fadeIn_0.6s_ease-out_forwards_0.100s] opacity-0'>
          Objavljeno: {post.date}
        </span>
        <h1 className='text-4xl text-center font-semibold mb-3 bg-gradient-to-r from-foreground via-foreground/80 to-foreground bg-clip-text text-transparent inline-block opacity-0 animate-[fadeIn_0.6s_ease-out_forwards_0.150s] mt-8'>
          {post.title}
        </h1>
        <p className='mt-4 text-base text-center text-muted-foreground md:mt-6 md:text-lg animate-[fadeIn_0.6s_ease-out_forwards_0.200s] opacity-0'>
          {post.description}
        </p>
        {post.image && (
          <img
            src={post.image}
            alt={post.title}
            className='w-full h-120 rounded-sm object-cover mt-20 animate-[fadeIn_0.6s_ease-out_forwards_0.300s] opacity-0'
          />
        )}
        <div className='text-gray-800 sm:px-12 px-2'>
          {post.content || 'Ovde ide sadržaj posta...'}
        </div>
        <div className='mt-10 border-t sm:mx-12 mx-2 pt-8 sm:mb-10 mb-0'>
          <div className='flex'>
            <div>
              <img
                src={post.authorImage}
                alt={post.authorName}
                className='w-full h-18 object-cover rounded-full'
              />
            </div>
            <div className='flex flex-col ml-8 justify-around'>
              <h3 className='text-2xl font-medium transition-colors duration-200 text-left text-foreground'>
                {post.authorName}
              </h3>
              <p className='sm:text-base text-sm leading-6 text-muted-foreground'>
                Član tima Scratch Beauty
              </p>
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}

export async function generateStaticParams() {
  const posts: BlogDataArray = blogData;
  return posts.items.map((post) => ({ slug: post.slug }));
}
