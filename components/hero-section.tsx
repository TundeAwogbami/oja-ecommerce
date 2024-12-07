import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="bg-gray-100">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tight">
              Introducing The New Men's Casual Button Down Denim Jacket Classic Jean Coat
            </h1>
            <p className="text-2xl font-semibold text-red-600">50% off Discount</p>
            <Button size="lg" className="bg-green-700 hover:bg-green-800">
              Shop Now
            </Button>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/placeholder.svg"
              alt="Denim Jacket"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

