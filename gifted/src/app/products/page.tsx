"use client"

import { Button } from '@/components/ui/button'
import React, { useEffect, useState } from 'react'
interface Product {
    id: number;
    productName: string;
    price: number;
    image: string;
    category: string;
}

const ProductPage: React.FC = () => {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch('http://localhost:3002/products');
            const data = await response.json();
            setProducts(data);
            console.log(data)
        };

        fetchProducts();
    }, []);

    
    
  return (
    <div>
        <div>
            <h1 className='text-indigo-950 text-3xl font-bold text-center'>All Products</h1>
            <div>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4'>
            {products.map(product => (
                    <div key={product.id} className="border rounded p-4">
                        <img src={product.image} alt={product.productName} className="w-full h-32 object-cover" />
                        <h2 className="text-xl mt-2">{product.productName}</h2>
                        <p className="text-lg">${product.price.toFixed(2)}</p>
                        <p className="text-sm text-gray-500">{product.category}</p>
                    </div>
                ))}
    
</div>

            </div>
        </div>
      
    </div>
  )
}

export default ProductPage
