'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { useCart } from "@/contexts/CartContext"
import { toast } from "@/components/ui/use-toast"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
  const { addItem } = useCart()

  const addToCart = () => {
    addItem({ id, name, price, image, quantity: 1 })
    toast({
      title: "Added to cart",
      description: `${name} has been added to your cart.`,
    })
  }

  return (
    <div className="group relative overflow-hidden rounded-lg border border-gray-200 bg-white shadow-md transition-all hover:shadow-lg">
      <Link href={`/product/${id}`} className="block aspect-square overflow-hidden">
        <Image
          src={image}
          alt={name}
          width={300}
          height={300}
          className="h-full w-full object-cover transition-transform group-hover:scale-105"
        />
      </Link>
      <div className="p-4">
        <h3 className="text-lg font-semibold">
          <Link href={`/product/${id}`}>{name}</Link>
        </h3>
        <p className="mt-1 text-sm text-gray-500">${price.toFixed(2)}</p>
        <Button className="mt-4 w-full" onClick={addToCart}>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

