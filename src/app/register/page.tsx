import Image from "next/image";

import { Form } from "./form";
export default function Component() {
  return (
    <div className="min-h-screen w-full flex font-[family-name:var(--font-geist-sans)]">
      {/* Left Section - Image */}
      <div className="hidden md:block w-1/2 relative">
        <Image
          src="/tractor.jpg"
          alt="Fashion model in business casual attire"
          fill
          className="object-contain"
          priority
        />
        <div className="absolute top-6 left-6">
          <div className="text-2xl font-bold text-[#4F7A56]">HarvestHub</div>
        </div>
      </div>

      {/* Right Section - Registration Form */}
      <div className="w-full md:w-1/2 flex flex-col p-8 md:p-16">
        <div className="md:hidden mb-8">
          <div className="text-2xl font-bold text-[#4F7A56]">HarvestHub</div>
        </div>

        <div className="flex-1 flex flex-col justify-center max-w-sm mx-auto w-full">
          <div className="mb-8">
            <h1 className="text-2xl font-bold mb-2">Create New Account</h1>
            <p className="text-gray-600">Please enter details</p>
          </div>
          <Form />
        </div>
      </div>
    </div>
  );
}
