import { View, Text, TouchableOpacity } from "react-native";
import { S } from "../styles/styles";

export default function TaskItem({ item, onToggle, onEdit, onDelete }) {
  return (
    <View style={S.item}>
      <TouchableOpacity style={S.itemPressable} onPress={() => onToggle(item.id)}>
        <View style={[S.checkbox, item.concluida && S.checkboxDone]}>
          {item.concluida && <Text style={S.checkmark}>✓</Text>}
        </View>
        <View style={S.textBox}>
          <Text style={[S.text, item.concluida && S.textDone]}>{item.texto}</Text>
          <Text style={S.date}>{item.data}</Text>
        </View>
      </TouchableOpacity>

      <View style={S.actions}>
        <TouchableOpacity style={[S.action, S.actionEdit]} onPress={() => onEdit(item.id)}>
          <Text style={S.actionTxt}>✏️</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[S.action, S.actionDelete]} onPress={() => onDelete(item.id)}>
          <Text style={S.actionTxt}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
