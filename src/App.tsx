import Section from "../components/Section";
import ImageCard from "../components/ImageCard";
import Caraousal from "../components/Caraousal";
import "./App.css";

function App() {
  const data = [
    { src: "first.png" },
    { src: "second.png" },
    { src: "third.png" },
    { src: "fourth.png" },
  ];

  return (
    <>
      <Caraousal data={data} />

      <Section heading="Categories">
        <div className="flex flex-row flex-wrap justify-around">
          <ImageCard type="cat" image="/Categories/first.png" />
          <ImageCard type="cat" image="/Categories/second.png" />
          <ImageCard type="cat" image="/Categories/third.png" />
          <ImageCard type="cat" image="/Categories/fourth.png" />
          <ImageCard type="cat" image="/Categories/fifth.png" />
          <ImageCard type="cat" image="/Categories/sixth.png" />
        </div>
      </Section>
    </>
  );
}

export default App;
