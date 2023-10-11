import { useParams } from "react-router";
import Section from "../Section";

const Breadcrumb = () => {
  const { id } = useParams();

  return (
    <>
      <Section>
        <div className="flex justify-between items-center">
          <div>
            <p className="px-4 w-full my-2 text-sm text-slate-500 uppercase raleway">
              Home/{id}
            </p>
            <p className="px-4 capitalize text-xl text-slate-800">
              {id} - 10 items
            </p>
          </div>
          <select
            name="sortin_option"
            id="sortinOption"
            className="px-2 py-1 border border-slate-400 rounded text-slate-700 min-w-[200px]"
          >
            <option value="null">Select Sorting Option</option>
            <option value="price_low_to_high">By Price Low to High</option>
            <option value="price_high_to_low">By Price High to Low</option>
            <option value="a_z">A to Z</option>
            <option value="newest">Newest</option>
            <option value="popularity">Popularity</option>
          </select>
        </div>
      </Section>
      <Section padding={false} margin={false}>
        <div className="mb-2 mt-6 border-b border-b-slate-400"></div>
      </Section>
    </>
  );
};

export default Breadcrumb;
