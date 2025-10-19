import { View, Text, TouchableOpacity } from "react-native";
import { S } from "../styles/styles";


export default function TaskItem({ item, onToggle, onRemove, onEdit }) {
return (
<View style={S.item}>
<TouchableOpacity onPress={() => onToggle(item.id)} style={[S.row, { gap: 12, flex: 1 }]}>
<View style={[{
width: 20, height: 20, borderRadius: 4,
borderWidth: 2, borderColor: item.done ? "#3ad29f" : "#555",
backgroundColor: item.done ? "#3ad29f33" : "transparent"
}]}
/>
<Text style={[S.itemText, item.done && S.itemTextDone]} numberOfLines={2}>{item.title}</Text>
</TouchableOpacity>


<View style={[S.row, { gap: 8 }]}>
<TouchableOpacity onPress={() => onEdit(item)}>
<Text style={{ color: "#7c5cff", fontWeight: "700" }}>Editar</Text>
</TouchableOpacity>
<TouchableOpacity onPress={() => onRemove(item.id)}>
<Text style={{ color: "#ff6374", fontWeight: "700" }}>Excluir</Text>
</TouchableOpacity>
</View>
</View>
);
}