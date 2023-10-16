import Section from "./Section";

const Footer = () => {
  return (
    <>
      <div className="homeGrown uppercase py-4 w-full mb-5 bg-[#e71318] text-white jost font-semibold text-4xl md:text-xl md:text-lg lg:text-base sm:text-base text-center px-4">
        homegrown indian brand
      </div>
      <div className="over capitalize py-4 my-2 text-3xl text-center px-4">
        Over <b>6 Million</b> Happy Customers
      </div>
      <Section>
        <div className="flex flex-row flex-wrap gap-7 justify-around ">
          <div className="firstCol min-w-[200px] flex flex-col items-center ">
            <p className="head text-[#ed2e30] source font-semibold text-3xl md:text-2xl">
              Need Help
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Contact Us
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Track Order
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Returns and Refund
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              FAQs
            </p>
          </div>
          <div className="secondCol min-w-[200px] flex flex-col items-center">
            <p className="head text-[#ed2e30] source font-semibold text-3xl md:text-2xl">
              Company
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              About Us
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Careers
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Souled Army
            </p>
          </div>
          <div className="thirdCol min-w-[200px] flex flex-col items-center">
            <p className="head text-[#ed2e30] source font-semibold text-3xl md:text-2xl">
              More Info
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              T&C
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Privacy Policy
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Sitemap
            </p>
          </div>
          <div className="fourthCol min-w-[200px] flex flex-col items-center">
            <p className="head text-[#ed2e30] source font-semibold text-3xl md:text-2xl">
              Store near me
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Bandra
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Bengalore
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Pune
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Thane
            </p>
            <p className="text-xl md:text-lg lg:text-base text-slate-700">
              Harayana
            </p>
          </div>
        </div>
      </Section>
    </>
  );
};

export default Footer;
