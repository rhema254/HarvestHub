import {
  FacebookIcon,
  InstagramIcon,
  MailIcon,
  MapPinIcon,
  PhoneIcon,
  TwitterIcon,
} from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-[#DAF2DE] text-black px-4 py-12 md:py-16">
      <div className="container mx-auto grid gap-8 md:grid-cols-4">
        {/* Brand and Contact */}
        <div className="space-y-4">
          <Link
            href="/"
            className="inline-block  text-[#4F7A56] items-center text-xl font-bold"
          >
            <strong className="text-2xl">H</strong> HarvestHub
          </Link>

          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <PhoneIcon className="h-4 w-4" />
              <span>(704) 555-0127</span>
            </div>
            <div className="flex items-center gap-2">
              <MailIcon className="h-4 w-4" />
              <span>harvesthub@support.com</span>
            </div>
            <div className="flex items-start gap-2">
              <MapPinIcon className="h-4 w-4 mt-1" />
              <span>3891 Ranchview Dr. Richardson, Accra 62639</span>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="font-bold">Information</h3>
          <ul className="space-y-2">
            {["My Account", "Login", "My Cart", "My Wishlist", "Checkout"].map(
              (item) => (
                <li key={item}>
                <Link href="#" className="hover:text-[#6A9572]" >
                    {item}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Service Links */}
        <div className="space-y-4">
          <h3 className="font-bold">Service</h3>
          <ul className="space-y-2">
            {[
              "About Us",
              "Careers",
              "Delivery Information",
              "Privacy Policy",
              "Terms & Conditions",
            ].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-[#6A9572]" >
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="space-y-4">
          <h3 className="font-bold">Subscribe</h3>
          <p className="text-sm text-gray-700">
            Enter your email below to be the first to know about new collections
            and product launches.
          </p>
          <form className="flex gap-2">
            <input
              type="email"
              placeholder="Email address"
              className="flex-grow px-3 py-2 bg-transparent border border-gray-700 rounded-md focus:outline-none"
            />
            <button
              type="submit"
              className="px-3 py-2 border border-gray-700 rounded-md hover:bg-[#6A9572] focus:outline-none"
            >
              <MailIcon className="h-4 w-4" />
              <span className="sr-only">Subscribe to newsletter</span>
            </button>
          </form>
        </div>
      </div>

      <div className="container mx-auto mt-12 pt-8 border-t border-gray-800">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex gap-1">  
              <img  src="/visa.svg" alt='visa' className="h-8" />
              <img  src="/mastercard.svg" alt='mastercard' className="h-8" />
              <img  src="/amex.svg" alt='amex' className="h-8" />
              <img  src="/gpay.svg" alt='google pay' className="h-8" />
              <img  src="/paypal.svg" alt='paypal' className="h-8" />
          </div>
          <p className="text-sm text-gray-700">
            ©2024 HarvestHub All Rights are reserved
          </p>
          <div className="flex gap-4">
            {[
              { icon: FacebookIcon, label: "Facebook" },
              { icon: InstagramIcon, label: "Instagram" },
              { icon: TwitterIcon, label: "Twitter" },
            ].map(({ icon: Icon, label }) => (
              <Link key={label} href="#" className="hover:text-[#6A9572]">
                <Icon className="h-5 w-5" />
                <span className="sr-only">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
