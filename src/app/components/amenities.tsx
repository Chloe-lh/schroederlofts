import { CheckIcon } from "@heroicons/react/24/outline";
import "../styles/amenities.css";

export default function Amenities() {
  return (
    <section className="amenities-section">
      <h1 className="amenities-title">Amenities</h1>

      <div className="amenities-grid">

        <section className="amenity-card">
          <h2 className="amenity-heading">GENERAL</h2>
          <ul className="amenity-list">
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Air conditioning</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> TV</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Free parking</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Board games</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> WiFi</li>
          </ul>
        </section>

        <section className="amenity-card">
          <h2 className="amenity-heading">KITCHEN</h2>
          <ul className="amenity-list">
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Coffee machine</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Hot water kettle</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Ice trays</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Pots and pans</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Bowls, cups, plates, utensils</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Wine glasses</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Microwave</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Oven</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Stove top</li>
          </ul>
        </section>

        <section className="amenity-card">
          <h2 className="amenity-heading">LAUNDRY</h2>
          <ul className="amenity-list">
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Washer/Dryer Unit</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Laundry detergent</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Dryer sheets</li>
          </ul>
        </section>

        <section className="amenity-card">
          <h2 className="amenity-heading">BEDROOM</h2>
          <ul className="amenity-list">
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Bedding</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Dresser & Closet</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Extra blankets & pillows</li>
          </ul>
        </section>

        <section className="amenity-card">
          <h2 className="amenity-heading">OUTDOOR</h2>
          <ul className="amenity-list">
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> BBQ Grill</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Public Beach Access</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Beach Essentials</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Hot Tub</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Kayaks (x2) with Life Jackets</li>
            <li className="amenity-item"><CheckIcon className="amenity-icon" /> Outdoor Dining Area</li>
          </ul>
        </section>

      </div>
    </section>
  );
}