import Section from "../Section";
import ProductItem, { ProductItemProps } from "./ProductItem";

const Products = () => {
  const data: ProductItemProps[] = [
    {
      id: 1,
      src: 1,
      to: "/product/detail/tops",
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
    },
    {
      id: 2,
      src: 3,
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
    },
    {
      id: 3,
      src: 5,
      title: "Solids: Shades of Purple Set",
      subtitle: "Women Cropped Tops",
      price: 499,
    },
    {
      id: 4,
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
                id={item.id}
                key={item.src}
                title={item.title}
                price={item.price}
                src={item.src}
                subtitle={item.subtitle}
                to={item.to}
              />
            );
          })}
      </div>
    </Section>
  );
};

export default Products;
