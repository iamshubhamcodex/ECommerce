import ImageCard from "../ImageCard";
import Section from "../Section";

const Collections = () => {
  const data = [
    { src: "first.png" },
    { src: "second.png" },
    { src: "third.png" },
    { src: "fourth.png" },
  ];

  return (
    <Section heading="Collections">
      <span></span>
      <div className="overflow-hidden">
        <div className="flex flex-row flex-wrap justify-around">
          {data &&
            data.map((item) => {
              return (
                <ImageCard
                  key={item.src}
                  type="col"
                  image={`/Collections/${item.src}`}
                />
              );
            })}
        </div>
      </div>
    </Section>
  );
};

export default Collections;
