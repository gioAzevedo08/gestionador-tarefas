export const COLORS = {
  bg: "#f8f9fa",
  card: "#ffffff",
  primary: "#00b894",
  text: "#2d3436",
  muted: "#636e72",
  border: "#ddd",
  info: "#74b9ff",
  danger: "#ff7675"
};

export const TEXTS = {
  title: "📝 Lista de Tarefas",
  placeholder: "Digite uma nova tarefa...",
  empty: "Nenhuma tarefa ainda!\nAdicione sua primeira tarefa acima",
  add: "Adicionar",
  update: "Atualizar",
  clearDone: "Limpar Concluídas",
  pendingLabel: (n) => `${n} pendentes`,
};

export const STORAGE_KEYS = {
  tasks: "@gestionador/tasks"
};
