import React, { useState, forwardRef } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useTheme } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import styles from './Style';

const FormInput = forwardRef((props, ref) => {
  const [hidePassword, setHidePassword] = useState(true);

  // const [inputAnimation, setInputAnimation] = useState(null);

  const { colors } = useTheme();

  const handlePressIconPassword = () =>
    setHidePassword(prevState => !prevState);

  // const startErrorAnimation = () => setInputAnimation('rubberBand');
  // const finishErrorAnimation = () => setInputAnimation(null);
  // const handleAnimationEnd = event => event.finished && finishErrorAnimation();

  // useEffect(() => {
  //   startErrorAnimation();
  // }, [props.error]);

  return (
    <View style={props.inputContainerStyle}>
      <Text
        style={[
          styles.label,
          {
            color: colors.primary,
          },
        ]}>
        {props.label}
      </Text>
      <Animatable.View
        style={[
          styles.textInputContainer,
          props.type === 'password' && styles.textInputPasswordContainer,
          {
            borderBottomColor: colors.border,
          },
        ]}
        // animation={inputAnimation}
        // onAnimationEnd={handleAnimationEnd}
      >
        <TextInput
          style={[
            styles.textInput,
            props.type === 'password' && styles.textInputPassword,
          ]}
          placeholderTextColor={colors.text}
          onChangeText={props.onChangeText}
          secureTextEntry={props.type === 'password' && hidePassword}
          ref={ref}
          {...props}
        />
        {props.type === 'password' && (
          <View>
            <Icon
              name={hidePassword ? 'eye' : 'eye-off'}
              size={30}
              color={colors.border}
              onPress={handlePressIconPassword}
            />
          </View>
        )}
      </Animatable.View>
    </View>
  );
});

export default FormInput;
