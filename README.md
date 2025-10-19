# Gestionador de Tarefas 

## Objetivo
- Separar responsabilidades em **componentes** reutilizáveis
- Encapsular **estado/CRUD** e **animações** em **hooks customizados**
- **Centralizar estilos** em um único arquivo `styles.js`
- **Isolar constantes** de UI e configuração


## Componentização
- `Header`: título + chips de contagem (total/concluídas)
- `TaskForm`: input para criar/editar tarefas
- `TaskItem`: item individual com ações (toggle/editar/excluir)
- `TaskList`: renderização com `FlatList` e separadores
- `EmptyList`: feedback visual quando a lista está vazia


## 🪝 Hooks Customizados
- `useTasks`: gerencia o estado das tarefas, persistência com AsyncStorage e fluxo de edição.
- API: `addTask, toggleTask, removeTask, startEdit, confirmEdit, cancelEdit, counters, tasks`
- `useAnimations`: helpers de animação `fadeIn` e `scaleIn` (Animated API) usados em `TaskList`.


## Estilos
- `styles.js` usa `StyleSheet.create` para melhor performance e caching interno do RN.
- Paleta e textos centralizados em `utils/constants.js`.


##  Estrutura
```text
src/
components/ (UI)
hooks/ (lógica reutilizável)
styles/ (estilos centralizados)
utils/ (constantes e chaves)