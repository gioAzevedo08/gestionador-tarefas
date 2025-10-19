import { Animated, Easing, useRef } from "react-native";


export function useFadeIn(duration = 220) {
const opacity = useRef(new Animated.Value(0)).current;
const run = () => Animated.timing(opacity, { toValue: 1, duration, easing: Easing.out(Easing.quad), useNativeDriver: true }).start();
return { opacity, run };
}


export function useScaleIn(duration = 200, from = 0.95) {
const scale = useRef(new Animated.Value(from)).current;
const run = () => Animated.timing(scale, { toValue: 1, duration, easing: Easing.out(Easing.cubic), useNativeDriver: true }).start();
return { scale, run };
}