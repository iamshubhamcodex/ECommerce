import { useParams } from "react-router";
import Section from "../Section";

const Banner = () => {
  const { id } = useParams<string>();
  return (
    <>
      <Section padding={false} margin={false}>
        <img
          src={`/Products/${id}.png`}
          alt="First PNG"
          className="w-full h-[400px] object-cover"
        />
      </Section>
    </>
  );
};

export default Banner;
