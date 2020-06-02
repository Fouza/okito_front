import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonHeader,
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonItem,
  IonItemDivider,
  IonInput,
  IonList,
  IonButton,
  IonRouterOutlet,
  IonApp,
  IonImg,
  IonNav,
} from "@ionic/react";
import { IonRouterLink } from "@ionic/react";
import "./ExploreContainer.css";
import logo from "../assets/logo.png";

const Welcome: React.FC = () => {
  return (
    <IonHeader class="nav">
      <IonGrid>
        <IonRow class="ion-align-items-center ion-justify-content-center">
          <IonCol
            size="1"
            class="loginBtn ion-justify-content-start ion-align-items-start"
          >
            <IonRouterLink href="/welcome">
              <IonImg src={logo} />
              {""}
            </IonRouterLink>
          </IonCol>

          <IonCol
            size="7"
            class="loginBtn ion-justify-content-end ion-align-items-end"
          ></IonCol>
          <IonCol
            size="2"
            class="loginBtn ion-justify-content-end ion-align-items-end"
          >
            <IonRouterLink class="navBtn">Fonctionnalité</IonRouterLink>
          </IonCol>
          <IonCol
            size="2"
            class="loginBtn ion-justify-content-end ion-align-items-end
              "
          >
            <IonRouterLink class="navBtn" href="./login">
              Se connecter
            </IonRouterLink>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonHeader>
  );
};

export default Welcome;
