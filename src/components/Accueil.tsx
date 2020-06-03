import React, { useState, useEffect } from "react";
import {
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonVirtualScroll,
  IonImg,
  IonSearchbar,
  IonButton,
  IonText,
} from "@ionic/react";
import "./ExploreContainer.css";
import meme from "../assets/meme.jpg";
import unknown from "../assets/unknown.jpg";
import axios from "axios";
import { search } from "ionicons/icons";

interface AccueilProps {
  name: string;
}

const Accueil: React.FC<AccueilProps> = ({ name }) => {
  //const isInitialMount = useRef(true);
  //Exercises
  const [exoCat, setExoCat] = useState<string>("");
  const [exoKey, setExoKey] = useState<string>("");
  const [exoCalFrom, setExoCalFrom] = useState("");
  const [exoCalTo, setExoCalTo] = useState("");
  const [isNone, setIsNone] = useState(false);
  const [exoCatResult, setExoCatResult] = useState<any>([
    {
      id: 0,
      name: "",
      image: { unknown },
      duration: 0,
      caloriesBurned: 0.0,
      category: {
        id: 0,
        name: "",
        description: "",
        image: { meme },
        hibernateLazyInitializer: {},
      },
    },
  ]);
  const [exoKeyResult, setExoKeyResult] = useState<any>([
    {
      id: 0,
      name: "",
      image: { unknown },
      duration: 0,
      caloriesBurned: 0.0,
      category: {
        id: 0,
        name: "",
        description: "",
        image: { meme },
        hibernateLazyInitializer: {},
      },
    },
  ]);
  const [exoCalResult, setExoCalResult] = useState<any>([
    {
      id: 0,
      name: "",
      image: { unknown },
      duration: 0,
      caloriesBurned: 0.0,
      category: {
        id: 0,
        name: "",
        description: "",
        image: { meme },
        hibernateLazyInitializer: {},
      },
    },
  ]);
  const [exercices, setExercices] = useState<any>([
    {
      id: 0,
      name: "",
      image: { unknown },
      duration: 0,
      caloriesBurned: 0.0,
      category: {
        id: 0,
        name: "",
        description: "",
        image: { meme },
        hibernateLazyInitializer: {},
      },
    },
  ]);

  //Food
  const [foodCat, setFoodCat] = useState<string>("");
  const [foodKey, setFoodKey] = useState<string>("");
  const [foodCalFrom, setFoodCalFrom] = useState("");
  const [foodCalTo, setFoodCalTo] = useState("");
  const [isNoneFood, setIsNoneFood] = useState(false);
  const [foodCatResult, setFoodCatResult] = useState<any>([
    {
      id: 0,
      name: "",
      image: "",
      calories: 0,
      category: {
        id: 0,
        name: "",
        description: "",
        image: "",
      },
      detailfood: {
        idnutritiondetails: 0,
        id: 0,
        name: "",
        calories: 0,
        eau: 0,
        proteins: 0,
        sucres: 0,
        fibres: 0,
        acidessatures: 0,
        cholesterol: 0,
        calcium: 0,
        potasium: 0,
        sodium: 0,
        vitamineB9: 0,
        vitamineC: 0,
        vitamineB6: 0,
        vitamineB3: 0,
        vitamineB12: 0,
        vitamineD: 0,
        vitamineE: 0,
      },
    },
  ]);
  const [foodKeyResult, setFoodKeyResult] = useState<any>([
    {
      id: 0,
      name: "",
      image: "",
      calories: 0,
      category: {
        id: 0,
        name: "",
        description: "",
        image: "",
      },
      detailfood: {
        idnutritiondetails: 0,
        id: 0,
        name: "",
        calories: 0,
        eau: 0,
        proteins: 0,
        sucres: 0,
        fibres: 0,
        acidessatures: 0,
        cholesterol: 0,
        calcium: 0,
        potasium: 0,
        sodium: 0,
        vitamineB9: 0,
        vitamineC: 0,
        vitamineB6: 0,
        vitamineB3: 0,
        vitamineB12: 0,
        vitamineD: 0,
        vitamineE: 0,
      },
    },
  ]);
  const [foodCalResult, setFoodCalResult] = useState<any>([
    {
      id: 0,
      name: "",
      image: "",
      calories: 0,
      category: {
        id: 0,
        name: "",
        description: "",
        image: "",
      },
      detailfood: {
        idnutritiondetails: 0,
        id: 0,
        name: "",
        calories: 0,
        eau: 0,
        proteins: 0,
        sucres: 0,
        fibres: 0,
        acidessatures: 0,
        cholesterol: 0,
        calcium: 0,
        potasium: 0,
        sodium: 0,
        vitamineB9: 0,
        vitamineC: 0,
        vitamineB6: 0,
        vitamineB3: 0,
        vitamineB12: 0,
        vitamineD: 0,
        vitamineE: 0,
      },
    },
  ]);

  const [food, setFood] = useState<any>([
    {
      id: 0,
      name: "",
      image: "",
      calories: 0.0,
      category: {
        id: 1,
        name: "",
        description: "",
        image: "",
      },
      detailfood: {
        idnutritiondetails: 0,
        id: 0,
        name: "",
        calories: 0.0,
        eau: 0,
        proteins: 0,
        sucres: 0,
        fibres: 0,
        acidessatures: 0,
        cholesterol: 0,
        calcium: 0,
        potasium: 0,
        sodium: 0,
        vitamineB6: 0,
        vitamineD: 0,
        vitamineE: 0,
        vitamineC: 0,
        vitamineB3: 0,
        vitamineB9: 0,
        vitamineB12: 0,
      },
    },
  ]);

  async function getListeExercices() {
    let config = {
      //method: "POST", // *GET, POST, PUT, DELETE, etc.
      //mode: "no-cors", // no-cors, *cors, same-origin
      headers: {
        //"Access-Control-Allow-Origin": "*",
        //Accept: "application/json",
        //"Access-Control-Allow-Headers": "Origin, Content-Type, Accept",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    };
    await axios
      .get("http://localhost:888/api/service/exercise/listeExercises", {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        //console.log(res.data[4].id);
        setExercices(res.data);
      })
      .catch((err) => console.log(err));
  }

  async function searchExoCat() {
    await axios
      .get(
        `http://localhost:888/api/service/exercise/listeExercisesByCategory?category=${exoCat}`,
        {
          headers: {
            //Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            //"Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
            /*"Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",*/
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.length > 0) {
          //let x = isNone;
          setIsNone(false);
          setExoCatResult(res.data);
        } else {
          //let x = isNone;
          setIsNone(true);
          setExoCatResult([
            {
              id: 0,
              name: "",
              image: { unknown },
              duration: 0,
              caloriesBurned: 0.0,
              category: {
                id: 0,
                name: "",
                description: "",
                image: { meme },
                hibernateLazyInitializer: {},
              },
            },
          ]);
        }
      })
      .catch((err) => console.log(err));
  }

  async function searchExoKey() {
    await axios
      .get(
        `http://localhost:888/api/service/exercise/listeExercisesByKeyWord?keyword=${exoKey}`,
        {
          headers: {
            //Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            //"Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
            /*"Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",*/
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.length > 0) {
          //let x = isNone;
          setIsNone(false);
          setExoKeyResult(res.data);
        } else {
          //let x = isNone;
          setIsNone(true);
          setExoKeyResult([
            {
              id: 0,
              name: "",
              image: { unknown },
              duration: 0,
              caloriesBurned: 0.0,
              category: {
                id: 0,
                name: "",
                description: "",
                image: { meme },
                hibernateLazyInitializer: {},
              },
            },
          ]);
        }
      })
      .catch((err) => console.log(err));
  }

  async function searchExoCal() {
    await axios
      .get(
        `http://localhost:888/api/service/exercise/listeExercisesByCalories?from=${exoCalFrom}&to=${exoCalTo}`,
        {
          headers: {
            //Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            //"Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
            /*"Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",*/
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.length > 0) {
          //let x = isNone;
          setIsNone(false);
          setExoCalResult(res.data);
        } else {
          //let x = isNone;
          setIsNone(true);
          setExoCalResult([
            {
              id: 0,
              name: "",
              image: { unknown },
              duration: 0,
              caloriesBurned: 0.0,
              category: {
                id: 0,
                name: "",
                description: "",
                image: { meme },
                hibernateLazyInitializer: {},
              },
            },
          ]);
        }
      })
      .catch((err) => console.log(err));
  }

  function handleSearchExo() {
    if (exoCat.length > 0) {
      searchExoCat();
    }
    if (exoKey.length > 0) {
      searchExoKey();
    }
    if (exoCalFrom.length > 0 && exoCalTo.length > 0) {
      searchExoCal();
    }
  }
  function handleSearchFood() {
    if (foodCat.length > 0) {
      searchFoodCat();
    }
    if (foodKey.length > 0) {
      searchFoodKey();
    }
    if (foodCalFrom.length > 0 && foodCalTo.length > 0) {
      searchFoodCal();
    }
  }

  async function getListeFood() {
    await axios
      .get("http://localhost:888/api/service/food/listeFood", {
        headers: {
          Accept: "application/json",
          "Access-Control-Allow-Headers":
            "Origin, X-Requested-With, Content-Type, Accept",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setFood(res.data);
      })
      .catch((err) => console.log(err));
  }

  async function searchFoodCat() {
    await axios
      .get(
        `http://localhost:888/api/service/food/listeFoodByCategory?category=${foodCat}`,
        {
          headers: {
            //Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            //"Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
            /*"Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",*/
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.length > 0) {
          //let x = isNone;
          setIsNoneFood(false);
          setFoodCatResult(res.data);
        } else {
          //let x = isNone;
          setIsNoneFood(true);
          setFoodCatResult([
            {
              id: 0,
              name: "",
              image: "",
              calories: 0,
              category: {
                id: 0,
                name: "",
                description: "",
                image: "",
              },
              detailfood: {
                idnutritiondetails: 0,
                id: 0,
                name: "",
                calories: 0,
                eau: 0,
                proteins: 0,
                sucres: 0,
                fibres: 0,
                acidessatures: 0,
                cholesterol: 0,
                calcium: 0,
                potasium: 0,
                sodium: 0,
                vitamineB9: 0,
                vitamineC: 0,
                vitamineB6: 0,
                vitamineB3: 0,
                vitamineB12: 0,
                vitamineD: 0,
                vitamineE: 0,
              },
            },
          ]);
        }
      })
      .catch((err) => console.log(err));
  }

  async function searchFoodKey() {
    await axios
      .get(
        `http://localhost:888/api/service/food/listeFoodByKeyWord?keyword=${foodKey}`,
        {
          headers: {
            //Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            //"Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
            /*"Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",*/
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        if (res.data.length > 0) {
          //let x = isNone;
          setIsNoneFood(false);
          setFoodKeyResult(res.data);
        } else {
          //let x = isNone;
          setIsNoneFood(true);
          setFoodKeyResult([
            {
              id: 0,
              name: "",
              image: "",
              calories: 0,
              category: {
                id: 0,
                name: "",
                description: "",
                image: "",
              },
              detailfood: {
                idnutritiondetails: 0,
                id: 0,
                name: "",
                calories: 0,
                eau: 0,
                proteins: 0,
                sucres: 0,
                fibres: 0,
                acidessatures: 0,
                cholesterol: 0,
                calcium: 0,
                potasium: 0,
                sodium: 0,
                vitamineB9: 0,
                vitamineC: 0,
                vitamineB6: 0,
                vitamineB3: 0,
                vitamineB12: 0,
                vitamineD: 0,
                vitamineE: 0,
              },
            },
          ]);
        }
      })
      .catch((err) => console.log(err));
  }

  async function searchFoodCal() {
    await axios
      .get(
        `http://localhost:888/api/service/food/listeFoodCaloriesBetween?from=${parseFloat(
          foodCalFrom
        )}&to=${parseFloat(foodCalTo)}`,
        {
          headers: {
            //Accept: "application/json",
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
            //"Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
            /*"Access-Control-Allow-Headers":
                "Origin, X-Requested-With, Content-Type, Accept",*/
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      )
      .then((res) => {
        console.log(res.data);
        if (res.data.length > 0) {
          //let x = isNone;

          setIsNoneFood(false);
          setFoodCalResult(res.data);
        } else {
          //let x = isNone;
          setIsNoneFood(true);
          setFoodCalResult([
            {
              id: 0,
              name: "",
              image: "",
              calories: 0,
              category: {
                id: 0,
                name: "",
                description: "",
                image: "",
              },
              detailfood: {
                idnutritiondetails: 0,
                id: 0,
                name: "",
                calories: 0,
                eau: 0,
                proteins: 0,
                sucres: 0,
                fibres: 0,
                acidessatures: 0,
                cholesterol: 0,
                calcium: 0,
                potasium: 0,
                sodium: 0,
                vitamineB9: 0,
                vitamineC: 0,
                vitamineB6: 0,
                vitamineB3: 0,
                vitamineB12: 0,
                vitamineD: 0,
                vitamineE: 0,
              },
            },
          ]);
        }
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getListeExercices();
    getListeFood();
    //searchExoCat();
  }, []);
  //console.log(isNone);
  const exerciceComponent = () => {
    //console.log(exoCatResult.length);
    if (
      isNone === true &&
      (exoCatResult[0].id === 0 ||
        exoKeyResult[0].id === 0 ||
        exoCalResult[0].id === 0)
    ) {
      return <IonText>Aucun résultat</IonText>;
    }
    let exos = exercices;
    if (exoCatResult.length > 1 || exoCatResult[0].id != 0) {
      exos = exoCatResult;
    }
    //console.log(exoKeyResult[0].id);
    //console.log(exoKeyResult.length);
    if (exoKeyResult.length > 1 || exoKeyResult[0].id != 0) {
      //exos = exos.filter((x: any) => exoKeyResult.includes(x));
      exos = exos.filter((x: any) => {
        //console.log(x.id);
        let arr = exoKeyResult.filter((k: any) => k.id != x.id);
        //console.log(arr);
        return !(arr.length === 1);
      });
    }
    //console.log(exoCalResult);
    if (exoCalResult.length > 1 || exoCalResult[0].id != 0) {
      exos = exos.filter((x: any) => {
        let arr = exoCalResult.filter((k: any) => k.id === x.id);
        return !(arr.length === 0);
      });
    }
    return exos.map((exo: any) => {
      return (
        <IonCard class="aliment">
          <IonImg src={unknown}></IonImg>
          <IonCardHeader>{exo.name}</IonCardHeader>
          <IonCardContent>
            Durée : {exo.duration} <br />
            Calories Brulés : {exo.caloriesBurned} <br />
            Catégorie : {exo.category.name} <br />
          </IonCardContent>
        </IonCard>
      );
    });
  };

  const foodComponent = () => {
    if (
      isNoneFood === true &&
      (foodCatResult[0].id === 0 ||
        foodKeyResult[0].id === 0 ||
        foodCalResult[0].id === 0)
    ) {
      return <IonText>Aucun résultat</IonText>;
    }
    let foods = food;
    if (foodCatResult.length > 1 || foodCatResult[0].id != 0) {
      foods = foodCatResult;
    }
    if (foodKeyResult.length > 1 || foodKeyResult[0].id != 0) {
      foods = foods.filter((x: any) => {
        let arr = foodKeyResult.filter((k: any) => k.id != x.id);
        return !(arr.length === 1);
      });
    }
    //console.log(foodCalResult);
    if (foodCalResult.length > 1 || foodCalResult[0].id != 0) {
      foods = foods.filter((x: any) => {
        let arr = foodCalResult.filter((k: any) => k.id === x.id);
        return !(arr.length === 0);
      });
    }

    return foods.map((f: any) => {
      return (
        <IonCard class="aliment">
          <IonImg src={unknown}></IonImg>
          <IonCardHeader>{f.name}</IonCardHeader>
          <IonCardContent>
            Calories : {f.calories} <br />
            Proteins : {f.detailfood.proteins} <br />
            Sucres : {f.detailfood.sucres} <br />
            Eau : {f.detailfood.eau} <br />
            Catégorie : {f.category.name} <br />
          </IonCardContent>
        </IonCard>
      );
    });
  };

  return (
    <IonContent class="aliments" scrollX={true}>
      <h3 className="title">Exercices</h3>
      <IonRow>
        <IonCol>
          <IonSearchbar
            placeholder="Catégorie"
            value={exoCat}
            onIonChange={(e) => setExoCat(e.detail.value!)}
          ></IonSearchbar>
        </IonCol>
        <IonCol>
          <IonSearchbar
            placeholder="Mot clé"
            value={exoKey}
            onIonChange={(e) => setExoKey(e.detail.value!)}
          ></IonSearchbar>
        </IonCol>
        <IonCol>
          <IonSearchbar
            placeholder="Minimum calories"
            value={exoCalFrom}
            onIonChange={(e) => setExoCalFrom(e.detail.value!)}
          ></IonSearchbar>
        </IonCol>
        <IonCol>
          <IonSearchbar
            placeholder="Maximum calories"
            value={exoCalTo}
            onIonChange={(e) => setExoCalTo(e.detail.value!)}
          ></IonSearchbar>
        </IonCol>
        <IonCol size="2">
          <IonButton onClick={handleSearchExo} expand="block" color="primary">
            Ok
          </IonButton>
        </IonCol>
      </IonRow>
      <div className="list1">
        <IonRow class="roww" slot="fixed">
          {exerciceComponent()}
        </IonRow>
      </div>
      <h3 className="title">Aliments</h3>
      <IonRow>
        <IonCol>
          <IonSearchbar
            placeholder="Catégorie"
            value={foodCat}
            onIonChange={(e) => setFoodCat(e.detail.value!)}
          ></IonSearchbar>
        </IonCol>
        <IonCol>
          <IonSearchbar
            placeholder="Mot clé"
            value={foodKey}
            onIonChange={(e) => setFoodKey(e.detail.value!)}
          ></IonSearchbar>
        </IonCol>
        <IonCol>
          <IonSearchbar
            placeholder="Minimum calories"
            value={foodCalFrom}
            onIonChange={(e) => setFoodCalFrom(e.detail.value!)}
          ></IonSearchbar>
        </IonCol>
        <IonCol>
          <IonSearchbar
            placeholder="Maximum calories"
            value={foodCalTo}
            onIonChange={(e) => setFoodCalTo(e.detail.value!)}
          ></IonSearchbar>
        </IonCol>
        <IonCol size="2">
          <IonButton onClick={handleSearchFood} expand="block" color="primary">
            Ok
          </IonButton>
        </IonCol>
      </IonRow>
      <div className="list2">
        <IonRow class="roww2" slot="fixed">
          {foodComponent()}
        </IonRow>
      </div>
    </IonContent>
  );
};

export default Accueil;
