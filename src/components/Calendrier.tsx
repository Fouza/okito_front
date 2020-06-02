import React, { useState } from "react";
import {
  IonGrid,
  IonRow,
  IonButton,
  IonContent,
  IonHeader,
  IonCol,
  IonIcon,
  IonList,
  IonItem,
  IonItemDivider,
  IonSelect,
  IonLabel,
  IonSelectOption,
  IonInput,
  IonCard,
  IonCardContent,
  IonCardHeader,
} from "@ionic/react";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";
import axios from "axios";

interface AccueilProps {
  name: string;
}

const Calendrier: React.FC<AccueilProps> = ({ name }) => {
  const [aliment, setAliment] = useState<String>();
  const [exercice, setExercice] = useState<String>();
  const [events, setEvents] = useState();
  const [duree, setDuree] = useState<number>();
  const [poids, setpoids] = useState<Number>(0);

  mobiscroll.util.getJson(
    "https://trial.mobiscroll.com/events/",
    (events) => {
      setEvents(events);
    },
    "jsonp"
  );

  function handleSubmitAliment() {}

  function handleSubmitExercice() {}

  const datetimeResponsive = {
    xsmall: {
      dateWheels: "|D M d|",
    },
    small: {
      dateWheels: "|D M d|",
      display: "bubble",
    },
    medium: {
      touchUi: false,
    },
  };

  const dateResponsive = {
    small: {
      display: "bubble",
    },
    medium: {
      headerText: false,
      touchUi: false,
    },
  };

  const timeResponsive = {
    small: {
      display: "bubble",
    },
    medium: {
      touchUi: false,
    },
  };
  mobiscroll.settings = {
    theme: "ios",
    themeVariant: "light",
  };

  mobiscroll.settings = {
    theme: "ios",
    themeVariant: "light",
  };
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCol sizeLg="6" sizeMd="6" sizeSm="12" sizeXs="12">
            <IonCard>
              <IonCardHeader>Ajouter un aliment mangé</IonCardHeader>
              <IonCardContent>
                <IonSelect
                  placeholder="Aliments ..."
                  onIonChange={(e) => setAliment(e.detail.value)}
                >
                  <IonSelectOption value="Aliment1">Aliment1</IonSelectOption>
                  <IonSelectOption value="Aliment2">Aliment2</IonSelectOption>
                </IonSelect>

                <IonButton
                  className="btn"
                  color="success"
                  expand="block"
                  fill="clear"
                >
                  Ajouter
                </IonButton>
              </IonCardContent>
            </IonCard>
            <br />
            <IonCard>
              <IonCardHeader>Ajouter un exercice</IonCardHeader>
              <IonCardContent>
                <IonSelect
                  placeholder="Exercices ..."
                  onIonChange={(e) => setExercice(e.detail.value)}
                >
                  <IonSelectOption value="1">Exercice1</IonSelectOption>
                  <IonSelectOption value="2">Exercice2</IonSelectOption>
                </IonSelect>

                <IonInput
                  type="number"
                  placeholder="Entrez la durée (Minutes)"
                  onIonChange={(e) => setDuree(parseInt(e.detail.value!, 10))}
                ></IonInput>

                <IonButton
                  className="btn"
                  color="success"
                  expand="block"
                  fill="clear"
                >
                  Ajouter
                </IonButton>
              </IonCardContent>
            </IonCard>
            <br />
            <IonCard>
              <IonCardHeader>
                Enregistrer votre poids d'aujourdh'hui
              </IonCardHeader>
              <IonCardContent>
                <mobiscroll.FormGroup>
                  <mobiscroll.Date
                    headerText="{value}"
                    themeVariant="light"
                    theme="ios"
                    responsive={dateResponsive}
                    display="bubble"
                  >
                    <mobiscroll.Input
                      placeholder="Choisissez la date"
                      inputStyle="box"
                      labelStyle="stacked"
                    >
                      Date
                    </mobiscroll.Input>
                  </mobiscroll.Date>
                </mobiscroll.FormGroup>
                <IonInput
                  type="number"
                  placeholder="Entrez le poids (Kg)"
                  onIonChange={(e) => setpoids(parseInt(e.detail.value!, 10))}
                ></IonInput>
                <IonButton
                  className="btn"
                  color="success"
                  expand="block"
                  fill="clear"
                >
                  Enregistrez
                </IonButton>
              </IonCardContent>
            </IonCard>
          </IonCol>

          <IonCol sizeLg="6" sizeMd="6" sizeSm="12" sizeXs="9">
            <mobiscroll.Eventcalendar
              theme="ios"
              themeVariant="light"
              display="inline"
              view={{
                calendar: { type: "month" },
                eventList: { type: "month", scrollable: true },
              }}
              data={events}
            />
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Calendrier;
