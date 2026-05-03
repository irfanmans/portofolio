import { techStack } from "../data/TechStack";
import Logo from "../ui/Logo";
import Card from "./Card";

export default function TechStack() {
  return (
    <>
      <div className="grid grid-cols-4 gap-2 justify-center flex-wrap mt-10">
        {techStack.map((element, index) => {
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
