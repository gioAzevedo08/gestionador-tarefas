import { useEffect } from "react";
import { Animated, View, FlatList } from "react-native";
import { S } from "../styles/styles";
import TaskItem from "./TaskItem";
import EmptyList from "./EmptyList";
import { useItemAnimations } from "../hooks/useAnimations";

export default function TaskList({
  data,
  onToggle,
  onEdit,
  onDelete,
  onAfterAddRef 
}) {
  const { style, enter, exit } = useItemAnimations();

  useEffect(() => {
    if (onAfterAddRef) {
      onAfterAddRef.current = (id) => enter(id);
    }
  }, [onAfterAddRef, enter]);

  const renderItem = ({ item }) => {
    return (
      <Animated.View style={[S.item, style(item.id)]}>
        <TaskItem
          item={item}
          onToggle={onToggle}
          onEdit={onEdit}
          onDelete={(id) => exit(id, () => onDelete(id))}
        />
      </Animated.View>
    );
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={renderItem}
      style={S.list}
      contentContainerStyle={S.listContent}
      showsVerticalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
      ListEmptyComponent={<EmptyList />}
    />
  );
}
