import { View, Text } from "react-native";
import { S } from "../styles/styles";
import { TEXTS } from "../utils/constants";

export default function EmptyList() {
  return (
    <View style={S.emptyBox}>
      <Text style={S.emptyText}>{TEXTS.empty}</Text>
    </View>
  );
}
