import React from 'react';
// import {NavigationContainer} from '@react-navigation/native';
import LoginScreen from '../screen/Login/Login';
import MainScreen from '../screen/Main/Main_page';
import {MainRoutes, MainStack, MainStackParamList} from './routes';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import SplashScreen from '../screen/Splash/SplashScreen';
import AgendaScreen from '../screen/Agenda/Agenda_page';
import MyHomeMenus from '../components/MyHomeMenu';
import {RouteProp} from '@react-navigation/native';
import PaymentScreen from '../screen/Payment/Payment_page';
import NewsMainPage from '../screen/News/News_page';
import AboutUsPage from '../screen/AboutUs/AboutUs_page';
import RegisterScreen from '../screen/Login/register';
import ForgotPasswordScreen from '../screen/Login/forgotPassword';
import TermAndConditionScreen from '../components/TermsAndCondition';
import PrivacyPolicyScreen from '../components/PrivacyPolicy';
import ProfileUsScreen from '../screen/AboutUs/ProfileUs_page';
import HistoryMilestoneScreen from '../screen/AboutUs/HistoryMilestone_page';
import AchievementScreen from '../screen/AboutUs/Achievement_page';
import MembershipScreen from '../screen/AboutUs/Membership_page';
import OrganizationScreen from '../screen/AboutUs/Organization_page';
import SecretariatScreen from '../screen/AboutUs/Secretariat_page';
import MemberListScreen from '../screen/AboutUs/Component/member_list';

const AppNavigator: React.FC = () => {
  return (
    <MainStack.Navigator initialRouteName={MainRoutes.Splash}>
      <MainStack.Screen
        name={MainRoutes.Splash}
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.Login}
        component={LoginScreen}
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'red',
          },
        }}
      />
      <MainStack.Screen
        name={MainRoutes.MainPage}
        component={MainScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.HomeMenus}
        component={MyHomeMenus}
        options={{headerShown: true}}
      />
      <MainStack.Screen
        name={MainRoutes.AgendaPage}
        component={AgendaScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.PaymenScreen}
        component={PaymentScreen}
        options={{headerShown: true}}
      />
      <MainStack.Screen
        name={MainRoutes.NewsMainPage}
        component={NewsMainPage}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.AboutUs}
        component={AboutUsPage}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.Register}
        component={RegisterScreen}
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'red',
          },
        }}
      />
      <MainStack.Screen
        name={MainRoutes.ForgotPassword}
        component={ForgotPasswordScreen}
        options={{
          headerShown: false,
          cardStyle: {
            backgroundColor: 'red',
          },
        }}
      />
      <MainStack.Screen
        name={MainRoutes.TermAndCondition}
        component={TermAndConditionScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.PrivacyPolicy}
        component={PrivacyPolicyScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.ProfileUs}
        component={ProfileUsScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.HistoriMileston}
        component={HistoryMilestoneScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.Achievement}
        component={AchievementScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.Membership}
        component={MembershipScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.Organization}
        component={OrganizationScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.Secretariat}
        component={SecretariatScreen}
        options={{headerShown: false}}
      />
      <MainStack.Screen
        name={MainRoutes.MemberList}
        component={MemberListScreen}
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};

export default AppNavigator;

export type SplashScreenProps = {
  [x: string]: any;
  navigation: NativeStackScreenProps<MainStackParamList>;
  route: RouteProp<MainStackParamList>;
};

export type MessageNavProps<T extends keyof MainStackParamList> = {
  navigation: NativeStackScreenProps<MainStackParamList, T>;
  route: RouteProp<MainStackParamList, T>;
};
