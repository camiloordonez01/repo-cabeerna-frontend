import { useEffect, useState } from 'react'
import {
    IconDefinition,
    faBeer,
    faCocktail,
    faGlassWhiskey,
    faWineGlass,
    faBlender,
    faHome,
    faPlaneArrival,
    faWheatAlt,
    faVenus,
    faCheck,
} from '@fortawesome/free-solid-svg-icons'

import ItemCategory from './itemCategory'
import CardProduct from './cardProduct'

interface IReferenceIcon {
    [key: string]: IconDefinition
}

interface Category {
    id: number
    name: string
    icon: string
}

interface SubCategory {
    id: number
    categoryId: number
    name: string
    icon: string
}

export interface Product {
    id: number
    subCategoryId: number
    name: string
    price: number
    image: string
    type: string
    country: string
    percentage: number
    flavor: string
    ingredients: string
    starts: number
    milliliters: number
}

const refIcon: IReferenceIcon = {
    beer: faBeer,
    cocktail: faCocktail,
    glassWhiskey: faGlassWhiskey,
    wineGlass: faWineGlass,
    blender: faBlender,
    home: faHome,
    planeArrival: faPlaneArrival,
    wheat: faWheatAlt,
    venus: faVenus,
    check: faCheck,
}

const Menu = () => {
    const categories: Category[] = [
        {
            id: 1,
            name: 'Cervezas',
            icon: 'beer',
        },
        {
            id: 2,
            name: 'Cócteles',
            icon: 'cocktail',
        },
        {
            id: 3,
            name: 'Licores',
            icon: 'glassWhiskey',
        },
        {
            id: 4,
            name: 'Vinos',
            icon: 'wineGlass',
        },
        {
            id: 5,
            name: 'Otros',
            icon: 'blender',
        },
    ]

    const subCategories: SubCategory[] = [
        {
            id: 1,
            categoryId: 1,
            name: 'Nacionales',
            icon: 'home',
        },
        {
            id: 2,
            categoryId: 1,
            name: 'Importadas',
            icon: 'planeArrival',
        },
        {
            id: 3,
            categoryId: 1,
            name: 'Artesanales',
            icon: 'wheat',
        },
        {
            id: 4,
            categoryId: 1,
            name: 'Sin alcohol',
            icon: 'venus',
        },
        {
            id: 3,
            categoryId: 2,
            name: 'Con licor',
            icon: 'check',
        },
        {
            id: 4,
            categoryId: 2,
            name: 'Sin licor',
            icon: 'venus',
        },
    ]

    const products: Product[] = [
        {
            id: 1,
            subCategoryId: 1,
            name: 'Poker',
            price: 6000,
            image: 'https://www.bavaria.co/sites/g/files/phfypu1316/f/BOTELLA-550PX.png',
            country: 'Colombia',
            flavor: 'Amargo con un toque de sabor dulce.',
            ingredients: 'Malta de dos hileras y dos variedades de lúpulo.',
            milliliters: 355,
            percentage: 0.04,
            starts: 3,
            type: 'Lager',
        },
        {
            id: 2,
            subCategoryId: 1,
            name: 'Aguila',
            price: 6000,
            image: 'https://www.bavaria.co/sites/g/files/phfypu1316/f/201903/AGUILA330_1.png',
            country: 'Colombia',
            flavor: 'Una cerveza dorada equilibrada y sabrosa con un cuerpo suave y un inconfundible color dorado.',
            ingredients: 'Malta de dos hileras, jarabe de maíz, arroz, dos lúpulos y azúcar',
            milliliters: 355,
            percentage: 0.04,
            starts: 4,
            type: 'Lager',
        },
        {
            id: 3,
            subCategoryId: 1,
            name: 'Aguila Light',
            price: 6000,
            image: 'https://www.bavaria.co/sites/g/files/phfypu1316/f/201903/AGUILALIGHT330.png',
            country: 'Colombia',
            flavor: 'Sabor suave con poco amargo.',
            ingredients: 'Malta de dos hileras, jarabe de maíz y lúpulo.',
            milliliters: 355,
            percentage: 0.034,
            starts: 5,
            type: 'Lager',
        },
    ]

    const [selectedCategoryId, setSelectedCategoryId] = useState(0)
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(0)
    const [selectedSubCategories, setSelectedSubCategories] = useState<SubCategory[]>([])
    const [selectedProducts, setSelectedProducts] = useState<Product[]>([])

    const handleSelectCategory = (categoryId: number) => {
        setSelectedCategoryId(categoryId)
    }

    const handleSelectSubCategory = (subCategoryId: number) => {
        setSelectedSubCategoryId(subCategoryId)
    }

    useEffect(() => {
        setSelectedCategoryId(categories[0].id)
    }, [])

    useEffect(() => {
        setSelectedSubCategoryId(0)
        setSelectedSubCategories(
            subCategories.filter((subCategory) => subCategory.categoryId === selectedCategoryId),
        )
    }, [selectedCategoryId])

    useEffect(() => {
        setSelectedProducts(
            products.filter((product) => product.subCategoryId === selectedSubCategoryId),
        )
    }, [selectedSubCategoryId])

    useEffect(() => {
        console.log(selectedProducts)
    }, [selectedProducts])
    return (
        <div>
            <div>
                <h2 className='text-lg font-semibold mb-2'>Categorías</h2>
                <div className='overflow-scroll' style={{ display: '-webkit-box' }}>
                    {categories.map((category, index) => (
                        <ItemCategory
                            id={category.id}
                            key={`itemCategorie${index + 1}`}
                            isActive={selectedCategoryId === category.id}
                            icon={refIcon[category.icon]}
                            name={category.name}
                            onSelected={handleSelectCategory}
                        />
                    ))}
                </div>
            </div>
            <div className='mt-3'>
                <h2 className='text-lg font-semibold mb-2'>Sub categorías</h2>
                <div className='overflow-scroll' style={{ display: '-webkit-box' }}>
                    {selectedSubCategories.map((subCategory, index) => (
                        <ItemCategory
                            id={subCategory.id}
                            key={`itemSubCategorie${index + 1}`}
                            isActive={selectedSubCategoryId === subCategory.id}
                            icon={refIcon[subCategory.icon]}
                            name={subCategory.name}
                            onSelected={handleSelectSubCategory}
                        />
                    ))}
                </div>
            </div>
            <div
                className='mt-4 overflow-scroll'
                style={{ width: '100%', height: 'calc(100vh - 495px)' }}
            >
                <div className='grid grid-cols-2 gap-4'>
                    {selectedProducts.map((product, index) => (
                        <CardProduct key={`itemProduct${index + 1}`} product={product} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Menu
