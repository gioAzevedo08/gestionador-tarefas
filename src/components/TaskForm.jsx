import { useEffect, useState } from "react";
import { View, TextInput, TouchableOpacity, Text } from "react-native";
import { S } from "../styles/styles";
import { TEXTS } from "../utils/constants";

export default function TaskForm({
  onSubmit,       
  onClearDone,         
  isEditing,           
  editingTaskTitle,  
  hasDone         
}) {
  const [value, setValue] = useState("");

  useEffect(() => {
    if (isEditing) setValue(editingTaskTitle ?? "");
  }, [isEditing, editingTaskTitle]);

  const submit = () => {
    onSubmit(value, () => {});
    setValue("");
  };

  return (
    <View style={S.form}>
      <TextInput
        style={S.input}
        placeholder={TEXTS.placeholder}
        value={value}
        onChangeText={setValue}
        onSubmitEditing={submit}
      />

      <TouchableOpacity style={S.btnAdd} onPress={submit}>
        <Text style={S.btnAddText}>{isEditing ? TEXTS.update : TEXTS.add}</Text>
      </TouchableOpacity>

      {hasDone && (
        <TouchableOpacity style={S.btnClear} onPress={onClearDone}>
          <Text style={S.btnClearText}>{TEXTS.clearDone}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}
