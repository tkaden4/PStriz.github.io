import React from "react";

import "./Portfolio.sass";

import tank_forest from "../../assets/tank/TankInAForest.png";
import tank_plain from "../../assets/tank/TankWithoutBackground.png";

import raw_eleph from "../../assets/elephant/IncompleteElephantAndMouseNoTextures.png";
import some_eleph from "../../assets/elephant/IncompleteElephantAndMouse.png";
import full_eleph from "../../assets/elephant/Elephant_With_Rat_4k.png";

import planet_1 from "../../assets/planets/Cool_Planet.png";
import planet_2 from "../../assets/planets/RingPlanetFarAway.png";
import planet_3 from "../../assets/planets/planet_for_the_little_shit_in_my_life.png";
import planet_4 from "../../assets/planets/Planet_for_Kyle.png";

import spaceship from "../../assets/SpaceShip1Concept.png";

import rubiks from "../../assets/RubiksSolver.PNG";

const photos = [
    tank_forest,
    tank_plain,
    raw_eleph,
    some_eleph,
    full_eleph,
    planet_1,
    planet_2,
    planet_3,
    planet_4,
    spaceship,
    rubiks
];

export const Portfolio = () =>
    <div className="portfolio">
        <img src={tank_forest} />
        <img src={tank_plain} />
    </div>;

export default Portfolio;