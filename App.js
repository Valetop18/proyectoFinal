import 'react-native-gesture-handler';
import React from 'react'
import AppLoading from 'expo-app-loading';
import { useFonts } from 'expo-font';
import MainNavigation from './navigation/index';
import store from './store';
import { Provider } from 'react-redux'
import { init } from './db'

init()
.then(() => console.log('database initialized'))
.catch((err) => {
console.log('database fail connect')
console.log(err.message)
})

export default function App() {

  const [loaded] = useFonts({
    OverBold: require('./assets/fonts/Overpass-Bold.ttf'),
    OverExtraBold: require('./assets/fonts/Overpass-ExtraBold.ttf'),
    OverLight: require('./assets/fonts/Overpass-Light.ttf'),
    OverMedium: require('./assets/fonts/Overpass-Medium.ttf'),
    OverRegular: require('./assets/fonts/Overpass-Regular.ttf'),
    OverSemiBoldItalic: require('./assets/fonts/Overpass-SemiBoldItalic.ttf'),
  })

  if(!loaded) return <AppLoading />

  return (
    <Provider store={store}>
      <MainNavigation />
    </Provider>
  );
}
