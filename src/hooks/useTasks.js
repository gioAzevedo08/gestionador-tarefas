import { useCallback, useEffect, useMemo, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { STORAGE_KEYS } from "../utils/constants";

const uid = () => Date.now().toString();

export function useTasks() {
  const [tarefas, setTarefas] = useState([]);
  const [editandoId, setEditandoId] = useState(null);

  // Carregar do storage
  useEffect(() => {
    (async () => {
      try {
        const raw = await AsyncStorage.getItem(STORAGE_KEYS.tasks);
        if (raw) setTarefas(JSON.parse(raw));
      } catch (e) {
        console.warn("Falha ao carregar tarefas:", e);
      }
    })();
  }, []);

  // Salvar no storage
  useEffect(() => {
    AsyncStorage.setItem(STORAGE_KEYS.tasks, JSON.stringify(tarefas));
  }, [tarefas]);

  const adicionarOuAtualizar = useCallback((texto, onAfterAddAnim) => {
    const t = (texto ?? "").trim();
    if (!t) return;

    if (editandoId) {
      setTarefas(prev =>
        prev.map(x => (x.id === editandoId ? { ...x, texto: t } : x))
      );
      setEditandoId(null);
    } else {
      const nova = {
        id: uid(),
        texto: t,
        concluida: false,
        data: new Date().toLocaleTimeString()
      };
      setTarefas(prev => [nova, ...prev]);
      // dispara animação no item recém-criado (TaskList chama onAfterAddAnim)
      onAfterAddAnim?.(nova.id);
    }
  }, [editandoId]);

  const alternarConclusao = useCallback((id) => {
    setTarefas(prev =>
      prev.map(x => (x.id === id ? { ...x, concluida: !x.concluida } : x))
    );
  }, []);

  const remover = useCallback((id, withExitAnim) => {
    // TaskList chama withExitAnim(id, () => setTarefas(...))
    if (withExitAnim) {
      withExitAnim(id, () => setTarefas(prev => prev.filter(x => x.id !== id)));
    } else {
      setTarefas(prev => prev.filter(x => x.id !== id));
    }
  }, []);

  const limparConcluidas = useCallback((withExitAnim) => {
    if (!withExitAnim) {
      setTarefas(prev => prev.filter(x => !x.concluida));
      return;
    }
    // anima e remove cada concluída
    const concluidas = tarefas.filter(t => t.concluida);
    concluidas.forEach(t =>
      withExitAnim(t.id, () =>
        setTarefas(prev => prev.filter(x => x.id !== t.id))
      )
    );
  }, [tarefas]);

  const iniciarEdicao = useCallback((id) => setEditandoId(id), []);
  const cancelarEdicao = useCallback(() => setEditandoId(null), []);

  const pendentes = useMemo(
    () => tarefas.filter(t => !t.concluida).length,
    [tarefas]
  );

  const tarefaSendoEditada = useMemo(
    () => tarefas.find(t => t.id === editandoId) ?? null,
    [tarefas, editandoId]
  );

  return {
    tarefas,
    pendentes,
    editandoId,
    tarefaSendoEditada,

    adicionarOuAtualizar,
    alternarConclusao,
    remover,
    limparConcluidas,

    iniciarEdicao,
    cancelarEdicao
  };
}
