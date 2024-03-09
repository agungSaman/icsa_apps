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
import CheckBox from '@react-native-community/checkbox';
import CustomAlerts from '../../components/CustomAlert';
import FormTextPassword from '../../components/FormTextPassword';

interface State {
  email: string;
  phone: string;
  password: string;
  error: string;
  message: string;
  emailTouched: boolean;
  phoneTouched: boolean;
  passwordTouched: boolean;
  isLoading: boolean;
  isChecked: boolean;
}

interface CsAlert {
  alertIcon: string;
  alertMessage: string;
  visible: boolean;
  dualButton: boolean;
}

const RegisterScreen: React.FC = () => {
  const navigation = useNavigation<SplashScreenProps>();

  const [state, setState] = React.useState<State>({
    email: '',
    phone: '',
    password: '',
    error: '',
    message: '',
    emailTouched: false,
    phoneTouched: false,
    passwordTouched: false,
    isLoading: false,
    isChecked: true,
  });

  const [visiState, setVisible] = React.useState<CsAlert>({
    alertIcon: '',
    alertMessage: '',
    visible: false,
    dualButton: false,
  });

  React.useEffect(() => {
    handleAlert(false, false, '', '');
  }, []);

  const passwordInputRef = React.useRef<FormTextInput>(null);
  const phoneInputRef = React.useRef<FormTextInput>(null);
  const height = useHeaderHeight();

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

  const handleEmailChange = (email: string) => {
    setState(prev => ({...prev, email}));
  };

  const handlePhoneChange = (phone: string) => {
    setState(prev => ({...prev, phone}));
  };

  const handlePasswordChange = (password: string) => {
    setState(prev => ({...prev, password}));
  };

  const handleEmailSubmitPress = () => {
    if (phoneInputRef.current) {
      phoneInputRef.current.focus();
    }
  };

  const handlePhoneSubmitPress = () => {
    if (passwordInputRef.current) {
      passwordInputRef.current.focus();
    }
  };

  const handleEmailBlur = () => {
    setState(prev => ({...prev, emailTouched: true}));
  };

  const handlePhoneBlur = () => {
    setState(prev => ({...prev, phoneTouched: true}));
  };

  const handlePasswordBlur = () => {
    setState(prev => ({...prev, passwordTouched: true}));
  };

  const handleCheckboxToggle = () => {
    if (state.isChecked === true) {
      setState(prev => ({...prev, isChecked: false}));
    } else {
      setState(prev => ({...prev, isChecked: true}));
    }
  };

  const {email, phone, password, emailTouched, phoneTouched, passwordTouched} =
    state;
  const emailError =
    !email && emailTouched ? strings.EMAIL_REQUIRED : undefined;
  const phoneError =
    !phone && phoneTouched ? strings.PHONE_REQUIRED : undefined;
  const passwordError =
    !password && passwordTouched ? strings.PASSWORD_REQUIRED : undefined;

  const handleRegisterPress = async () => {
    try {
      setState(prev => ({
        ...prev,
        isLoading: true,
        error: '',
      }));

      dismissKeyboard();

      const data = await AuthService.register(
        state.phone,
        state.email,
        state.password,
      );
      if (data !== null) {
        handleAlert(true, true, data.message, 'success');
        console.log('Register successful', data);
      }
    } catch (error: any) {
      const resMessage =
        (error.response &&
          error.response.data &&
          error.response.data.message) ||
        error.message ||
        error.toString();

      console.log('Register error', error.response.data.message);
      handleAlert(true, false, error.response.data.message, 'error');
      setState(prev => ({
        ...prev,
        isLoading: false,
        message: resMessage,
      }));
    }
    console.log(
      'Registration button pressed',
      state.phone,
      state.email,
      state.password,
    );
  };

  const handleBackToLoginPress = () => {
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View style={styles.responsiveBox}>
        <StatusBar barStyle="default" backgroundColor={colors.WHITE} />
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
        <Text style={styles.textHeader}>Create Account</Text>
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
              <FormTextInput
                ref={phoneInputRef}
                value={phone}
                onChangeText={handlePhoneChange}
                onSubmitEditing={handlePhoneSubmitPress}
                placeholder={strings.PHONE_PLACEHOLDER}
                underlineColorAndroid={colors.BLACK}
                autoCorrect={false}
                keyboardType="name-phone-pad"
                returnKeyType="next"
                onBlur={handlePhoneBlur}
                error={phoneError}
                blurOnSubmit={constants.IS_IOS}
              />
              <FormTextPassword
                value={password}
                onChangeText={handlePasswordChange}
                placeholder={strings.PASSWORD_PLACEHOLDER}
                underlineColorAndroid={colors.BLACK}
                returnKeyType="done"
                onBlur={handlePasswordBlur}
                error={passwordError}
              />

              <View style={styles.checkboxContainer}>
                <CheckBox
                  value={state.isChecked}
                  onValueChange={handleCheckboxToggle}
                  style={styles.checkbox}
                  tintColors={{true: colors.BLACK}}
                />
                <Text style={styles.text1}>
                  I have read and agree to{'  '}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate('TermAndCondition');
                      console.log('term condition clicked');
                    }}>
                    <Text style={styles.text2}>Terms Conditions</Text>
                  </TouchableOpacity>{' '}
                  and{' '}
                  <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                      navigation.navigate('PrivacyPolicy');
                      console.log('policy clicked');
                    }}>
                    <Text style={styles.text2}>Privacy Policy</Text>
                  </TouchableOpacity>
                </Text>
              </View>

              <Button
                label={strings.REGISTER}
                iconButton={false}
                onPress={handleRegisterPress}
                disabled={!email || !phone || !password || !state.isChecked}
              />
            </View>
            <TouchableOpacity onPress={handleBackToLoginPress}>
              <Text style={styles.createAccountText}>
                Already have Account?{' '}
                <Text style={styles.createAccountButton}>Sign In</Text>
              </Text>
            </TouchableOpacity>
          </View>
        </KeyboardAvoidingView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    height: 14.5,
  },
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
    height: '142%',
    width: '100%',
    marginTop: 10,
    padding: 15,
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
    marginTop: 10,
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
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
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
    marginTop: 30,
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

export default RegisterScreen;
