import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EAF4FF",
    padding: 15,
  },
  header: {
    marginBottom: 20,
  },
  logo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#2563EB",
  },
  welcome: {
    marginTop: 5,
    fontSize: 14,
  },
  cardPink: {
    backgroundColor: "#FCE7F3",
    padding: 15,
    borderRadius: 15,
    marginBottom: 15,
  },
  cardGreen: {
    backgroundColor: "#DCFCE7",
    padding: 15,
    borderRadius: 15,
    flex: 1,
    marginRight: 8,
  },
  cardBlue: {
    backgroundColor: "#DBEAFE",
    padding: 15,
    borderRadius: 15,
    flex: 1,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: "600",
    marginBottom: 8,
  },
  boldText: {
    fontWeight: "bold",
  },
  row: {
    flexDirection: "row",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#22C55E",
    padding: 8,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },
  progressBar: {
    height: 8,
    backgroundColor: "#ccc",
    borderRadius: 10,
    marginTop: 10,
  },
  progressFill: {
    height: 8,
    width: "47%",
    backgroundColor: "#22C55E",
    borderRadius: 10,
  },
  tableContainer: {
    margin: 20,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  tableTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 10,
    textAlign: "center",
  },
  rowt: {
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "#ccc",
    paddingVertical: 10,
    paddingHorizontal: 5,
  },
  headerRow: {
    backgroundColor: "#f0f0f0",
  },
  cell: {
    textAlign: "center",
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 70,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: "#ccc",
    backgroundColor: "#f9f9f9",
    paddingBottom: 10,
  },
  navItem: {
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    fontSize: 12,
    color: "#007AFF",
    marginTop: 2,
  },
});

export default styles;