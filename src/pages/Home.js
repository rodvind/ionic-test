import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonMenu, IonRouterOutlet } from '@ionic/react';
import React from 'react';

import MenuButton from '../components/MenuButton'

// const openMenu = () => {
//   return (
//     <IonMenu {<IONMenu.open('start') />} ></IonMenu>
//   )
// }

const Home = (props) => {
  return (
    <>
      <IonMenu side="start" menuId="first">
        <IonHeader>
          <IonToolbar color="primary">
            <IonTitle>Start Menu</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonList>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
            <IonItem>Menu Item</IonItem>
          </IonList>
        </IonContent>
      </IonMenu>

      <MenuButton />
      <IonRouterOutlet id="first"></IonRouterOutlet>
    </>
  );
};

export default Home;
