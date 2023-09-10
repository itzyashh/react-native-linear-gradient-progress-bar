import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LinearGradient from 'react-native-linear-gradient';
import { moderateScale } from '../styles/mixins';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';


const CustomProgressBar = ({progress=10}) => {
    const [progressValue, setProgressValue] = React.useState(0);
const width = Dimensions.get('window').width;
    const translateX = useSharedValue(-width);

    const progressStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }],
        };
    });

    React.useEffect(() => {
        setProgressValue(progress);
        translateX.value = withTiming(1, { duration: 1000 });
        console.log('translateX.value',translateX.value)
    },[progress]);

  return (
    <View style={styles.container} >
    {/* <View style={styles.progress} ><View style={styles.shine}/></View> */}
    <Animated.View style={[styles.progress,{width:`${progressValue}%`}, progressStyle]} >

    <LinearGradient   colors={[
          'rgba(76, 124, 222, 0.6)',
          'rgba(76, 124, 222, 0.7)',
          'rgba(76, 124, 222, 1)',
          'rgba(76, 124, 222, 1)',
          'rgba(200, 200, 255, 1)',
          'rgba(76, 124, 222, 1)',
          'rgba(76, 124, 222, 1)',
        ]} style={styles.progress}
        start={{ x: 0, y: 0.5 }}
  end={{ x: 1, y: 0.5 }}
         />
    </Animated.View>
    </View>
  )
}


const styles = StyleSheet.create({
    container: {
        height: moderateScale(12),
        backgroundColor: '#ccc',
        width: '100%',
    },
    progress: {
        backgroundColor: 'blue',
        height: moderateScale(12),
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },
    shine: {
        position: 'absolute',
        backgroundColor: 'rgba(255,255,255,0.5)',
        height: 20,
        width: 10,
        right: 10
    }
})
export default CustomProgressBar
