'use client'

import { ProductCard } from "@/components/product-card"

// This would typically come from an API or database
const products = [
  { id: '1', name: 'Classic T-Shirt', price: 19.99, image: 'https://via.placeholder.com/300x300?text=T-Shirt' },
  { id: '2', name: 'Denim Jeans', price: 49.99, image: 'https://via.placeholder.com/300x300?text=Jeans' },
  { id: '3', name: 'Sneakers', price: 79.99, image: 'https://via.placeholder.com/300x300?text=Sneakers' },
  { id: '4', name: 'Hoodie', price: 39.99, image: 'https://via.placeholder.com/300x300?text=Hoodie' },
  { id: '5', name: 'Backpack', price: 59.99, image: 'https://via.placeholder.com/300x300?text=Backpack' },
  { id: '6', name: 'Watch', price: 129.99, image: 'https://via.placeholder.com/300x300?text=Watch' },
]

export default function ShopPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-3xl font-bold">Shop Now</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </div>
  )
}

