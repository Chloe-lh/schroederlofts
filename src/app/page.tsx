import Image from "next/image";
import "./globals.css";
import "@/styles/contact.css";
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
    <div className="w-full h-full bg-[#F6FEE7] ">
      <div className="rounded py-10">
        <div className=" relative overflow-hidden h-[700px] w-full ">
          <Image
            src={rainbow}
            alt="rainbow background image"
            priority
            className="object-cover"
          />
          {/* <h2 className="absolute bottom-8 left-8 z-5 text-5xl md:text-5xl lg:text-8xl font-bold text-[#C2E2BD]">
            Welcome to the Kootenays!
          </h2> */}
        </div>
      </div>
      <div className="grid md:grid-cols-2">
      <section className="max-w-4xl mx-auto px-4 py-1 text-xl">
        <h1 className="text-5xl font-bold mb-6">Welcome to the Kootenays!</h1>

        <p className="text-lg leading-relaxed mb-6">
          We offer two private suites: the <strong>Cedar Loft</strong> and
          <strong> Maple Loft</strong>. Rent one suite for a peaceful retreat,
          or reserve both to accommodate family and friends.
        </p>

        <div className="grid md:grid-cols-2 gap-4 mb-6">
          <div className="rounded-lg p-5">
            <h3 className="font-semibold mb-2">Spacious & Comfortable</h3>
            <p>
              Each 650 sq. ft. suite accommodates up to 4 guests and includes a
              full kitchen, living room, private bedroom, bathroom, and air
              conditioning.
            </p>
          </div>

          <div className=" rounded-lg p-5">
            <h3 className="font-semibold mb-2">Relax & Explore</h3>
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
      <div className="rounded-lg text-center bg-[#F58728] m-8 max-w-4xl mx-auto items-center">
        <h2 className="text-lg text-white p-2">Long term stays allowed!</h2>
      </div>
      <div className="p-4">
        <div className="p-12">
          <h1 className="text-5xl font-bold p-4">Cedar Loft</h1>
          <div className="max-w-6xl mx-auto">
            <Carousel images={cedarImages} />
          </div>
        </div>
        <div className="p-12">
          <h1 className="text-5xl font-bold p-4">Maple Loft</h1>
          <div className="max-w-6xl mx-auto">
            <Carousel images={cedarImages} />
          </div>
        </div>
        <div>
          <Amenities />
        </div>
      </div>
    </div>
  );
}
