import { StyleSheet } from "react-native";
import { COLORS } from "../utils/constants";

export const S = StyleSheet.create({
  container: { flex: 1, backgroundColor: COLORS.bg, paddingTop: 60 },
  header: { paddingHorizontal: 20, marginBottom: 20 },
  titulo: { fontSize: 32, fontWeight: "bold", color: COLORS.text, textAlign: "center" },
  subtitulo: { fontSize: 16, color: COLORS.muted, textAlign: "center", marginTop: 5 },

  form: { paddingHorizontal: 20, marginBottom: 20 },
  input: {
    backgroundColor: COLORS.card, padding: 15, borderRadius: 12, fontSize: 16,
    borderWidth: 1, borderColor: COLORS.border, marginBottom: 10,
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 3, elevation: 2
  },
  btnAdd: { backgroundColor: COLORS.primary, padding: 15, borderRadius: 12, alignItems: "center", marginBottom: 10 },
  btnAddText: { color: "#fff", fontSize: 16, fontWeight: "bold" },
  btnClear: { backgroundColor: "#dfe6e9", padding: 12, borderRadius: 8, alignItems: "center" },
  btnClearText: { color: COLORS.muted, fontSize: 14 },

  list: { flex: 1 },
  listContent: { paddingHorizontal: 20, paddingBottom: 20 },

  item: {
    backgroundColor: COLORS.card, flexDirection: "row", alignItems: "center",
    padding: 15, borderRadius: 12, marginBottom: 10,
    shadowColor: "#000", shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1, shadowRadius: 3, elevation: 2
  },
  itemPressable: { flex: 1, flexDirection: "row", alignItems: "center" },

  checkbox: {
    width: 24, height: 24, borderRadius: 12, borderWidth: 2,
    borderColor: COLORS.border, marginRight: 12, justifyContent: "center", alignItems: "center"
  },
  checkboxDone: { backgroundColor: COLORS.primary, borderColor: COLORS.primary },
  checkmark: { color: "#fff", fontSize: 14, fontWeight: "bold" },

  textBox: { flex: 1 },
  text: { fontSize: 16, color: COLORS.text },
  textDone: { textDecorationLine: "line-through", color: COLORS.muted },
  date: { fontSize: 12, color: "#b2bec3", marginTop: 2 },

  actions: { flexDirection: "row" },
  action: { padding: 8, borderRadius: 6, marginLeft: 8 },
  actionEdit: { backgroundColor: COLORS.info },
  actionDelete: { backgroundColor: COLORS.danger },
  actionTxt: { fontSize: 16 },

  emptyBox: { alignItems: "center", paddingVertical: 40 },
  emptyText: { textAlign: "center", color: COLORS.muted, fontSize: 16, lineHeight: 24 }
});
