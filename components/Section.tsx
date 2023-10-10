import React from "react";

interface SectionProp {
  children: React.ReactNode;
  heading?: string;
  padding?: boolean;
  margin?: boolean;
}

const Section = ({
  children,
  heading,
  padding = true,
  margin = true,
}: SectionProp): React.ReactNode => {
  return (
    <section className={" mx-auto relative " + (padding ? " py-4 px-2" : "")}>
      {heading && <h2 className="ralway title my-2 ">{heading}</h2>}
      <div className={"content " + (margin ? "my-3" : "")}>{children}</div>
    </section>
  );
};

export default Section;
