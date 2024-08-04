import React, { Component } from "react";
import { View, StyleSheet, TouchableWithoutFeedback, Animated, Text } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome';

export default class FabbuttonFAB extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            animation: new Animated.Value(0)
        };
    }

    togglemenuFAB = () => {
        const toValue = this.state.open ? 0 : 1;

        Animated.spring(this.state.animation, {
            toValue,
            friction: 6,
            useNativeDriver: true
        }).start();

        this.setState({ open: !this.state.open });
    }

    render() {
        const cameraStyle = {
            transform: [
                { scale: this.state.animation },
                {
                    translateY: this.state.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -70]
                    })
                }
            ]
        }

        const likeStyle = {
            transform: [
                { scale: this.state.animation },
                {
                    translateY: this.state.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: [0, -130]
                    })
                }
            ]
        }

        const rotation = {
            transform: [
                {
                    rotate: this.state.animation.interpolate({
                        inputRange: [0, 1],
                        outputRange: ['0deg', '45deg']
                    })
                }
            ]
        }

        return (
            <View style={[styles.containerFAB, this.props.style]}>
                <TouchableWithoutFeedback>
                    <Animated.View style={[styles.buttonFAB, styles.submenuFAB, likeStyle]}>
                        <Text style={styles.iconTextFAB}>
                            <Icon name='star' size={20} color='#FFF' />
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.props.navigateToConfig}>
                    <Animated.View style={[styles.buttonFAB, styles.submenuFAB, cameraStyle]}>
                        <Text style={styles.iconTextFAB}>
                            <Icon name='gear' size={20} color='#FFF' />
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={this.togglemenuFAB}>
                    <Animated.View style={[styles.buttonFAB, styles.menuFAB, rotation]}>
                        <Text style={styles.iconTextFAB}>
                            <Icon name='plus' size={24} color='#FFF' />
                        </Text>
                    </Animated.View>
                </TouchableWithoutFeedback>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    containerFAB: {
        alignItems: 'center',
        position: 'absolute',
        bottom: 90,
        left: 60
    },
    buttonFAB: {
        position: 'absolute',
        width: 60,
        height: 60,
        borderRadius: 60 / 2,
        justifyContent: 'center',
        shadowRadius: 10,
        shadowColor: '#00213B',
        shadowOpacity: 0.3,
        shadowOffset: {
            height: 10,
        },
    },
    menuFAB: {
        backgroundColor: "#FFA825"
    },
    submenuFAB: {
        width: 48,
        height: 48,
        borderRadius: 48 / 2,
        backgroundColor: '#FFA825'
    },
    iconTextFAB: {
        textAlign: 'center'
    }
});
