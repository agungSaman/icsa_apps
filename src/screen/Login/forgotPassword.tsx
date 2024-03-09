import * as React from 'react';
import dismissKeyboard from 'react-native/Libraries/Utilities/dismissKeyboard';
import {
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View,
  StatusBar,
  Text,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {SplashScreenProps} from '../../routing/AppNavigator';
import Button from '../../components/Button';
import FormTextInput from '../../components/FormTextInput';
import imageLogo from '../../assets/images/logo.png';
import colors from '../../config/colors';
import strings from '../../config/strings';
import constants from '../../config/constants';
import AuthService from '../../services/auth.service';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useHeaderHeight} from '@react-navigation/elements';
import CustomAlerts from '../../components/CustomAlert';

interface State {
  email: string;
  error: string;
  message: string;
  emailTouched: boolean;
  isLoading: boolean;
}

interface CsAlert {
  alertIcon: string;
  alertMessage: string;
  visible: boolean;
  dualButton: boolean;
}

const ForgotPasswordScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenProps>();

  const [visiState, setVisible] = React.useState<CsAlert>({
    alertIcon: '',
    alertMessage: '',
    visible: false,
    dualButton: false,
  });

  const [state, setState] = React.useState<State>({
    email: '',
    error: '',
    message: '',
    emailTouched: false,
    isLoading: false,
  });

  React.useEffect(() => {
    handleAlert(false, false, '', '');
  }, []);

  const phoneInputRef = React.useRef<FormTextInput>(null);
  const height = useHeaderHeight();

  const handleEmailChange = (email: string) => {
    setState(prev => ({...prev, email}));
  };

  const handleEmailSubmitPress = () => {
    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  };

  const handleEmailBlur = () => {
    setState(prev => ({...prev, emailTouched: true}));
  };

  const handleAlert = (
    status: boolean,
    dualButton: boolean,
    message: string,
    icon: string,
  ) => {
    setVisible(prev => ({
      ...prev,
      visible: status,
      dualButton: dualButton,
      alertMessage: message,
      alertIcon: icon,
    }));
  };

  const {email, emailTouched} = state;
  const emailError =
    !email && emailTouched ? strings.EMAIL_REQUIRED : undefined;

  const handleRegisterPress = async () => {
    try {
      setState(prev => ({
        ...prev,
        isLoading: true,
        error: '',
      }));

      dismissKeyboard();

      const data = await AuthService.forgotPassword(state.email);
      if (data !== null) {
        handleAlert(true, true, data.message, 'success');
        console.log('Forget Password successful', data);
      }
    } catch (error: any) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log('Forget Password error', error.response.data.message);
      handleAlert(true, false, error.response.data.message, 'error');
      setState(prev => ({
        ...prev,
        isLoading: false,
        message: resMessage,
      }));
    }
    console.log('Forgot password button pressed', state.email);
  };

  const handleBackToLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView
        style={styles.containerAvoid}
        keyboardVerticalOffset={height + 47}
        behavior={constants.IS_IOS ? 'padding' : 'position'}
        enabled>
        <StatusBar barStyle="dark-content" backgroundColor={colors.WHITE} />
        <Image source={imageLogo} style={styles.logo} />
        <CustomAlerts
          iconAlert={visiState.alertIcon}
          visible={visiState.visible}
          title={''}
          subTitle={visiState.alertMessage}
          isDualButton={visiState.dualButton}
          hideDialog={() => handleAlert(false, false, '', '')}
          actionDialog={function (): void {
            handleBackToLoginPress();
          }}
        />
        <Text style={styles.textHeader}>Reset Password</Text>
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

            <Button
              label={strings.SUBMIT}
              iconButton={false}
              onPress={handleRegisterPress}
              disabled={!email}
            />

            <TouchableOpacity onPress={handleBackToLoginPress}>
              <Text style={styles.createAccountText}>
                Back to{' '}
                <Text style={styles.createAccountButton}>Login Page</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0,
    height: 520,
    backgroundColor: colors.WHITE,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerCheckbox: {
    flex: 0,
    backgroundColor: colors.WHITE,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkboxContainer: {
    width: '100%',
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    marginRight: 15,
  },
  responsiveBox: {
    height: '100%',
    width: '100%',
  },
  containerAvoid: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerBox: {
    flex: 0,
    height: '63%',
    width: '100%',
    marginTop: 10,
    padding: 10,
    backgroundColor: colors.WHITE,
    justifyContent: 'space-between',
    borderWidth: 0.4,
    borderRadius: 10,
    borderColor: 'grey',
  },
  createAccountText: {
    fontSize: 16,
    textAlign: 'center',
    marginTop: 200,
  },
  createAccountButton: {
    color: colors.BLACK,
    fontWeight: 'bold',
  },
  logo: {
    flex: 0,
    width: 155,
    height: 77,
    marginTop: 190,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    width: '80%',
  },
  text: {
    fontSize: 12,
    fontWeight: '500',
    color: 'grey',
    justifyContent: 'flex-end',
    alignSelf: 'flex-end',
    fontFamily: 'Centrale Sans Light',
  },
  textHeader: {
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    justifyContent: 'center',
    alignSelf: 'center',
    marginTop: 40,
    fontFamily: 'Centrale Sans Light',
  },
  text1: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.BLACK,
    textAlign: 'justify',
    alignSelf: 'center',
    fontFamily: 'Centrale Sans Light',
  },
  text2: {
    fontSize: 13,
    fontWeight: '500',
    color: colors.DODGER_BLUE,
    textAlign: 'justify',
    alignSelf: 'center',
    fontFamily: 'Centrale Sans Light',
  },
});

export default ForgotPasswordScreen;
