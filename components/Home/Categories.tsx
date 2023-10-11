import ImageCard from "../ImageCard";
import Section from "../Section";

const Categories = () => {
  const data = [
    { src: "first.png", link: "tops" },
    { src: "second.png" },
    { src: "third.png" },
    { src: "fourth.png" },
    { src: "fifth.png" },
    { src: "sixth.png" },
  ];
  return (
    <Section heading="Categories">
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

export default Categories;
