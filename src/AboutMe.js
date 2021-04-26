import ItemTitle from "./ItemTitle";

import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const AboutMe = (props) => {
  return (
    <div className="side-content">
      <ItemTitle title="About Me" />
      <div className="img-side">
        <ItemPicture img="https://cdn1.tissus-price.com/130315-tm_large_default/tissu-coton-gris-souris-grande-largeur.jpg" />
      </div>

      <ItemDescription description="Boujour, voici une description du petit Article about me" />
    </div>
  );
};

export default AboutMe;
