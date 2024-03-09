import React from 'react';
import {
  Image,
  NativeSyntheticEvent,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TextInputFocusEventData,
  TextInputProps,
  TouchableOpacity,
  View,
} from 'react-native';
import colors from '../config/colors';

type Props = TextInputProps & {
  error?: string;
};

interface State {
  isFocused: boolean;
  showPassword: boolean;
}

class FormTextPassword extends React.Component<Props, State> {
  textInputRef = React.createRef<TextInput>();

  readonly state: State = {
    isFocused: false,
    showPassword: false,
  };

  focus = () => {
    if (this.textInputRef.current) {
      this.textInputRef.current.focus();
    }
  };

  handleFocus = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState({isFocused: true});
    if (this.props.onFocus) {
      this.props.onFocus(e);
    }
  };

  handleBlur = (e: NativeSyntheticEvent<TextInputFocusEventData>) => {
    this.setState({isFocused: false});
    if (this.props.onBlur) {
      this.props.onBlur(e);
    }
  };

  toggleShowPassword = () => {
    console.log('icon clicked', this.state.showPassword);
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }));
  };

  render() {
    const {error, style, ...otherProps} = this.props;
    const {isFocused, showPassword} = this.state;

    return (
      <View style={[styles.container, style]}>
        <View style={styles.row}>
          <TextInput
            ref={this.textInputRef}
            selectionColor={colors.DODGER_BLUE}
            underlineColorAndroid={
              isFocused ? colors.DODGER_BLUE : colors.LIGHT_GRAY
            }
            style={styles.textInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            secureTextEntry={!showPassword}
            {...otherProps}
          />
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={this.toggleShowPassword}>
            <Image
              source={
                showPassword === false
                  ? require('../assets/icons/ic_eye_close.png')
                  : require('../assets/icons/ic_eye_open.png')
              }
              style={styles.iconMenu}
            />
          </TouchableOpacity>
        </View>
        <Text style={styles.errorText}>{error || ''}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    marginLeft: 10,
  },
  iconMenu: {
    flex: 0,
    width: 20,
    height: 20,
    tintColor: 'grey',
  },
  iconContainer: {
    padding: 10,
  },
  textInput: {
    height: 40,
    width: '90%',
    ...Platform.select({
      ios: {
        borderColor: colors.SILVER,
        borderBottomWidth: StyleSheet.hairlineWidth,
      },
      android: {
        paddingLeft: 6,
      },
    }),
  },
  errorText: {
    height: 20,
    color: colors.TORCH_RED,
    ...Platform.select({
      android: {
        paddingLeft: 6,
      },
    }),
  },
});

export default FormTextPassword;
