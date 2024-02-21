import React from "react";
import "./DescriptionBox.css";

const DescriptionBox = () => {
  return (
    <div className="descriptionbox">
      <div className="descriptionbox-navigator">
        <div className="descriptionbox-nav-box">Descripción</div>
        <div className="descriptionbox-nav-box fade">Reviews (122)</div>
      </div>
      <div className="descriptionbox-description">
        <p>
          Odavno je uspostavljena činjenica da čitača ometa razumljivi tekst dok
          gleda raspored elemenata na stranici. Smisao korištenja Lorem Ipsum-a
          jest u tome što umjesto 'sadržaj ovjde, sadržaj ovjde' imamo normalni
          raspored slova i riječi, pa čitač ima dojam da gleda tekst na
          razumljivom jeziku.
        </p>
        <p>
          Odavno je uspostavljena činjenica da čitača ometa razumljivi tekst dok
          gleda raspored elemenata na stranici. Smisao korištenja Lorem Ipsum-a
          jest u tome što umjesto 'sadržaj ovjde, sadržaj ovjde'
        </p>
      </div>
    </div>
  );
};

export default DescriptionBox;
