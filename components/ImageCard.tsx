import "../css/ImageCard.css";

interface ImageCardProp {
  image: string;
  type: string;
}

const ImageCard = ({ image, type }: ImageCardProp) => {
  return (
    <div className={"m-2 imageCard " + type}>
      <img src={image} alt="TOPS" />
    </div>
  );
};

export default ImageCard;
