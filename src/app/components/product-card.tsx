import Image from "next/image"

interface ProductCardProps {
  image: string
  name: string
  price: string
  brand: string
  location: string
}

export function ProductCard({ image, name, price, brand, location }: ProductCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden shadow-sm">
      <Image src={image} alt={name} width={300} height={200} className="w-full h-48 object-contain" />
      <div className="p-4">
        <h3 className="font-bold">{name}</h3>
        <p className="text-lg font-semibold text-green-600">{price}</p>
        <p className="text-sm text-gray-500">{brand}</p>
        <p className="text-sm text-gray-500">{location}</p>
        <button className="mt-2 w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 transition-colors">
          Contact seller
        </button>
      </div>
    </div>
  )
}

