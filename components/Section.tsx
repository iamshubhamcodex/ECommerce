import React from "react";

interface SectionProp {
  children: React.ReactNode;
  heading?: string;
  padding?: boolean;
  margin?: boolean;
  headingSide?: boolean;
}

const Section = ({
  children,
  heading,
  padding = true,
  margin = true,
  headingSide = false,
}: SectionProp): React.ReactNode => {
  return (
    <section
      className={
        "bg-white shadow lg:shadow-none mx-auto relative " +
        (padding ? " py-4 px-2" : "")
      }
    >
      {heading && !headingSide && (
        <h2 className="ralway title my-2 ">{heading}</h2>
      )}
      {heading && headingSide && (
        <h2 className="my-2 py-2 text-xl font-bold capitalize source">
          {heading}
        </h2>
      )}
      <div className={"content " + (margin ? "my-3" : "")}>{children}</div>
    </section>
  );
};

export default Section;
