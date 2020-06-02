import React, { useState } from "react";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonProgressBar,
  IonCardTitle,
  IonText,
  IonSearchbar,
} from "@ionic/react";
import "./ExploreContainer.css";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

interface StatisticProps {
  name: string;
}

mobiscroll.settings = {
  theme: "ios",
  themeVariant: "dark",
};

const Statistic: React.FC<StatisticProps> = ({ name }) => {
  const [val, setVal] = useState<Date>(new Date());
  console.log(val.toLocaleDateString());
  return (
    <IonContent>
      <IonRow>
        <IonCol>
          <mobiscroll.Calendar
            value={val.toLocaleDateString()}
            headerText="{value}"
            display="bubble"
          >
            <mobiscroll.Input inputStyle="box" labelStyle="stacked">
              Date début
            </mobiscroll.Input>
          </mobiscroll.Calendar>
        </IonCol>
        <IonCol>
          <mobiscroll.Calendar
            value={val.toLocaleDateString()}
            headerText="{value}"
            display="bubble"
          >
            <mobiscroll.Input inputStyle="box" labelStyle="stacked">
              Date fin
            </mobiscroll.Input>
          </mobiscroll.Calendar>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonText class="cardTitle">Objectif</IonText> <br />
              Vous êtes un peu loin ! Allez courage !
            </IonCardHeader>
            <br />
            <IonCardContent>
              <IonProgressBar color="danger" value={0.3}></IonProgressBar>
              <br />
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol>
          <IonCard>
            <IonCardHeader>
              <IonText class="cardTitle">Calories brûlés</IonText> <br />
              Vous êtes à moitié de route ! Faites plus d'exercices
              régulièrement
            </IonCardHeader>
            <br />
            <IonCardContent>
              <IonProgressBar value={0.5}></IonProgressBar>
              <br />
            </IonCardContent>
          </IonCard>
        </IonCol>
      </IonRow>
    </IonContent>
  );
};

export default Statistic;
