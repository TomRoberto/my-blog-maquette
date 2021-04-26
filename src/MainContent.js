import Item from "./Item";

const MainContent = (props) => {
  return (
    <div className="main-content">
      <Item
        title="Premier Titre"
        subtitle="Premier Sous-Titre"
        img="https://cdn1.tissus-price.com/130315-tm_large_default/tissu-coton-gris-souris-grande-largeur.jpg"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, accusantium. Possimus architecto animi neque ipsum. Rerum illo asperiores quidem, deleniti officia, dolores, dicta esse rem atque doloremque repudiandae. Illum, rerum!"
      />
      <Item
        title="Second Titre"
        subtitle="Second Sous-Titre"
        img="https://cdn1.tissus-price.com/130315-tm_large_default/tissu-coton-gris-souris-grande-largeur.jpg"
        description="Bonjour, je suis la description du second item du Main content"
      />
    </div>
  );
};

export default MainContent;
