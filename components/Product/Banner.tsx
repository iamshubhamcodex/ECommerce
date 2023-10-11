import Section from "../Section";

const Banner = () => {
  return (
    <>
      <Section padding={false} margin={false}>
        <img
          src="/Product/first.png"
          alt="First PNG"
          className="w-full h-[400px] object-cover"
        />
      </Section>
    </>
  );
};

export default Banner;
