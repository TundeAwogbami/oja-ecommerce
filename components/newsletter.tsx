import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export function Newsletter() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">Newsletter</h2>
          <p className="text-gray-600 mb-6">
            Subscribe To Our Newsletter Get Bonus For The Next Purchase
          </p>
          <form className="flex gap-2">
            <Input
              type="email"
              placeholder="Your Email Address"
              className="flex-1"
            />
            <Button className="bg-green-700 hover:bg-green-800">
              Subscribe
            </Button>
          </form>
        </div>
      </div>
    </section>
  )
}

