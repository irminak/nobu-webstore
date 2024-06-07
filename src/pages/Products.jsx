import Badge from '../components/UI/Badge';
import ProductCard from '../components/ProductCard';
import { items, categories } from '../data/products';

const ProductsPage = () => {
    return (
        <>
            <div className='pt-[70px]'>
                <div className='p-4'>
                    <div className='p-4 flex flex-wrap justify-between gap-4'>
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                category={category}
                            />
                        ))}
                    </div>
                    <div className='pt-4 grid grid-cols-2 gap-x-2 gap-y-6'>
                        {items.map((item) => (
                            <ProductCard
                                key={item.id}
                                id={item.id}
                                img={item.img}
                                name={item.name}
                                price={item.price}
                                category={item.category}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductsPage;
