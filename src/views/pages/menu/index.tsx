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
import { useEffect, useState } from 'react'

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

interface Product {
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

    const products: Product = [
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
            percentage: 4,
            starts: 3,
            type: 'Lager',
        },
    ]

    const [selectedCategoryId, setSelectedCategoryId] = useState(0)
    const [selectedSubCategoryId, setSelectedSubCategoryId] = useState(0)
    const [selectedSubCategories, setSelectedSubCategories] = useState<SubCategory[]>([])

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
    return (
        <>
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
            <div className='mt-3'>
                <div className='bg-white '></div>
            </div>
        </>
    )
}

export default Menu
