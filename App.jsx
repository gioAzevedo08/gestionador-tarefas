import React, { useRef } from "react";
import { SafeAreaView, StatusBar, KeyboardAvoidingView, Platform } from "react-native";
import Header from "./src/components/Header";
import TaskForm from "./src/components/TaskForm";
import TaskList from "./src/components/TaskList";
import { S } from "./src/styles/styles";
import { useTasks } from "./src/hooks/useTasks";
import { COLORS } from "./src/utils/constants";

export default function App() {
  const {
    tarefas, pendentes, editandoId, tarefaSendoEditada,
    adicionarOuAtualizar, alternarConclusao, remover, limparConcluidas,
    iniciarEdicao, cancelarEdicao
  } = useTasks();

  const afterAddRef = useRef(null);

  const handleSubmit = (texto) => {
    adicionarOuAtualizar(texto, (newId) => {
      afterAddRef.current?.(newId);
    });
  };

  const hasDone = tarefas.some(t => t.concluida);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
      <StatusBar barStyle="dark-content" />
      <KeyboardAvoidingView
        style={S.container}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <Header pendentes={pendentes} />

        <TaskForm
          onSubmit={handleSubmit}
          onClearDone={() => limparConcluidas((id, cb) => {
    
            remover(id, (exitingId, removeCb) => removeCb()); 
          })}
          isEditing={!!editandoId}
          editingTaskTitle={tarefaSendoEditada?.texto}
          hasDone={hasDone}
        />

        <TaskList
          data={tarefas}
          onToggle={alternarConclusao}
          onEdit={(id) => iniciarEdicao(id)}
          onDelete={(id) => remover(id)} 
          onAfterAddRef={afterAddRef}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}
