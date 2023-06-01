import { currencyFormatter, percentageFormatter, titleProductFormatter } from '../../../../common'

import { Product } from '..'

interface Data {
    product: Product
}
const CardProduct = ({ product }: Data) => {
    return (
        <>
            <div className='bg-white rounded text-center drop-shadow-md p-2'>
                <div className='flex'>
                    <p
                        className='absolute left-2'
                        style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'upright',
                            fontFamily: 'Faster One',
                        }}
                    >
                        {product.type}
                    </p>
                    <img className='h-28 m-auto' src={product.image} alt='' />
                    <p className='absolute right-2' style={{ fontFamily: 'Fira Code' }}>
                        {percentageFormatter(product.percentage)}
                    </p>
                </div>
                <p
                    className='text-xl font-semibold mt-1 text-black'
                    style={{ fontFamily: 'Fira Code' }}
                >
                    {currencyFormatter(product.price)}
                </p>
                <div className='flex justify-between' style={{ fontFamily: 'Fira Code' }}>
                    <p>{titleProductFormatter(product.name)}</p>
                    <p>{product.milliliters}ml</p>
                </div>
            </div>
        </>
    )
}

export default CardProduct
