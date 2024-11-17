import { Package, DollarSign, Headphones, CreditCard } from 'lucide-react'

export default function Features() {
  const features = [
    {
      icon: Package,
      title: "Free Shipping",
      description: "Free shipping for order above $150"
    },
    {
      icon: DollarSign,
      title: "Money Guarantee",
      description: "Within 30 days for an exchange"
    },
    {
      icon: Headphones,
      title: "Online Support",
      description: "24 hours a day, 7 days a week"
    },
    {
      icon: CreditCard,
      title: "Flexible Payment",
      description: "Pay with multiple credit cards"
    }
  ]

  return (
    <section className="py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full bg-gray-100">
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="font-medium mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}