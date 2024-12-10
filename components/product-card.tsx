'use client'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from "@/components/ui/button"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string
}

export function ProductCard({ id, name, price, image }: ProductCardProps) {
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
        <p className="mt-1 text-sm text-gray-500">N{price.toFixed(2)}</p>
        <Button className="mt-4 w-full" onClick={() => console.log(`Add ${name} to cart`)}>
          Add to Cart
        </Button>
      </div>
    </div>
  )
}

