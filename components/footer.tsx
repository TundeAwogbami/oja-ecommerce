import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link href="/" className="text-2xl font-bold text-green-700">
              OJA
            </Link>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2">
              <li><Link href="/men">Men Wears</Link></li>
              <li><Link href="/women">Women Wears</Link></li>
              <li><Link href="/electronics">Electronics</Link></li>
              <li><Link href="/smartphones">Smartphones</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Help</h3>
            <ul className="space-y-2">
              <li><Link href="/shipping">Shipping</Link></li>
              <li><Link href="/returns">Returns</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-4">Payment Method</h3>
            <div className="flex gap-2">
              <Image src="/placeholder.svg" alt="Visa" width={40} height={25} />
              <Image src="/placeholder.svg" alt="Mastercard" width={40} height={25} />
            </div>
          </div>
        </div>
        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-600">© Copyright {new Date().getFullYear()}</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Facebook className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Twitter className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              <Instagram className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

