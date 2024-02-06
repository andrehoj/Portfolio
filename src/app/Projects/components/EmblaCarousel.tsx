import styles from "./embla.module.css";
import { EmblaOptionsType } from "embla-carousel";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";
import { ImageType } from "@/declaration";
import { useCallback } from "react";

const OPTIONS: EmblaOptionsType = {
  align: "center",
  dragFree: false,
  containScroll: "trimSnaps",
};

type Props<T> = {
  images: T[];
  options: EmblaOptionsType;
};

export default function EmblaCarousel({ images, options }: Props<ImageType>) {
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={styles.embla}>
      <div className={styles.embla__viewport} ref={emblaRef}>
        <div className={styles.embla__container}>
          {images.map((img: ImageType) => (
            <Image
              placeholder="blur"
              blurDataURL={img.src}
              className="border border-theme_cyan rounded-md mr-10"
              alt=""
              src={img.src}
              height={200}
              width={img.width}
            />
          ))}
        </div>
      </div>
      <div className="mt-10 flex justify-center items-center gap-3">
        <button className="embla__prev custom-btn-contact" onClick={scrollPrev}>
          Prev
        </button>
        <button className="embla__next custom-btn-contact" onClick={scrollNext}>
          Next
        </button>
      </div>
    </div>
  );
}

// {images.map(
//   (
//     image: { src: string; height: number; width: number },
//     i: number
//   ) => (
//     <div className={styles.embla__slide} key={i}>
//       <Image
//         width={image.width}
//         className={styles.embla__slide__img}
//         height={100}
//         src={image.src}
//         alt="strength log project dashboard"
//       />
//     </div>
//   )
// )}
