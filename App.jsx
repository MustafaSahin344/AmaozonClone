import { View, Text,SafeAreaView, StatusBar } from 'react-native';
import Router from './src/navigation/Router';

const App = () => {
  return (
 <SafeAreaView style={{flex: 1, backgroundColor:"#9ee4de"}} >
  <StatusBar backgroundColor={"9ee4d4e"} barStyle={"dark-content"}/>
  <Router/>
 </SafeAreaView>
  );
};

export default App;