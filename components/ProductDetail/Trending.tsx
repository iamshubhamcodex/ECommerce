import ImageCard from "../ImageCard";
import Section from "../Section";

const Similar = () => {
  const data = [
    { src: "first.png", link: "tops" },
    { src: "second.png" },
    { src: "third.png" },
    { src: "fourth.png" },
  ];
  return (
    <Section heading="Trending Products" headingSide>
      <div className="flex flex-row flex-wrap justify-around">
        {data &&
          data.map((item) => {
            return (
              <ImageCard
                key={item.src}
                type="cat"
                image={`/Categories/${item.src}`}
                link={item.link}
              />
            );
          })}
      </div>
    </Section>
  );
};

export default Similar;
