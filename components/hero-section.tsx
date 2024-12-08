import { Button } from "@/components/ui/button"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-gray-100 py-12 sm:py-16 lg:py-20">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-2 md:items-center">
          <div className="flex flex-col justify-center space-y-4 text-center md:text-left">
            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
              Introducing The New Men's Casual Button Down Denim Jacket Classic Jean Coat
            </h1>
            <p className="text-2xl font-semibold text-red-600 md:text-3xl">
              50% off Discount
            </p>
            <div>
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Shop Now
              </Button>
            </div>
          </div>
          <div className="relative aspect-square md:aspect-[4/3]">
            <Image
              src="/placeholder.svg"
              alt="Denim Jacket"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}

