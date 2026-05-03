import { tools } from "../data/Tools";
import Logo from "../ui/Logo";
import Card from "./Card";

export default function Tools() {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 justify-center flex-wrap mt-10">
        {tools.map((element, index) => {
          return (
            <Card key={index}>
              <Logo
                src={element.logo}
                className="w-12 h-12 flex flex-col justify-center items-center mx-auto"
              />
            </Card>
          );
        })}
      </div>
    </>
  );
}
