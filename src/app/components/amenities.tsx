export default function Amenities() {
  return (
    <section className="max-w-7xl mx-auto px-6 py-12">
      <h1 className="text-5xl text-center font-bold mb-12">
        Amenities
      </h1>

      <div className=" text-xl grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* GENERAL */}
        <section className="bg-[#79A9D1] text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            GENERAL
          </h2>

          <ul className="space-y-2">
            <li>❄️ Air conditioning</li>
            <li>📺 TV</li>
            <li>🚗 Free parking</li>
            <li>🎲 Board games</li>
            <li>📶 WiFi</li>
          </ul>
        </section>

        {/* KITCHEN */}
        <section className="bg-[#79A9D1] text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            KITCHEN
          </h2>

          <ul className="space-y-2">
            <li>☕ Coffee machine</li>
            <li>🫖 Hot water kettle</li>
            <li>🧊 Ice trays</li>
            <li>🍽️ Pots and pans</li>
            <li>🥣 Bowls, cups, plates, utensils</li>
            <li>🍷 Wine glasses</li>
            <li>📡 Microwave</li>
            <li>🔥 Oven</li>
            <li>🍳 Stove top</li>
          </ul>
        </section>

        {/* LAUNDRY */}
        <section className="bg-[#79A9D1] text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            LAUNDRY
          </h2>

          <ul className="space-y-2">
            <li>🧺 Washer/Dryer Unit</li>
            <li>🧴 Laundry detergent</li>
            <li>🧻 Dryer sheets</li>
          </ul>
        </section>

        {/* BEDROOM */}
        <section className="bg-[#79A9D1] text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            BEDROOM
          </h2>

          <ul className="space-y-2">
            <li>🛏️ Bedding</li>
            <li>👕 Dresser & Closet</li>
            <li>🛌 Extra blankets & pillows</li>
          </ul>
        </section>

        {/* OUTDOOR */}
        <section className="bg-[#79A9D1] text-white rounded-lg p-6 shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">
            OUTDOOR
          </h2>

          <ul className="space-y-2">
            <li>🔥 BBQ Grill</li>
            <li>🏖️ Public Beach Access</li>
            <li>☂️ Beach Essentials</li>
            <li>🛁 Hot Tub</li>
            <li>🚣 Kayaks (x2) with Life Jackets</li>
            <li>🍽️ Outdoor Dining Area</li>
          </ul>
        </section>
      </div>
    </section>
  );
}