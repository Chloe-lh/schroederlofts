import Script from "next/script";
import Link from "next/link";
import Image from "next/image";

export default function Airbnb() {
  return (
    <>
      <Script
        src="https://www.airbnb.ca/embeddable/airbnb_jssdk"
        strategy="afterInteractive"
      />

      <section className="airbnb-section mx-auto max-w-3xl py-6">
        <h2 className="text-5xl font-semibold">We're also on Airbnb</h2>

        <p className="mt-4 text-xl">
          Check out verified reviews from our previous guests.
        </p>

        <p className="mt-2 test-lg text-stone-600">
          Booking directly through us saves everyone money. There are no Airbnb
          service fees or overhead, and we encourage local, direct bookings whenever
          possible.
        </p>


      <div className="mx-auto mt-10 w-fit p-6 rounded-4xl shadow bg-white">
        <Image
          src="/images/airbnb-listing.png"
          alt="Our Airbnb listing"
          width={500}
          height={200}
          className="airbnb-image"
        />
        </div>

      
      <div className="mt-10 text-center">
        <Link
          href="https://www.airbnb.ca/rooms/1280568463197170078"
          target="_blank"
          className="inline-block rounded-lg bg-[#FF5A5F] px-8 py-3 text-white transition hover:opacity-90"
        >
          View Our Airbnb Listing
        </Link>
      </div>
      </section>
    </>
  );
}
