import { useCallback, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../utils/constants";

// Gera um ID aleatório simples
const uid = () => Math.random().toString(36).slice(2, 9);

export function useTasks() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(null); // task em edição

  // Carrega tarefas salvas no AsyncStorage
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEYS.tasks);
        if (raw) setTasks(JSON.parse(raw));
      } catch (err) {
        console.error("Erro ao carregar tarefas:", err);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  // Salva alterações automaticamente
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(tasks));
  }, [tasks]);

  // Adicionar nova tarefa
  const addTask = useCallback((title) => {
    if (!title?.trim()) return;
    const t = { id: uid(), title: title.trim(), done: false, createdAt: Date.now() };
    setTasks((prev) => [t, ...prev]);
  }, []);

  // Marcar como concluída/não concluída
  const toggleTask = useCallback((id) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, done: !t.done } : t))
    );
  }, []);

  // Remover tarefa
  const removeTask = useCallback((id) => {
    setTasks((prev) => prev.filter((t) => t.id !== id));
  }, []);

  // Iniciar e cancelar edição
  const startEdit = useCallback((task) => setEditing(task), []);
  const cancelEdit = useCallback(() => setEditing(null), []);

  // Confirmar edição
  const confirmEdit = useCallback((id, newTitle) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, title: newTitle } : t))
    );
    setEditing(null);
  }, []);

  // Contadores (total e concluídas)
  const counters = useMemo(
    () => ({
      total: tasks.length,
      done: tasks.filter((t) => t.done).length,
    }),
    [tasks]
  );

  return {
    tasks,
    loading,
    editing,
    counters,
    addTask,
    toggleTask,
    removeTask,
    startEdit,
    cancelEdit,
    confirmEdit,
  };
}
