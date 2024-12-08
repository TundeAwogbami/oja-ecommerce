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
    <section className="py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8 md:text-3xl lg:text-4xl">
          Popular Categories
        </h2>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
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
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-sm font-medium text-white md:text-base">
                    {category.name}
                  </h3>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

