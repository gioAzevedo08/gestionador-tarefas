import { SafeAreaView, StatusBar, View } from "react-native";
import Header from "./src/components/Header";
import TaskForm from "./src/components/TaskForm";
import TaskList from "./src/components/TaskList";
import { S } from "./src/styles/styles";
import { useTasks } from "./src/hooks/useTasks";
import { COLORS } from "./src/utils/constants";


export default function App() {
const {
tasks, editing, counters,
addTask, toggleTask, removeTask,
startEdit, cancelEdit, confirmEdit
} = useTasks();


return (
<SafeAreaView style={{ flex: 1, backgroundColor: COLORS.bg }}>
<StatusBar barStyle="light-content" />
<View style={S.container}>
<Header total={counters.total} done={counters.done} />
<TaskForm
onAdd={addTask}
editing={editing}
onConfirmEdit={confirmEdit}
onCancelEdit={cancelEdit}
/>
<TaskList
data={tasks}
onToggle={toggleTask}
onRemove={removeTask}
onEdit={startEdit}
/>
</View>
</SafeAreaView>
);
}