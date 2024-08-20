import { useParams } from 'react-router-dom';
import { posts } from '../data/posts';

const BlogPage = () => {
    const { postId } = useParams();

    const post = posts.find((post) => post.id === parseInt(postId, 10));

    return (
        <div className='flex justify-center pt-[70px] sm:pt-[90px] mb-8 sm:px-4'>
            <div className='max-w-[840px] px-4 text-font text-justify'>
                <p className='font-roboto text-contrast text-base'>
                    {post.category}
                </p>
                <h2 className='my-4 font-tan text-2xl leading-10'>
                    {post.title}{' '}
                </h2>
                <div className='font-roboto font-base'>
                    <article className='mb-8 text-base'>
                        <h3 className='pb-6 text-lg'>{post.highlight}</h3>
                        {post.article1.map((line) => (
                            <p
                                key={line}
                                className='mb-4'
                            >
                                {line}{' '}
                            </p>
                        ))}
                    </article>
                    <div className='mb-4 max-w-[800px]'>
                        <img
                            src={post.img}
                            className='mx-auto rounded-lg '
                        />
                    </div>
                    <article className='mt-8 text-base'>
                        {post.article2.map((line) => (
                            <p
                                key={line}
                                className='mb-4'
                            >
                                {line}{' '}
                            </p>
                        ))}
                    </article>
                </div>
                <div className='mt-10 flex border-t-2 pt-6 border-primary items-center gap-4'>
                    <img
                        className='rounded-full w-[80px]'
                        src={post.aphoto}
                        alt=''
                    />
                    <div className='flex flex-col'>
                        <p className='font-roboto'>{post.author}</p>
                        <p className='font-roboto text-[#999]'>{post.date}</p>
                    </div>
                </div>
            </div>{' '}
        </div>
    );
};

export default BlogPage;
