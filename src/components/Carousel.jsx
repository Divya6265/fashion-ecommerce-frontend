
import { Carousel, Typography, Button, IconButton } from "@material-tailwind/react";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

export default function CarouselCustomNavigation() {
  return (
    <Carousel loop={true}
      className="h-[80vh]"
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-8 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-6 bg-white" : "w-3 bg-white"
                }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
      prevArrow={({ handlePrev }) => (
        <IconButton
          variant="text"
          color="#000"
          size="lg"
          onClick={handlePrev}
          className="!absolute bottom-0 left-8 -translate-y-2/4 bg-black/20 rounded-full"
        >
          <IoIosArrowBack className="w-8 h-8 text-white" />
        </IconButton>
      )}
      nextArrow={({ handleNext }) => (
        <IconButton
          variant="text"
          color="#000"
          size="lg"
          onClick={handleNext}
          className="!absolute bottom-0 right-8 -translate-y-2/4  bg-black/20 rounded-full"
        >
          <IoIosArrowForward  className="w-8 h-8 text-white" />
        </IconButton>
      )}


    >
      <div className="relative h-full w-full">
        <img
          src="/banner1 (1).png"
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 px-10 bg-gradient-to-r from-gray-800/90 to-transparent  h-full flex flex-col gap-y-7 w-fit justify-center items-start">
          <Typography variant="h1" color="white" >
            SUMMER SALE
          </Typography>
          <Typography variant="lead" color="white" className="w-8/10">
            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
          </Typography >
          <Button size="lg" color="white" className="w-4/10 text-gray-600 capitalize">
            Shop Now
          </Button>
        </div>

      </div>
      <div className="relative h-full w-full">
        <img
          src="/banner1 (2).png"
          alt="image 2"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 px-10 bg-gradient-to-r from-gray-800/90  to-transparent  h-full flex flex-col gap-y-7 w-fit justify-center items-start">
          <Typography variant="h1" color="white" >
            AUTUMN COLLECTION
          </Typography>
          <Typography variant="lead" color="white" className="w-8/10 ">
            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
          </Typography >
          <Button size="lg" color="white" className="w-4/10  capitalize text-gray-600">
            Shop Now
          </Button>
        </div>
      </div>
      <div className="relative h-full w-full">
        <img
          src="/banner1 (3).png"
          alt="image 3"
          className="h-full w-full object-cover"
        />
        <div className="absolute top-0 px-10 bg-gradient-to-r from-gray-800/90 to-transparent  h-full flex flex-col gap-y-7 w-fit justify-center items-start">
          <Typography variant="h1" color="white" >
            FORMAL WEAR
          </Typography>
          <Typography variant="lead" color="white" className="w-8/10">
            DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.
          </Typography >
          <Button size="lg" color="white" className="w-4/10  capitalize text-gray-600">
            Shop Now
          </Button>
        </div>
      </div>

    </Carousel>
  );
}