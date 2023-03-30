import SingleColor from "./SingleColor";
import { nanoid } from "nanoid";

const Colorlist = ({colors}) => {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        return <SingleColor color={color} index={index} key={nanoid}/>
      })}
    </section>
  );
}
export default Colorlist