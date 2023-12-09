import { useEffect, useState } from "react";
// api
import { getAllSlider } from "api/api";
// components
import { SpinnerImage } from "components";
// icons
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const SLIDE_DURATION = 3000;

export const Slider = () => {
  const [slider, setSlider] = useState([]);
  const [load, setLoad] = useState(true);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const fetchAllSlider = async () => {
      try {
        setLoad(true);
        const response = await getAllSlider();
        setSlider(response);
      } catch (error) {
        console.error("Error fetching slider:", error);
      } finally {
        setLoad(false);
      }
    };

    fetchAllSlider();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slider.length);
    }, SLIDE_DURATION);

    return () => {
      clearInterval(interval);
    };
  }, [slider.length]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slider.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slider.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <>
      {load ? (
        <div className="w-full h-80">
          <SpinnerImage />
        </div>
      ) : (
        slider.length > 0 && (
          <div className="relative mt-5">
            <div
              style={{
                backgroundImage: `url(${slider[currentIndex]?.image})`,
                width: "100%",
                height: "600px",
                backgroundSize: "cover",
                backgroundPosition: "center",
                borderRadius: "10px",
              }}
            ></div>
            {/* <div>
              <p>{slider[currentIndex]?.title}</p>
              <p>{slider[currentIndex]?.description}</p>
            </div> */}
            <div className="w-full px-5 absolute top-1/2 bottom-1/2 flex justify-between items-center">
              <BsChevronCompactLeft
                onClick={prevSlide}
                className="bg-white text-primary-600 w-8 h-8 p-1 rounded-full cursor-pointer"
              />
              <BsChevronCompactRight
                onClick={nextSlide}
                className="bg-white text-primary-600 w-8 h-8 p-1 rounded-full cursor-pointer"
              />
            </div>
          </div>
        )
      )}
    </>
  );
};
