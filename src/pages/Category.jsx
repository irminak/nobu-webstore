import { useParams } from 'react-router-dom';
import { items } from '../data/products';
import ProductCard from '../components/ProductCard';
import InspirationCard from '../components/InspirationCard';

const CategoryPage = () => {
    const { category } = useParams();
    const categoryItems = items.filter((item) => item.category === category);

    return (
        <div className='pt-[70px]'>
            <div className='p-4'>
                <InspirationCard
                    shape='h-[160px]'
                    text={category}
                    bg={category}
                    position='items-end'
                    category={category}
                />
                <div className='pt-8 grid grid-cols-2 gap-x-2 gap-y-6'>
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
