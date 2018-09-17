import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableHighlight, KeyboardAvoidingView } from 'react-native';

export default class App extends React.Component {
    render() {
        return (
            <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                <View style={styles.redScreen}>
                    <Image
                        source={require('./assets/logo.png')}
                        style={{ width: 200, height: 200 }}
                    />
                    <View style={styles.whiteScreen}>
                        <View style={styles.usernameForm}>
                            <Text
                                style={styles.addUsernameAndPassword}
                            >Choose a username and password</Text>
                            <TextInput
                                style={styles.usernameStyle}
                                onChangeText={(text) => this.setState({ text })}
                                keyboardType="username"
                                placeholder="Username"
                            />
                            <TextInput
                                style={styles.passwordStyle}
                                onChangeText={(text) => this.setState({ text })}
                                keyboardType="password"
                                placeholder="Password"
                            />
                            <TextInput
                                style={styles.confirmPasswordStyle}
                                onChangeText={(text) => this.setState({ text })}
                                keyboardType="confirmPassword"
                                placeholder="Confirm Password"
                            />
                            <TouchableHighlight
                                style={styles.continue}>
                                <Text
                                    style={styles.continueText}
                                >Continue</Text>
                            </TouchableHighlight>
                        </View>

                    </View>

                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    redScreen: {
        flex: 1,
        backgroundColor: '#D43939',
        alignItems: 'center',
        width: '100%'
    },
    whiteScreen: {
        flex: 2.7,
        backgroundColor: '#FFF',
        width: '100%'
    },
    addUsernameAndPassword: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#D43939',
      marginBottom: 30,
      marginTop: 5
    },
    usernameForm: {
        flex: 2.7,
        backgroundColor: '#FFF',
        alignItems: 'center',
        justifyContent: 'center'
    },
    usernameStyle: {
        height: 36,
        borderColor: '#D43939',
        borderWidth: 1,
        width: "90%",
        marginTop: 10,
        padding: 5,
        borderRadius: 5
    },
    passwordStyle: {
        height: 36,
        borderColor: '#D43939',
        borderWidth: 1,
        width: "90%",
        marginTop: 10,
        padding: 5,
        borderRadius: 5
    },
    confirmPasswordStyle: {
        height: 36,
        borderColor: '#D43939',
        borderWidth: 1,
        width: "90%",
        marginTop: 10,
        padding: 5,
        borderRadius: 5
    },
    continue: {
        height: 36,
        backgroundColor: '#D43939',
        borderColor: '#D43939',
        borderWidth: 1,
        width: "90%",
        marginTop: 25,
        padding: 5,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    continueText: {
        height: 36,
        lineHeight: 36,
        color: '#FFF'
    },
});
