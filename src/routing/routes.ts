import {createStackNavigator} from '@react-navigation/stack';

export enum MainRoutes {
  Splash = 'Splash',
  Login = 'Login',
  MainPage = 'MainPage',
  HomeMenus = 'MyHomeMenus',
  AgendaPage = 'AgendaPage',
  ContactUs = 'ContactUs',
  PaymenScreen = 'PaymentScreen',
  NewsMainPage = 'NewsMainPage',
  AboutUs = 'AboutUs',
  Register = 'Registration',
  ForgotPassword = 'ForgotPassword',
  TermAndCondition = 'TermAndCondition',
  PrivacyPolicy = 'PrivacyPolicy',
  ProfileUs = 'ProfileUs',
  HistoriMileston = 'Historimilestone',
  Achievement = 'Achievement',
  Membership = 'Membership',
  Organization = 'Organization',
  Secretariat = 'Secretariat',
  MemberList = 'MemberList',
}

export type MainStackParamList = {
  [MainRoutes.Splash]: undefined;
  [MainRoutes.Login]: undefined;
  [MainRoutes.MainPage]: undefined;
  [MainRoutes.HomeMenus]: undefined;
  [MainRoutes.AgendaPage]: undefined;
  [MainRoutes.ContactUs]: undefined;
  [MainRoutes.PaymenScreen]: undefined;
  [MainRoutes.NewsMainPage]: undefined;
  [MainRoutes.AboutUs]: undefined;
  [MainRoutes.Register]: undefined;
  [MainRoutes.ForgotPassword]: undefined;
  [MainRoutes.TermAndCondition]: undefined;
  [MainRoutes.PrivacyPolicy]: undefined;
  [MainRoutes.ProfileUs]: undefined;
  [MainRoutes.HistoriMileston]: undefined;
  [MainRoutes.Achievement]: undefined;
  [MainRoutes.Membership]: undefined;
  [MainRoutes.Organization]: undefined;
  [MainRoutes.Secretariat]: undefined;
  [MainRoutes.MemberList]: undefined;
};

export const MainStack = createStackNavigator<MainStackParamList>();
