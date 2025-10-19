import { useRef } from "react";
import { Animated } from "react-native";

/** Animações por item: opacity 0→1 na entrada, 1→0 na saída com translateY */
export function useItemAnimations() {
  const map = useRef(new Map()).current;

  const get = (id) => {
    if (!map.has(id)) map.set(id, new Animated.Value(0));
    return map.get(id);
  };

  const enter = (id, duration = 500) => {
    const v = get(id);
    Animated.timing(v, { toValue: 1, duration, useNativeDriver: true }).start();
  };

  const exit = (id, cb, duration = 300) => {
    const v = get(id);
    Animated.timing(v, { toValue: 0, duration, useNativeDriver: true }).start(() => {
      cb?.();
      map.delete(id);
    });
  };

  const style = (id) => {
    const v = get(id);
    return {
      opacity: v,
      transform: [{
        translateY: v.interpolate({ inputRange: [0, 1], outputRange: [50, 0] })
      }]
    };
  };

  return { get, enter, exit, style };
}
