import { useParams } from 'react-router-dom';
import { items } from '../data/products';
import ProductCard from '../components/ProductCard';
import InspirationCard from '../components/InspirationCard';

const CategoryPage = () => {
    const { category } = useParams();
    const categoryItems = items.filter((item) => item.category === category);

    return (
        <div className='max-w-[1536px] mx-auto pt-[70px] sm:pt-[90px] lg:pt-[76px]'>
            <div className='p-4'>
                <InspirationCard
                    shape='h-[160px] sm:h-[260px]'
                    text={category}
                    bg={category}
                    position='items-end'
                    category={category}
                />
                <div className='pt-8 py-4 sm:pt-12 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 lg:gap-x-4 gap-y-6 lg:gap-y-10'>
                    {categoryItems.map((item) => (
                        <ProductCard
                            id={item.id}
                            key={item.id}
                            img={item.img}
                            name={item.name}
                            price={item.price}
                            category={item.category}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
