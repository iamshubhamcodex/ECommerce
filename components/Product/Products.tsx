import Section from "../Section";

const Products = () => {
  return (
    <Section padding={false}>
      {/* <div className="px-4 flex flex-row flex-wrap"></div> */}
      <div className="px-4 grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-2">
        <p>Hello</p>
        <p>Bye</p>
        <p>Why</p>
        <p>How</p>
      </div>
    </Section>
  );
};

export default Products;
