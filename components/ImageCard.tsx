import { useNavigate } from "react-router";
import "../css/ImageCard.css";

interface ImageCardProp {
  image: string;
  type: string;
  link?: string;
}

const ImageCard = ({ image, type, link }: ImageCardProp) => {
  const navigate = useNavigate();

  return (
    <div
      className={"m-2 imageCard cursor-pointer " + type}
      onClick={() => {
        navigate("/product/" + link);
      }}
    >
      <img src={image} alt="TOPS" />
    </div>
  );
};

export default ImageCard;
