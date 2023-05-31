import "./styles.css";
import { useState } from "react";
import { FlavourSection } from "./components/FlavourSection";

export default function App() {
  const flavours = [
    {
      name: "Raspberry",
      background: "#d41e55",
      can: "can.png",
      ingredient: "raspberry.png"
    },
    {
      name: "Grapefruit",
      background: "#fd603c",
      can: "can.png",
      ingredient: "grapefruit.png"
    },
    {
      name: "Lemon",
      background: "#f7d51d",
      can: "can.png",
      ingredient: "lemon.png"
    }
  ];

  const [activeSection, setActiveSection] = useState(0);

  return (
    <div className="App">
      <div
        className="flavour-wrapper"
        style={{ backgroundColor: flavours[activeSection].background }}
      >
        {flavours &&
          Object.keys(flavours).length > 0 &&
          flavours?.map((flavour, index) => {
            return (
              <FlavourSection
                flavour={flavour}
                flavourIndex={index}
                setActiveSection={setActiveSection}
                key={`flavour-slider-${index}`}
              />
            );
          })}
      </div>
      <h1>Flavour town</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
        sollicitudin magna mauris, a rutrum leo aliquet ac. Nullam sed posuere
        turpis, eu lacinia nulla. Duis eu nulla efficitur, vestibulum augue et,
        tempus mauris. Ut sit amet dolor nec tortor suscipit ornare. Ut id
        viverra lorem. Sed odio augue, aliquam sit amet nibh et, scelerisque
        interdum nunc. Phasellus ut efficitur nisi, eu molestie lorem. Nulla
        fermentum purus at nisl fringilla ornare. Proin vel felis aliquam,
        mollis dui a, facilisis quam. Cras tincidunt felis tellus, eu efficitur
        arcu blandit non. Proin ac ex nisl. Pellentesque purus lectus, accumsan
        id fermentum et, congue et justo. Nam in est vestibulum, rutrum dui eu,
        lacinia tortor. Quisque dictum nisl eget faucibus feugiat. Nam auctor
        ultricies condimentum. Suspendisse suscipit non diam a efficitur.
        Suspendisse non nisl consequat, iaculis libero a, luctus massa.{" "}
      </p>
      <p>
        <a href="https://www.freepik.com/free-photo/empty-beverage-aluminum-can-with-design-space_21632463.htm#query=drinks%20can&position=2&from_view=search&track=location_fest_v1">
          Image by rawpixel.com
        </a>
        on Freepik
      </p>
    </div>
  );
}
