import React from "react";


function Section({ title, description, image, imgAlt }) {
  return (
    <article className="mt-20">
      <h3 className="text-6xl">{title}</h3>
      <div className="grid grid-cols-2 gap-4 p-3">
        <p className="mt-10 text-lg mr-10">{description}</p>
        <img src={image} alt={imgAlt} />
      </div>
    </article>
  );
}

export default Section;
