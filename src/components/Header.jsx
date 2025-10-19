import { View, Text } from "react-native";
import { S } from "../styles/styles";
import { TEXTS } from "../utils/constants";

export default function Header({ pendentes }) {
  return (
    <View style={S.header}>
      <Text style={S.titulo}>{TEXTS.title}</Text>
      <Text style={S.subtitulo}>{TEXTS.pendingLabel(pendentes)}</Text>
    </View>
  );
}
