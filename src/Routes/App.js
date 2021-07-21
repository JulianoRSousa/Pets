import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createDrawerNavigator, drawer } from "@react-navigation/drawer";
import Feed from "../screen/Feed/Feed";
import Header from "../components/header/header";
import CreatePost from "../screen/CreatePost/CreatePost";
import Adoption from "../screen/Adoption/Adoption";
import MyProfile from '../screen/MyProfile/MyProfile';

function App() {
  const AppStack = createStackNavigator();
  const AppTabsNavigator = createBottomTabNavigator();
  const AppDrawer = createDrawerNavigator();

  function FeedGroup(){
    return (
      <AppStack.Navigator>
        <AppStack.Screen name='Feed' options={{header:()=> <Header showTittle={true} showMenu={true} />}} component={Feed}/>
      </AppStack.Navigator>
    )
  }
  function AdoptionGroup(){
   return (
     <AppStack.Navigator>
       <AppStack.Screen name='Adoção' options={{header:()=> <Header showTittle={true} showMenu={true} />}} component={Adoption}/>
     </AppStack.Navigator>
   )
 }
 function MyProfileGroup(){
   return (
     <AppStack.Navigator>
       <AppStack.Screen name='Meu Perfil' options={{header:()=> <Header showTittle={true} showMenu={true} />}} component={MyProfile}/>
     </AppStack.Navigator>
   )
 }
 function CreatePostGroup(){
   return (
     <AppStack.Navigator>
       <AppStack.Screen name='Novo' options={{header:()=> <Header showBackButton={false} showTittle={true} showMenu={true} />}} component={CreatePost}/>
     </AppStack.Navigator>
   )
 }


  function AppTabs() {
    return (
      <AppTabsNavigator.Navigator>
        <AppStack.Screen
          name="Feed"
          options={{
            headerShown: true,
            header: () => (
              <Header showMenu={true} showTittle={true} showBackButton={true} />
            ),
          }}
          component={FeedGroup}
        />
        <AppStack.Screen
          name="Adoção"
          options={{
            headerShown: true,
            header: () => (
              <Header showMenu={true} showTittle={true} showBackButton={true} />
            ),
          }}
          component={AdoptionGroup}
        />
        <AppStack.Screen
          name="Meu Perfil"
          options={{
            headerShown: true,
            header: () => (
              <Header showMenu={true} showTittle={true} showBackButton={true} />
            ),
          }}
          component={MyProfileGroup}
        />
        <AppStack.Screen
          name="Novo"
          options={{
            headerShown: true,
            header: () => (
              <Header showMenu={true} showTittle={true} showBackButton={true} />
            ),
          }}
          component={CreatePostGroup}
        />
      </AppTabsNavigator.Navigator>
    );
  }

  return (
    <AppDrawer.Navigator drawerPosition='right'>
      <AppStack.Screen name="Pets" options={{headerShown:false}} component={AppTabs} />
    </AppDrawer.Navigator>
  );
}

export default App;
