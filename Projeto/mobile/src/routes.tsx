import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const { Navigator, Screen } = createStackNavigator();

import SGMap from './pages/SGMap';
import PointDetails from './pages/PointDetails';
import SelectMapPosition from './pages/CreatePoint/SelectMapPosition';
import PointData from './pages/CreatePoint/PointData';
import Header from './components/Header'
import Profile from './pages/Profile';
import ProfileData from './pages/ProfileData';
import Recharge from './pages/Recharge';
import Extract from './pages/Extract';
import Hours from './pages/Hours';
import Login from './pages/Login/Login';
import CreatUser from './pages/Login/CreatUser';

export default function Routes() {
  return (
    <NavigationContainer>
      <Navigator screenOptions={{ headerShown: false, cardStyle: { backgroundColor: '#F2F3F5'}}}>
        <Screen name="Login" component={Login} options={{
          headerShown: false,
          header: () => <Header showCancel={false} title="Login" />
        }} />
        <Screen name="CreatUser" component={CreatUser} options={{
          headerShown: false,
          header: () => <Header showCancel={false} title="Cadastro" />
        }} />
        <Screen name="SGMap" component={SGMap} />
        <Screen name='Profile' component={Profile} options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Perfil" />
        }} />
        <Screen name='ProfileData' component={ProfileData} options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Meus Dados" />
        }} />
        <Screen name='Recharge' component={Recharge} options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Recarga" />
        }} />
        <Screen name='Extract' component={Extract} options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Extrato" />
        }} />
        <Screen name="PointDetails" component={PointDetails} options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Ponto" />
        }} />
        <Screen name="Hours" component={Hours} options={{
          headerShown: true,
          header: () => <Header showCancel={false} title="Horários" />
        }} />
        <Screen name="SelectMapPosition" component={SelectMapPosition} options={{
          headerShown: true,
          header: () => <Header title="Selecione no Mapa" />
        }} />
        <Screen name="PointData" component={PointData} options={{
          headerShown: true,
          header: () => <Header title="Informe os Dados" />
        }} />
      </Navigator>
    </NavigationContainer>
  )
}