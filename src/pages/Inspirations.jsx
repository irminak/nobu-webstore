import { Link } from 'react-router-dom';
import { posts } from '../data/posts';
import Badge from '../components/UI/Badge';

const InspirationsPage = () => {
    return (
        <div className='pt-[70px] sm:pt-[90px] '>
            <section className='p-4 mb-8'>
                <div className='pb-6 font-futura border-b-2 border-silver'>
                    <h2 className='text-font text-3xl font-medium'>
                        Inspirations
                    </h2>
                    <p className='py-2 text-[#555] text-lg'>
                        Let yourself find some pleasure with{' '}
                        <span className='font-semibold'>our</span> help
                    </p>
                </div>
                <div className='my-12'>
                    {posts.map((post) => (
                        <article className='mb-20'>
                            <Link to={`/inspirations/${post.id}`}>
                                <div>
                                    <img
                                        src={post.img}
                                        className='rounded-2xl'
                                    />
                                </div>
                            </Link>
                            <div className='py-10 inline-block'>
                                <Badge category={post.category} />
                            </div>
                            <div className='text-justify text-font border-b-2 border-silver'>
                                <Link to={`/inspirations/${post.id}`}>
                                    <h2 className='font-tan text-xl leading-8'>
                                        {post.title}
                                    </h2>
                                    <p className='py-6 font-roboto text-lg font-light text-[#555]'>
                                        {post.highlight}
                                    </p>
                                </Link>
                            </div>
                            <div className='mt-8 flex items-center gap-4 font-roboto'>
                                <div>
                                    <img
                                        src={post.aphoto}
                                        alt=''
                                        className='rounded-full w-[70px]'
                                    />
                                </div>
                                <div>
                                    <p className=' text-lg'>{post.author}</p>
                                    <p className='text-[#999]'>{post.date}</p>
                                </div>
                            </div>
                        </article>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default InspirationsPage;
