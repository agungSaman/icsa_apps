import React, {useEffect} from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  StatusBar,
  Text,
} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {useNavigation} from '@react-navigation/native';
import {SplashScreenProps} from '../../routing/AppNavigator';
import Button from '../../components/Button';
import FormTextInput from '../../components/FormTextInput';
import imageLogo from '../../assets/images/logo.png';
import colors from '../../config/colors';
import strings from '../../config/strings';
import constants from '../../config/constants';
import AuthService from '../../services/auth.service';
import {MainRoutes} from '../../routing/routes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useHeaderHeight} from '@react-navigation/elements';
import auth from '@react-native-firebase/auth';
import FormTextPassword from '../../components/FormTextPassword';

interface State {
  email: string;
  password: string;
  error: string;
  message: string;
  emailTouched: boolean;
  passwordTouched: boolean;
  isLoading: boolean;
}

const LoginScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenProps>();
  const webClientId =
    '764229525776-uqccc9s5jd6hcq9kmnacou55djp07j10.apps.googleusercontent.com';
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['email', 'profile'],
      webClientId: webClientId,
      offlineAccess: false,
    });
  }, []);

  const [state, setState] = React.useState<State>({
    email: '',
    password: '',
    error: '',
    message: '',
    emailTouched: false,
    passwordTouched: false,
    isLoading: false,
  });

  const passwordInputRef = React.useRef<FormTextPassword>(null);
  const height = useHeaderHeight();

  const handleEmailChange = (email: string) => {
    setState(prev => ({...prev, email}));
  };

  const handlePasswordChange = (password: string) => {
    setState(prev => ({...prev, password}));
  };

  const handleEmailSubmitPress = () => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };

  const handleEmailBlur = () => {
    setState(prev => ({...prev, emailTouched: true}));
  };

  const handlePasswordBlur = () => {
    setState(prev => ({...prev, passwordTouched: true}));
  };

  const handleLoginPress = async () => {
    try {
      setState(prev => ({
        ...prev,
        isLoading: true,
        error: '',
      }));

      dismissKeyboard();

      const data = await AuthService.login(state.email, state.password);
      if (data !== null) {
        if (navigation) {
          navigation.navigate(MainRoutes.MainPage);
        } else {
          console.error('Navigation object is undefined.');
        }
      }

      console.log('Login successful', data);
    } catch (error: any) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log('Login error', error);
      setState(prev => ({
        ...prev,
        isLoading: false,
        message: resMessage,
      }));
    }
    console.log('Login button pressed', state.email, state.password);
  };

  const handleForgetPasswordPress = () => {
    console.log('ForgotPassword');
    navigation.navigate(MainRoutes.ForgotPassword);
  };

  const handleGooglePress = async () => {
    try {
      GoogleSignin.configure({
        scopes: ['email', 'profile'],
        webClientId: webClientId,
        offlineAccess: false,
      });
      await GoogleSignin.hasPlayServices();
      console.log('reached google sign in');
      const userInfo = await GoogleSignin.signIn();
      console.log('userinfo', userInfo);
      const credential = auth.GoogleAuthProvider.credential(userInfo.idToken);

      console.log('login credential', credential);

      await auth().signInWithCredential(credential);

      try {
        setState(prev => ({
          ...prev,
          isLoading: true,
          error: '',
        }));

        dismissKeyboard();

        const data = await AuthService.authByCredential(
          userInfo.user.id,
          userInfo.user.name ?? '',
          userInfo.user.photo ?? '',
          credential.providerId,
          userInfo.user.email,
        );
        if (data !== null) {
          if (navigation) {
            navigation.navigate(MainRoutes.MainPage);
          } else {
            console.error('Navigation object is undefined.');
          }
        }

        console.log('Login successful', data);
      } catch (error: any) {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        console.log('Login error', error);
        setState(prev => ({
          ...prev,
          isLoading: false,
          message: resMessage,
        }));
      }
    } catch (error) {
      console.log('ERROR play service: ' + JSON.stringify(error));
    }
  };

  const handleCreateAccountPress = () => {
    navigation.navigate('Registration');
  };

  const {email, password, emailTouched, passwordTouched} = state;
  const emailError =
    !email && emailTouched ? strings.EMAIL_REQUIRED : undefined;
  const passwordError =
    !password && passwordTouched ? strings.PASSWORD_REQUIRED : undefined;

  return (
    <View style={styles.container}>
      <View style={styles.responsiveBox}>
        <StatusBar barStyle="default" backgroundColor={colors.WHITE} />
        <Image source={imageLogo} style={styles.logo} />
        <KeyboardAvoidingView
          style={styles.containerAvoid}
          keyboardVerticalOffset={height + 47}
          behavior={constants.IS_IOS ? 'padding' : 'position'}
          enabled>
          <View style={styles.containerBox}>
            <View style={styles.form}>
              <FormTextInput
                value={email}
                onChangeText={handleEmailChange}
                onSubmitEditing={handleEmailSubmitPress}
                placeholder={strings.EMAIL_PLACEHOLDER}
                underlineColorAndroid={colors.BLACK}
                autoCorrect={false}
                keyboardType="email-address"
                returnKeyType="next"
                onBlur={handleEmailBlur}
                error={emailError}
                blurOnSubmit={constants.IS_IOS}
              />
              <FormTextPassword
                ref={passwordInputRef}
                value={password}
                onChangeText={handlePasswordChange}
                placeholder={strings.PASSWORD_PLACEHOLDER}
                underlineColorAndroid={colors.BLACK}
                returnKeyType="done"
                onBlur={handlePasswordBlur}
                error={passwordError}
              />

              <TouchableOpacity onPress={handleForgetPasswordPress}>
                <View style={styles.text}>
                  <Text>Forgot your Password?</Text>
                </View>
              </TouchableOpacity>

              <Button
                label={strings.LOGIN}
                iconButton={false}
                onPress={handleLoginPress}
                disabled={!email || !password}
              />
            </View>
            <View style={styles.text1}>
              <Text>{strings.TEXT_DOTTED}</Text>
            </View>

            <Button
              label={strings.LOGIN_GOOGLE}
              iconButton={true}
              onPress={handleGooglePress}
              disabled={false}
            />

            <TouchableOpacity onPress={handleCreateAccountPress}>
              <Text style={styles.createAccountText}>
                Don't have an account?{' '}
                <Text style={styles.createAccountButton}>Create Account</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: '80%',
    backgroundColor: colors.WHITE,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  responsiveBox: {
    height: '100%',
    width: '100%',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerAvoid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerBox: {
    flex: 0,
    height: '98%',
    width: '100%',
    marginTop: 75,
    padding: 20,
    backgroundColor: colors.WHITE,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 0.4,
    borderRadius: 10,
    borderColor: 'grey',
  },
  createAccountText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 20,
  },
  createAccountButton: {
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  logo: {
    flex: 0,
    width: 155,
    height: 77,
    marginTop: 160,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    flex: 0,
    justifyContent: 'center',
    width: '80%',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    marginBottom: 10,
    fontFamily: 'Centrale Sans Light',
  },
  text1: {
    fontSize: 12,
    fontWeight: '500',
    opacity: 0.5,
    color: 'grey',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: 10,
    fontFamily: 'Centrale Sans Light',
  },
  icon: {
    marginLeft: 10,
  },
});

export default LoginScreen;
