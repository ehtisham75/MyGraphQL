import React from 'react'
import { View, Text,StatusBar } from 'react-native'
import { Colors } from '../Assets/Color/Colors'

const StatusBarForAll = () => {
    return (
        <StatusBar
            backgroundColor={Colors.TRANSPARENT}
            barStyle={"dark-content"}
            translucent={true}
        />
    )
}

export default StatusBarForAll