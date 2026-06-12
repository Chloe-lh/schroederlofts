'use client'
import useEmblaCarousel from "embla-carousel-react";

type CarouselProps = {
  images: string[]
}

const Carousel = ({ images }: CarouselProps) => {
  const [emblaRef] = useEmblaCarousel({ loop: true })
  return (
    <div className="embla" ref={emblaRef}>
      <div className="embla__container h-[450px]">
        {images.map((src, i) => (
          <div className="embla__slide" key={i}>
            <img
              src={src}
              alt={`Slide ${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default Carousel

