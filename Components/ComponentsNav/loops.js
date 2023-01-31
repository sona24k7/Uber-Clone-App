import { StyleSheet, Text, View } from "react-native";
import React from "react";

const loops = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    let users = [
      { id: 1, name: "infinitbility" },
      { id: 2, name: "notebility" },
      { id: 2, name: "repairbility" },
    ];
    setUsers(users);
  }, []);

  return (
    <View style={styles.container}>
      {users.map((user) => {
        return (
          <Text style={styles.paragraph}>
            {user.id} - {user.name}
          </Text>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ecf0f1",
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
