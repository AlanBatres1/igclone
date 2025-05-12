import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HeaderComponent from './Components/HeaderComponent';
import PostComponent from './Components/PostComponent';
import FooterComponent from './Components/FooterComponent';


// div = View
// h1, p, etx = Text
export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <HeaderComponent />
      {/* Main scroll area */}
      <View style={{flex: 1, paddingBottom: 70}}>
      <PostComponent />
      </View>

      <FooterComponent />
      <StatusBar style='light'/>
    </SafeAreaView>
  );
}
// This "styles is created using a built in component Called StyleSheet That allows us to Style out Components"

// Flex 1 takes all of the availaible space of the parent container
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
  },
});
