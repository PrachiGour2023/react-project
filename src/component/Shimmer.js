export const CarouselShimmer = () => {
  return (
    <>
      <div className="lds-ripple">
        <div></div>
        <div></div>
      </div>
      <div>Looking for great food near you ...</div>
    </>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer">
      {Array(15)
        .fill()
        .map((item, i) => {
          return (
            <>
              <div className="shimmer-card" key={i}></div>
            </>
          );
        })}
    </div>
  );
};

export default Shimmer;
