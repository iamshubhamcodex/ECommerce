import Section from "../Section";
import ProductItem from "./ProductItem";

const Products = () => {
  const data = [
    {
      src: 1,
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
    },
    {
      src: 3,
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
    },
    {
      src: 5,
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
    },
    {
      src: 7,
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
    },
  ];
  return (
    <Section padding={false}>
      <div className="px-6 grid grid-cols-2 xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-3 gap-7">
        {data &&
          data.map((item) => {
            return (
              <ProductItem
                key={item.src}
                title={item.title}
                price={item.price}
                src={item.src}
                subtitle={item.subtitle}
              />
            );
          })}
      </div>
    </Section>
  );
};

export default Products;
