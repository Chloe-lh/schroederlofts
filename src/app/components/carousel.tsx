"use client";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { ArrowRightIcon } from "@heroicons/react/20/solid";
type CarouselProps = {
  images: string[];
};

const Carousel = ({ images }: CarouselProps) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const goToPrev = () => emblaApi?.scrollPrev();
  const goToNext = () => emblaApi?.scrollNext();

  return (
    <div className="relative">
      <div className="embla overflow-hidden" ref={emblaRef}>
        <div className="embla__container flex">
          {images.map((src, i) => (
            <div
              key={i}
              className="embla__slide relative h-[600px] flex-[0_0_100%] "
            >
              <img
                src={src}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/70 p-3"
        >
          <ArrowLeftIcon className="w-6 h-6" />
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/70 p-3"
        >
          <ArrowRightIcon className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
};

export default Carousel;
