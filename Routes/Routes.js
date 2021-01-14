import React, { Component } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import SplashScreen from '../src/SplashScreen';
import ProductDetails from '../src/ProductDetails';
import ProductDetais from '../src/ProductDetais';

export const AppStackNavigator = createStackNavigator({

    SplashScreen:SplashScreen,
    ProductDetails:ProductDetails,
    ProductDetais:ProductDetais


},
    {
        headerMode: 'none',
        navigationOptions: {
            headerVisible: false
        }

    })

export default createAppContainer(AppStackNavigator);