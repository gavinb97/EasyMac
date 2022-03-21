import * as React from 'react';
import { View, useWindowDimensions } from 'react-native';
import { TabView, SceneMap } from 'react-native-tab-view';
import Home from './Home';
import FoodLog from './FoodLog';
import Profile from './Profile';


import { TabBar } from 'react-native-tab-view';


const renderScene = SceneMap({
  home: Home ,
  foodLog: FoodLog,
  profile: Profile,  
});

// const renderScene = ({ route }) => {
//   switch (route.key) {
//     case 'home':
//       return <Home   />
//     case 'foodLog':
//       return <FoodLog  />
//     case 'profile':
//       return <Profile  />
//   }
// }

function Tabs() {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home' },
    { key: 'foodLog', title: 'FoodLog' },
    { key: 'profile', title: 'Profile' },
  ]);

  return (
    <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}

      initialLayout={{ width: layout.width }}
    />
  );
}

export default Tabs;