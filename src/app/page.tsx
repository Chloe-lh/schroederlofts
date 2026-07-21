import Image from "next/image";
import "./globals.css";
import "./styles/contact.css";
import "./styles/home.css";
import rainbow from "./assets/rainbow.jpg";
import Carousel from "./components/carousel";
import Amenities from "./components/amenities";
import Contact from "./components/contact";
//public\images\cedar\bathroom.jpeg
const cedarImages = [
  "/images/cedar/bathroom.jpeg",
  "/images/cedar/kitchen.jpeg",
  "/images/cedar/living-room.jpeg",
];
export default function Home() {
  return (
    <div className="home-page">
      <div className="hero">
          <Image
            src={rainbow}
            alt="rainbow background image"
            fill
            priority
            className="object-cover"
          />
      </div>

      <div className="section-wrap">
        <div className="intro-grid">
          <section className="intro-copy text-xl">
            <h1 className="page-title">Welcome to the Kootenays!</h1>

            <p className="leading-relaxed">
              We offer two private suites: the <strong>Cedar Loft</strong> and
              <strong> Maple Loft</strong>. Rent one suite for a peaceful retreat,
              or reserve both to accommodate family and friends.
            </p>

            <div className="feature-grid">
              <div className="feature-card">
                <h3 className="font-semibold mb-2 text-2xl">Spacious & Comfortable</h3>
                <p>
                  Each 650 sq. ft. suite accommodates up to 4 guests and includes a
                  full kitchen, living room, private bedroom, bathroom, and air
                  conditioning.
                </p>
              </div>

              <div className="feature-card">
                <h3 className="font-semibold mb-2 text-2xl">Relax & Explore</h3>
                <p>
                  Enjoy a hot tub, fire pit, BBQ, kayaks, beach gear, and a peaceful
                  backyard bordering a forested area.
                </p>
              </div>
            </div>

            <p className="leading-relaxed">
              Located in the tranquil Schroeder Creek community on beautiful
              Kootenay Lake. Close to the amenities of Kaslo, but far enough to 'get
              away from it all!’ Planning a special occasion? Contact us and let us
              help create unforgettable Kootenay Lake memories.
            </p>
          </section>

          <section>
            <Contact />
          </section>
        </div>
      </div>

      <div className="notice border-2 ">
        <p className="text-lg">Long term stays allowed!</p>
        <p className="">Enjoy discounted weekly and monthly rates for extended stays. Contact us for more details</p>
      </div>

      <div className="gallery-section">
        <section className="gallery-block">
          <h2 className="gallery-title">Cedar Loft</h2>
          <div className="max-w-6xl mx-auto">
            <Carousel images={cedarImages} />
          </div>
        </section>

        <section className="gallery-block">
          <h2 className="gallery-title">Maple Loft</h2>
          <div className="max-w-6xl mx-auto">
            <Carousel images={cedarImages} />
          </div>
        </section>

        <Amenities />
      </div>
    </div>
  );
}
