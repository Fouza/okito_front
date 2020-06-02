import React from "react";
import "./ExploreContainer.css";
import Accueil from "./Accueil";
import Calendrier from "./Calendrier";
import Profile from "./Profile";
import Statistic from "./Statistic";

interface ContainerProps {
  name: string;
}

const ExploreContainer: React.FC<ContainerProps> = ({ name }) => {
  if (name === "Accueil") {
    return <Accueil name={name}></Accueil>;
  } else if (name === "Calendrier") {
    return <Calendrier name={name}></Calendrier>;
  } else if (name === "Profile") {
    return <Profile name={name}></Profile>;
  } else if (name === "Statistics") {
    return <Statistic name={name}></Statistic>;
  }
  return (
    <div>
      <strong>Lien introuvable, veuillez réessayer</strong>{" "}
    </div>
  );
};

export default ExploreContainer;
