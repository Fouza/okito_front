import React, { useState } from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonIcon,
  IonLabel,
  IonButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonThumbnail,
  IonList,
  IonInput,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import image from "../assets/meme.jpg";
import mobiscroll from "@mobiscroll/react";
import "@mobiscroll/react/dist/css/mobiscroll.min.css";

interface ProfileProps {
  name: string;
}

const Profile: React.FC<ProfileProps> = ({ name }) => {
  const [email, setEmail] = useState<String>();
  const [pwd, setPwd] = useState<String>();
  const [pwdConf, setPwdConf] = useState<String>();
  const [age, setAge] = useState<String>();
  const [taille, setTaille] = useState<String>();
  const [sexe, setSexe] = useState<String>();
  const [obj, setObj] = useState<String>();
  return (
    <IonContent>
      <IonGrid>
        <IonRow>
          <IonCard>
            <IonCardHeader>
              <IonThumbnail>
                <IonImg src={image} />
              </IonThumbnail>
              <IonCardTitle>Oukacha Fouzi</IonCardTitle>
            </IonCardHeader>

            <IonCardContent>
              Keep close to Nature's heart... and break clear away, once in
              awhile, and climb a mountain or spend a week in the woods. Wash
              your spirit clean.
            </IonCardContent>
          </IonCard>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <IonCard>
              <IonCardHeader>Mettre à jour vos informations</IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonInput
                      type="email"
                      placeholder="E-mail"
                      onIonChange={(e) => setEmail(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput
                      type="password"
                      placeholder="Mot de passe"
                      onIonChange={(e) => setPwd(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput
                      type="password"
                      placeholder="Confirmez le mot de passe"
                      onIonChange={(e) => setPwdConf(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonRow>
                    <IonCol>
                      <IonButton
                        class="btn"
                        color="success"
                        expand="block"
                        fill="clear"
                      >
                        Mettre à jour
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
        <IonRow>
          <IonCol size="12">
            <IonCard>
              <IonCardHeader>
                Plus d'information pour plus de résultats
              </IonCardHeader>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonSelect
                      placeholder="Sexe ..."
                      onIonChange={(e) => setSexe(e.detail.value)}
                    >
                      <IonSelectOption value="Homme">Homme</IonSelectOption>
                      <IonSelectOption value="Femmme">Femme</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                  <IonItem>
                    <IonInput
                      type="text"
                      placeholder="Âge"
                      onIonChange={(e) => setAge(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonInput
                      type="text"
                      placeholder="Taille"
                      onIonChange={(e) => setTaille(e.detail.value!)}
                    ></IonInput>
                  </IonItem>
                  <IonItem>
                    <IonSelect
                      placeholder="Objectif ..."
                      onIonChange={(e) => setObj(e.detail.value)}
                    >
                      <IonSelectOption value="1">Maigrir</IonSelectOption>
                      <IonSelectOption value="2">
                        Maintenir le poids
                      </IonSelectOption>
                      <IonSelectOption value="3">Grossir</IonSelectOption>
                    </IonSelect>
                  </IonItem>
                  <IonRow>
                    <IonCol>
                      <IonButton
                        class="btn"
                        color="success"
                        expand="block"
                        fill="clear"
                      >
                        Enregistrer
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonList>
              </IonCardContent>
            </IonCard>
          </IonCol>
        </IonRow>
      </IonGrid>
    </IonContent>
  );
};

export default Profile;
