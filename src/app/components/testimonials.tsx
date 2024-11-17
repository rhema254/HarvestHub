import { Star } from 'lucide-react'

export default function Testimonials() {
  const testimonials = [
    {
      name: "Leslie Alexander",
      role: "Model",
      image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
      rating: 5,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
    },
    {
      name: "Jacob Jones",
      role: "Co-Founder",
      image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
      rating: 5,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
    },
    {
      name: "Jenny Wilson",
      role: "Fashion Designer",
      image: "https://th.bing.com/th/id/OIP.IGNf7GuQaCqz_RPq5wCkPgHaLH?rs=1&pid=ImgDetMain",
      rating: 5,
      text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum."
    }
  ]

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <h2 className="text-3xl font-medium mb-12">What our Customer say&apos;s</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-[#4F7A56] text-[#4F7A56]" />
                ))}
              </div>
              <p className="text-gray-600 mb-6">{testimonial.text}</p>
              <div className="flex items-center gap-3">
                <img
                  src={testimonial.image}
                  alt=""
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium">{testimonial.name}</h3>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}