import { useEffect } from "react";
import { View, FlatList, Animated } from "react-native";
import { S } from "../styles/styles";
import TaskItem from "./TaskItem";
import EmptyList from "./EmptyList";
import { useFadeIn, useScaleIn } from "../hooks/useAnimations";


export default function TaskList({ data, onToggle, onRemove, onEdit }) {
const { opacity, run: fadeIn } = useFadeIn();
const { scale, run: scaleIn } = useScaleIn();


useEffect(() => { fadeIn(); scaleIn(); }, [data.length]);


return (
<Animated.View style={[S.list, { opacity, transform: [{ scale }] }]}>
<FlatList
data={data}
keyExtractor={(item) => item.id}
ItemSeparatorComponent={() => <View style={{ height: 12 }} />}
renderItem={({ item }) => (
<TaskItem item={item} onToggle={onToggle} onRemove={onRemove} onEdit={onEdit} />
)}
ListEmptyComponent={<EmptyList />}
/>
</Animated.View>
);
}