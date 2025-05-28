import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Link } from 'expo-router'; // Import Link for navigation

// Renamed function for clarity
export default function HomePage() {
  return (
    <View style={styles.container}>
      <Text>Welcome to the ROUTER App! This is the Home Page.</Text>
      {/* Example of a link if you create another page e.g. app/details.tsx */}
      {/* <Link href="/details" style={{ marginTop: 10, color: 'blue' }}>
        Go to Details
      </Link> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
