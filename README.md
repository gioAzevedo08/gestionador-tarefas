# Gestionador de Tarefas

Aplicativo de tarefas desenvolvido em **React Native (Expo)**, estruturado com **componentes reutilizáveis**, **hooks customizados**, **estilos centralizados** e **constantes isoladas**.

## Componentes
- **Header:** título e contador de tarefas pendentes.  
- **TaskForm:** campo para criar ou editar tarefas e limpar concluídas.  
- **TaskItem:** exibe tarefa com botões de editar e excluir.  
- **TaskList:** renderiza lista com animações e estado vazio.  
- **EmptyList:** mensagem quando não há tarefas.

## Hooks
- **useTasks:** controla o estado, CRUD, persistência (`AsyncStorage`) e edição de tarefas.  
- **useAnimations:** gerencia animações de entrada e saída com `Animated`.

## Organização
- **styles.js:** contém todos os estilos usando `StyleSheet.create`.  
- **constants.js:** centraliza cores, textos e chaves de armazenamento.  

## Tecnologias
- React Native (Expo)
- AsyncStorage
- Animated API
