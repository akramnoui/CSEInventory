import React from 'react'
import { Dimensions } from 'react-native'

export const screenWidth = () => {return Math.round(Dimensions.get('window').width)};
export const screenHeight = () => {return Math.round(Dimensions.get('window').height)};
