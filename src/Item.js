import ItemTitle from "./ItemTitle";
import ItemSubtitle from "./ItemSubtitle";
import ItemPicture from "./ItemPicture";
import ItemDescription from "./ItemDescription";

const Item = (props) => {
  return (
    <div className="item">
      <ItemTitle title={props.title} />
      <ItemSubtitle subtitle={props.subtitle} />
      <div className="img">
        <ItemPicture img={props.img} />
      </div>

      <ItemDescription description={props.description} />
    </div>
  );
};

export default Item;
