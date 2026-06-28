import { CheckIcon } from "@heroicons/react/24/outline";

export default function Amenities() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl text-center font-bold mb-12">
        Amenities
      </h1>

      <div className="text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* GENERAL */}
        <section className="bg-[#79A9D1] text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            GENERAL
          </h2>

          <ul className="space-y-2">
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Air conditioning</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> TV</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Free parking</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Board games</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> WiFi</li>
          </ul>
        </section>

        {/* KITCHEN */}
        <section className="bg-[#79A9D1] text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            KITCHEN
          </h2>

          <ul className="space-y-2">
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Coffee machine</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Hot water kettle</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Ice trays</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Pots and pans</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Bowls, cups, plates, utensils</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Wine glasses</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Microwave</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Oven</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Stove top</li>
          </ul>
        </section>

        {/* LAUNDRY */}
        <section className="bg-[#79A9D1] text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            LAUNDRY
          </h2>

          <ul className="space-y-2">
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Washer/Dryer Unit</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Laundry detergent</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Dryer sheets</li>
          </ul>
        </section>

        {/* BEDROOM */}
        <section className="bg-[#79A9D1] text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            BEDROOM
          </h2>

          <ul className="space-y-2">
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Bedding</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Dresser & Closet</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Extra blankets & pillows</li>
          </ul>
        </section>

        {/* OUTDOOR */}
        <section className="bg-[#79A9D1] text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            OUTDOOR
          </h2>

          <ul className="space-y-2">
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> BBQ Grill</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Public Beach Access</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Beach Essentials</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Hot Tub</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Kayaks (x2) with Life Jackets</li>
            <li className="flex items-center gap-2"><CheckIcon className="w-5 h-5" /> Outdoor Dining Area</li>
          </ul>
        </section>
      </div>
    </section>
  );
}