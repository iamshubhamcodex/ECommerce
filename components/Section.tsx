import React from "react";

interface SectionProp {
  children: React.ReactNode;
  heading?: string;
}

const Section = ({ children, heading }: SectionProp): React.ReactNode => {
  return (
    <section className="max-w-7xl mx-auto py-4 px-6 relative">
      {heading && <h2 className="ralway title my-2 ">{heading}</h2>}
      <div className="content my-3">{children}</div>
    </section>
  );
};

export default Section;
