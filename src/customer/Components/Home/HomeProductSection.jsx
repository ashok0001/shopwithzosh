import AliceCarousel from "react-alice-carousel";
import HomeProductCard from "./HomeProductCard";
import "./HomeProductSection.css";
import { Button} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const HomeProductSection = ({ section,data }) => {
  const responsive = {
    0: {
      items: 2,
      itemsFit: "contain",
    },
    568: {
      items: 3,
      itemsFit: "contain",
    },
    1024: {
      items: 5.5,
      itemsFit: "contain",
    },
  };
  const items = data?.slice(0, 10).map((item) => (
    <div className="">
      {" "}
      <HomeProductCard product={item} />
    </div>
  ));

  return (
    <div className="relative px-4 sm:px-6 lg:px-8 ">
      <h2 className="text-2xl font-extrabold text-gray-900 py-5">{section}</h2>
      <div className="relative border p-5">
        <AliceCarousel
          disableButtonsControls
          disableDotsControls
          mouseTracking
          items={items}
          responsive={responsive}
        />
        <Button
          variant="contained"
          className="z-50 bg-white"
          sx={{
            position: "absolute",
            top: "8rem",
            right: "0rem",
            transform: "translateX(50%) rotate(90deg)",
          }}
       color="white"
          aria-label="next"
        >
          <ArrowForwardIosIcon
            className="text-black"
            sx={{ transform: "rotate(-90deg)" }}
          />
        </Button>

        <Button
          variant="contained"
          className="z-50 "
          color="white"
          sx={{
            position: "absolute",
            top: "8rem",
            left: "0rem",
            transform: "translateX(-50%)  rotate(90deg)",
          }}
         
          aria-label="next"
        >
          <ArrowForwardIosIcon
            className=""
            sx={{ transform: " rotate(90deg)" }}
          />
        </Button>
      </div>
    </div>
  );
};

export default HomeProductSection;
