import Image from "next/image"
import Link from "next/link"

const categories = [
  { name: "Men Wears", image: "/placeholder.svg" },
  { name: "Women Wears", image: "/placeholder.svg" },
  { name: "Headphones", image: "/placeholder.svg" },
  { name: "Smartphones", image: "/placeholder.svg" },
  { name: "Jewelry", image: "/placeholder.svg" },
  { name: "Sneakers", image: "/placeholder.svg" },
]

export function Categories() {
  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold mb-8 text-center">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={`/category/${category.name.toLowerCase().replace(" ", "-")}`}
              className="group relative aspect-square overflow-hidden rounded-lg bg-gray-100"
            >
              <Image
                src={category.image}
                alt={category.name}
                fill
                className="object-cover transition-transform group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <h3 className="text-white font-medium">{category.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

