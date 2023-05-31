import InfiniteCarousel from "react-leaf-carousel";
import { CAROUSEL_CDN } from "../../constant";
import { CarouselShimmer } from "./Shimmer";

function Carousel({ carouselImages }) {
  return carouselImages.length === 0 ? (
    <CarouselShimmer />
  ) : (
    <InfiniteCarousel
      breakpoints={[
        {
          breakpoint: 200,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
          },
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          },
        },
      ]}
      lazyLoad={false}
      dots={false}
      showSides={true}
      sidesOpacity={0}
      sideSize={0.1}
      slidesToScroll={1}
      slidesToShow={4}
      scrollOnDevice={true}
    >
      {carouselImages &&
        carouselImages.map((item) => {
          return (
            <div key={item.data.bannerId} className="carousel-img">
              <img src={CAROUSEL_CDN + item.data.creativeId} alt="carousel" />
            </div>
          );
        })}
    </InfiniteCarousel>
  );
}

export default Carousel;
