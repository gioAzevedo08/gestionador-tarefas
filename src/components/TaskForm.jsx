import { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { S } from "../styles/styles";


export default function TaskForm({ onAdd, editing, onConfirmEdit, onCancelEdit }) {
const [value, setValue] = useState("");


useEffect(() => {
if (editing) setValue(editing.title);
else setValue("");
}, [editing]);


const handleSubmit = () => {
if (editing) onConfirmEdit(editing.id, value.trim());
else onAdd(value);
setValue("");
};


return (
<View style={[S.card, S.gap12]}>
<TextInput
placeholder={editing ? "Editando tarefa..." : "Digite uma nova tarefa"}
placeholderTextColor="#727682"
value={value}
onChangeText={setValue}
onSubmitEditing={handleSubmit}
style={S.input}
/>
<View style={[S.row, S.gap8]}>
<TouchableOpacity style={S.button} onPress={handleSubmit}>
<Text style={S.buttonText}>{editing ? "Salvar" : "Adicionar"}</Text>
</TouchableOpacity>
{editing && (
<TouchableOpacity style={[S.button, { backgroundColor: "#32323a" }]} onPress={onCancelEdit}>
<Text style={S.buttonText}>Cancelar</Text>
</TouchableOpacity>
)}
</View>
</View>
);
}