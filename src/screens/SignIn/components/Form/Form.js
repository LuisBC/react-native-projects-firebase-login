import React from 'react';
import { View, Text } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { useTheme } from '@react-navigation/native';
import { yupResolver } from '@hookform/resolvers/yup';

import FormInput from '@components/FormInput';
import FormSubmit from '@components/FormSubmit';
import FormError from '@components/FormError';

import { schema } from './validations';
import styles from './Style';

const Form = props => {
  const { colors } = useTheme();

  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    shouldFocusError: false,
  });

  return (
    <View style={styles.container}>
      <Text style={[styles.title, { color: colors.text }]}>Sign In</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            inputContainerStyle={styles.inputContainer}
            onBlur={onBlur}
            onChangeText={onChange}
            value={value}
            label="Email"
            keyboardType="email-address"
            autoCompleteType="email"
            autoCapitalize="none"
            {...register('email')}
          />
        )}
        name="email"
        defaultValue=""
      />
      {errors?.email && <FormError text={errors.email.message} />}
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <FormInput
            inputContainerStyle={styles.inputContainer}
            onChangeText={onChange}
            onBlur={onBlur}
            value={value}
            label="Password"
            autoCompleteType="password"
            type="password"
            autoCapitalize="none"
            {...register('password')}
          />
        )}
        name="password"
        defaultValue=""
      />
      {errors?.password && <FormError text={errors.password.message} />}
      <FormSubmit
        submitContainerStyle={styles.submitContainer}
        textButton="Sign In"
        onPress={handleSubmit(props.onSubmit)}
      />
    </View>
  );
};

export default Form;
