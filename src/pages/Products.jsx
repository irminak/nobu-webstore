import Badge from '../components/UI/Badge';
import ProductCard from '../components/ProductCard';
import { items, categories } from '../data/products';

const ProductsPage = () => {
    return (
        <>
            <div className='pt-[70px] sm:pt-[90px] lg:pt-[70px]'>
                <div className='p-4'>
                    <div className='p-4 sm:py-6 flex flex-wrap justify-between sm:justify-center gap-4 sm:gap-8'>
                        {categories.map((category) => (
                            <Badge
                                key={category}
                                category={category}
                            />
                        ))}
                    </div>
                    <div className='pt-4 py-4 grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-2 lg:gap-x-4 gap-y-6 lg:gap-y-10'>
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
