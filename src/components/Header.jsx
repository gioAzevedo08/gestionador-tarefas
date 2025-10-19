import { View, Text } from "react-native";
import { S } from "../styles/styles";
import { TEXTS, COLORS } from "../utils/constants";


export default function Header({ total, done }) {
return (
<View style={[S.header]}>
<Text style={S.title}>{TEXTS.title}</Text>
<View style={[{ flexDirection: "row", gap: 10 }]}>
<View style={S.chip}><Text style={S.chipText}>Total: {total}</Text></View>
<View style={[S.chip, { backgroundColor: COLORS.success + "22" }]}>
<Text style={[S.chipText, { color: COLORS.success }]}>Concluídas: {done}</Text>
</View>
</View>
</View>
);
}