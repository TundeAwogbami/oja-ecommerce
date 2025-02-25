"use client"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin } from "lucide-react"
import Image from "next/image"

interface Product {
  _id: string
  name: string
  price: number
  image: string
  seller: {
    name: string
    address: string
  }
}

export function ProductSearch() {
  const [query, setQuery] = useState("")
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(false)

  const searchProducts = async () => {
    setLoading(true)
    try {
      // In a real app, you'd get the user's location. For now, we'll use a fixed location.
      const lat = 6.5244
      const lng = 3.3792
      const response = await fetch(`/api/products/search?lat=${lat}&lng=${lng}&query=${query}`)
      const data = await response.json()
      setProducts(data)
    } catch (error) {
      console.error("Error searching products:", error)
    }
    setLoading(false)
  }

  return (
    <div className="space-y-4">
      <div className="flex space-x-2">
        <Input
          type="text"
          placeholder="Search for products..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button onClick={searchProducts} disabled={loading}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Card key={product._id}>
            <CardHeader>
              <CardTitle>{product.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="aspect-square relative mb-2">
                <Image
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md"
                />
              </div>
              <p className="font-bold">₦{product.price.toFixed(2)}</p>
              <div className="flex items-center mt-2 text-sm text-gray-500">
                <MapPin className="w-4 h-4 mr-1" />
                <span>
                  {product.seller.name} - {product.seller.address}
                </span>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}

