import InfiniteCarousel from "react-leaf-carousel";
import { SEARCH_IMG_CDN } from "../../constant";

const searchImg = [
  { id: 1, imgId: "b4ff78ecc5b8b66f732dd06228916d65" },
  { id: 2, imgId: "5dd234f7decdac4b4f71a2ff1408e10f" },
  { id: 3, imgId: "3df4fca020027e89b89c733cdffc4966" },
  { id: 4, imgId: "87664acb0f9dd95d10a549bb8190ab27" },
  { id: 5, imgId: "e76b511935016406e6ebc11dd7593387" },
  { id: 6, imgId: "89f3fec702aef5acbb51a6cbc284b3f7" },
  { id: 7, imgId: "8322f6d6df488dc1f5a6674cfe863f0f" },
  { id: 8, imgId: "31f03222ea978aef3b10d386729eb076" },
  { id: 9, imgId: "c170aa4262ec0d191642f42a3a03b4ce" },
  { id: 10, imgId: "0b5ffa32a04d99c1f212d2aacefd5f6f" },
  { id: 11, imgId: "36184033ebef97d27a85fa3af5c1d403" },
  { id: 12, imgId: "d0884e09ef431ee610e54a0bb2dfecd5" },
];

function SearchCarousel() {
  return (
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
      slidesToShow={11}
      scrollOnDevice={true}
    >
      {searchImg &&
        searchImg.map((item) => {
          return (
            <div key={item.id} className="category">
              <img src={SEARCH_IMG_CDN + item.imgId} alt="carousel" />
            </div>
          );
        })}
    </InfiniteCarousel>
  );
}

export default SearchCarousel;
