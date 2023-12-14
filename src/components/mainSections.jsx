import React from "react";
// https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-new/subhome-xmedia-50//w/1920/IMAGE-landscape-fill-f6323d76-add3-4e2a-8861-d63f92f5b2d7-default_0.jpg?ts=1702491479378

// https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-join-life/subhome-xmedia-48//w/1920/IMAGE-landscape-fill-38e97c71-fda1-43f5-96ab-dd381b561085-default_0.jpg?ts=1701423536654
// https://static.zara.net/photos///contents/mkt/spots/aw23-north-woman-shoes-and-bags/subhome-xmedia-50-2//w/1920/IMAGE-landscape-fill-89ac5afa-ae1f-4fab-b95a-c5705b8d031b-default_0.jpg?ts=1702547700319

function MainSections({ title, description, image, imgAlt }) {
  return (
    <article className="mt-20">
      <h3 className="text-6xl">{title}</h3>
      <div className="grid grid-cols-2 gap-4">
        <p className="mt-10">{description}</p>
        <img src={image} alt={imgAlt} />
      </div>
    </article>
  );
}

export default MainSections;
