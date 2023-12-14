import React from "react";

function CeoCard({ name, title, description, image, imgAlt }) {
  return (
    <article className="">
      <h4 className="text-5xl">{name}</h4>
      <h5 className="text-3xl">{title}</h5>
      <div className="grid grid-cols-2 gap-4">
        <img src={image} alt={imgAlt} className="m-2 rounded-lg"/>
        <p className="m-3">{description}</p>
      </div>
    </article>
  );
}

export default CeoCard;
