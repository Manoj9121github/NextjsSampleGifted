"use client";
import React, { useEffect, useState } from "react";
import { useCart } from "../CartContext/CartContext"; 
import Image from "next/image";
import Review from "@/components/review";

const ProductPage = () => {
    const { addToCart } = useCart(); 

    const initialProducts = [
        { id: 1, name: "Personalized Cup", price: 15.99, category: "Home & Living", image: "gift3.jpg", reviews: [] },
        { id: 2, name: "Scented Candle Set", price: 25.5, category: "Home & Living", image: "gift4.jpg", reviews: [] },
        { id: 3, name: "Ceramic Planter", price: 18.75, category: "Home & Living", image: "gift5.jpg", reviews: [] },
        { id: 4, name: "Essential Oil Diffuser", price: 30.0, category: "Home & Living", image: "gift6.jpg", reviews: [] },
        { id: 5, name: "Bluetooth Speaker", price: 49.99, category: "Electronics", image: "gift7.jpg", reviews: [] },
        { id: 6, name: "Wireless Headphones", price: 59.99, category: "Electronics", image: "gift4.jpg", reviews: [] },
        { id: 7, name: "Yoga Mat", price: 35.0, category: "Health & Fitness", image: "gift5.jpg", reviews: [] },
        { id: 8, name: "Fitness Tracker", price: 45.0, category: "Health & Fitness", image: "gift3.jpg", reviews: [] },
        { id: 9, name: "Customized Jewelry", price: 75.0, category: "Fashion", image: "gift6.jpg", reviews: [] },
        { id: 10, name: "Leather Wallet", price: 40.0, category: "Fashion", image: "gift7.jpg", reviews: [] },
        { id: 11, name: "Travel Backpack", price: 55.0, category: "Fashion", image: "gift3.jpg", reviews: [] },
        { id: 12, name: "Wall Art Print", price: 22.0, category: "Home & Living", image: "gift4.jpg", reviews: [] }
    ];

    const [products, setProducts] = useState(() => {
        const savedProducts = localStorage.getItem("products");
        return savedProducts ? JSON.parse(savedProducts) : initialProducts;
    });

    useEffect(() => {
        localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    const addReview = (productId, review) => {
        setProducts((prevProducts) =>
            prevProducts.map((product) => {
                if (product.id === productId) {
                    return { ...product, reviews: [...product.reviews, review] };
                }
                return product;
            })
        );
    };

    return (
        <div className="bg-gray-100">
            <h1 className="text-4xl text-orange-600 text-center m-2">Products</h1>
            <div className="flex flex-wrap justify-center p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {products.map((product) => (
                        <div key={product.id} className="p-4 max-w-sm bg-white border border-gray-100 rounded-lg shadow-lg">
                            <Image 
                                className="rounded" 
                                src={`/${product.image}`} 
                                width={250} 
                                height={200} 
                                alt={`${product.name} image`} 
                            />
                            <h2 className="text-xl font-semibold mb-2 mt-2">{product.name}</h2>
                            <p className="text-gray-700 text-sm mt-2">Price: Rs.{product.price.toFixed(2)}</p>
                            <p className="text-gray-600 text-sm mt-1">Category: {product.category}</p>
                            <div className="text-right">
                                <button 
                                    className="mt-2 mr-2 bg-blue-500 text-white text-sm rounded px-2 py-2"
                                    onClick={() => addToCart(product)} 
                                >
                                    Add to Cart
                                </button>
                            </div>
                            <Review 
                                reviews={product.reviews} 
                                onAddReview={(review) => addReview(product.id, review)} 
                            />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
