import React from 'react';

import {View} from 'react-native';
import {AppButton, AppInput} from 'src/component';

import {Controller, useForm} from 'react-hook-form';

import {CommonStyle, Constants, Messages, ThemeUtils} from 'src/utils';
import styles from './styles';

const Login = (props) => {
    /*  Life-cycles Methods */
    const {
        register,
        setValue,
        control,
        reset,
        clearErrors,
        getValues,
        handleSubmit,
        formState: {errors},
    } = useForm();

    /*  Public Interface Methods */
    /*  Validation Methods  */
    /*  UI Events Methods   */
    /*  Custom-Component sub-render Methods */

    const onSubmit = () => {
        console.log('onSubmitted');
    };

    return (
        <View style={CommonStyle.master_full_flex}>
            <View style={styles.container}>
                <Controller
                    control={control}
                    render={({onChange, onBlur, value}) => (
                        <AppInput
                            onFocus={() => clearErrors('email')}
                            error={errors?.email?.message}
                            value={value}
                            label={'Email'}
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                    name={'email'}
                    defaultValue={''}
                    rules={{
                        required: Messages.Errors.emailBlank,
                        pattern: {
                            value: Constants.Regex.PASSWORD,
                            message: Messages.Errors.emailValidity,
                        },
                    }}
                />

                <Controller
                    control={control}
                    render={({onChange, onBlur, value}) => (
                        <AppInput
                            onFocus={() => clearErrors('password')}
                            error={errors?.password?.message}
                            value={value}
                            label={'Password'}
                            secureTextEntry
                            onBlur={onBlur}
                            onChangeText={onChange}
                        />
                    )}
                    name={'password'}
                    defaultValue={''}
                    rules={{required: 'Password is required.'}}
                />

                <AppButton
                    click={handleSubmit(onSubmit)}
                    width={'100%'}
                    mt={ThemeUtils.relativeRealHeight(4)}
                    style={CommonStyle.full_flex}>
                    {'Login'}
                </AppButton>
            </View>
        </View>
    );
};

export default Login;
