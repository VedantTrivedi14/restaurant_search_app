// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// const Stack = createNativeStackNavigator();

// function BussinussSearch() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Search">
//         <Stack.Screen name="Bussinuss Search" component={SearchScreen} />
      
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default BussinussSearch;


import {  createAppContainer} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'
import SearchScreen from './src/Screens/SearchScreen';

const navigator = createStackNavigator({
    Search : SearchScreen
},{
  initialRouteName : 'Search' ,
  defaultNavigationOptions:{
    title:'Business Search'
  },
});

export default  createAppContainer(navigator);







