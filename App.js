import React from 'react'
import { SafeAreaView,StyleSheet,Dimensions, StatusBar, LogBox  } from 'react-native';
import GlobalNavigation from './Navigations/GlobalNavigation';
import theme from './theme';


const { width, height } = Dimensions.get('screen');

LogBox.ignoreAllLogs()
// StatusBar.setHidden(true)

const App = () => {
    return(
      <GlobalNavigation>
        <SafeAreaView style={styles.container}/>
      </GlobalNavigation>
    )
}

export default App;

const styles = StyleSheet.create({
    container: {
        width: width,
        height: height,
        backgroundColor: theme.Dimmed_WHITE
      }

})