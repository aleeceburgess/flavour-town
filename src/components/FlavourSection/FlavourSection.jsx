import { useEffect, useRef } from "react";
import { useInView } from "framer-motion";
import "./FlavourSection.scss";

export const FlavourSection = ({ flavour, flavourIndex, setActiveSection }) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "0px -50%  0px -50% " });

  useEffect(() => {
    if (isInView) {
      setActiveSection(flavourIndex);
    }
  }, [flavourIndex, isInView, setActiveSection]);

  return (
    <section className="flavour-section" ref={ref}>
      <h2 className="flavour-section__name">{flavour.name}</h2>
      <div className="flavour-section__image-wrapper">
        {/* <img
          className="flavour-section__ingredient"
          src={flavour?.ingredient}
          alt=""
        /> */}
        <img
          className="flavour-section__can"
          src={flavour?.can}
          alt={`Can of ${flavour.name} beverage`}
        />
      </div>
      <div className="flavour-section__info">
        <table>
          <tr>
            <th scope="row">Type</th>
            <td>IPA</td>
          </tr>
          <tr>
            <th scope="row">ABV</th>
            <td>5.5%</td>
          </tr>
          <tr>
            <th scope="row">IBU</th>
            <td>4.3</td>
          </tr>
          <tr>
            <th scope="row">Tastes</th>
            <td>Fruity</td>
          </tr>
        </table>
      </div>
    </section>
  );
};
