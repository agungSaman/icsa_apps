import * as React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import colors from '../config/colors';

interface Props {
  disabled?: boolean;
  iconButton?: boolean;
  label: string;
  onPress: () => void;
}

class Button extends React.Component<Props> {
  render() {
    const {disabled, iconButton, label, onPress} = this.props;
    // If the button is disabled we lower its opacity
    const containerStyle = [
      label === 'Join Us' ? styles.containerRed : styles.container,
      disabled ? styles.containerDisabled : styles.containerEnabled,
    ];

    return (
      <TouchableOpacity
        style={containerStyle}
        onPress={onPress}
        disabled={disabled}>
        {iconButton ? (
          <View style={styles.row}>
            <Image
              source={require('../assets/icons/ic_google.png')}
              style={styles.icon}
            />
            <Text style={styles.text}>{label}</Text>
          </View>
        ) : (
          <View style={styles.row}>
            <Text style={styles.text}>{label}</Text>
          </View>
        )}
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.BLACK,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  containerRed: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.RED,
    marginBottom: 12,
    paddingVertical: 12,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(255,255,255,0.7)',
  },
  containerEnabled: {
    opacity: 1,
  },
  containerDisabled: {
    opacity: 0.3,
  },
  text: {
    color: colors.WHITE,
    textAlign: 'center',
    fontFamily: 'Centrale Sans Light',
    height: 20,
  },
  row: {
    width: 330,
    flexDirection: 'row',
    justifyContent: 'center',
    alignContent: 'center',
  },
  icon: {
    flex: 0,
    width: 20,
    height: 20,
    marginRight: 22,
    alignItems: 'center',
  },
});

export default Button;
