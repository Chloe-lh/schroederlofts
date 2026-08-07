import Script from "next/script";

export default function Airbnb() {
  return (
    <>
      <Script
        src="https://www.airbnb.ca/embeddable/airbnb_jssdk"
        strategy="afterInteractive"
      />

      <section className="mx-auto max-w-3xl py-12 text-center bg-white">
        <h2 className="text-3xl font-semibold">We're also on Airbnb</h2>

        <p className="mt-4 text-lg">
          Check out verified reviews from our previous guests.
        </p>

        <p className="mt-2 text-stone-600">
          Booking directly through us saves everyone money. There are no Airbnb
          service fees or overhead, and we encourage local, direct bookings whenever
          possible.
        </p>

        <div
          className="airbnb-embed-frame mt-8 mx-auto"
          data-id="1280568463197170078"
          data-view="home"
          data-hide-price="true"
          style={{
            width: "450px",
            height: "300px",
          }}
        >
          <a href="https://www.airbnb.ca/rooms/1280568463197170078">
            View on Airbnb
          </a>
        </div>
      </section>
    </>
  );
}