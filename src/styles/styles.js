// src/styles/styles.js
import { StyleSheet } from "react-native";
import { COLORS } from "../utils/constants";

export const S = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bg,
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    paddingVertical: 8,
    gap: 6,
  },
  title: {
    color: COLORS.text,
    fontSize: 24,
    fontWeight: "700",
  },

  counter: {
    color: COLORS.muted,
    fontSize: 14,
  },

  card: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 12,
  },
  input: {
    backgroundColor: COLORS.card,
    borderWidth: 1,
    borderColor: "#2a2b31",
    color: COLORS.text,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 12,
    fontSize: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  gap8: { gap: 8 },
  gap12: { gap: 12 },
  gap16: { gap: 16 },

  button: {
    backgroundColor: COLORS.primary,
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: { color: "#fff", fontWeight: "700" },

  list: { marginTop: 16 },

  item: {
    backgroundColor: COLORS.card,
    borderRadius: 12,
    padding: 12,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: { color: COLORS.text, fontSize: 16, flex: 1 },
  itemTextDone: { textDecorationLine: "line-through", color: COLORS.muted },

  chip: {
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 999,
    backgroundColor: "#262730",
  },
  chipText: { color: COLORS.muted, fontSize: 12 },

  emptyBox: { alignItems: "center", paddingVertical: 48 },
  emptyTitle: { color: COLORS.text, fontWeight: "700", fontSize: 18 },
  emptySubtitle: { color: COLORS.muted, marginTop: 6 },
});
