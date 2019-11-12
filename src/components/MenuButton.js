/* eslint-disable no-restricted-globals */
import React from 'react'

import { IonPage, IonHeader, IonTabBar, IonButtons, IonMenuButton, IonTitle, IonContent, IonButton, IonList, IonItem, IonToolbar, IonRouterOutlet, IonMenu } from '@ionic/react'

const menuButt = () => (
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
)

const menuCtrl = document.querySelector("ion-router-outlet")

// const openMenu = await() => menuButt.open('first')
const MenuButton = () => (
  <IonPage>
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
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuButton autoHide={false} onClick={() => menuCtrl.open('first')}></IonMenuButton>
        </IonButtons>
        <IonTitle>Home</IonTitle>
      </IonToolbar>
    </IonHeader>
    {/* <IonContent>
      <IonButton  open onClick={() => open('sa')} ></IonButton>
    </IonContent> */}
    <IonRouterOutlet id="first"></IonRouterOutlet>
  </IonPage>
)

export default MenuButton