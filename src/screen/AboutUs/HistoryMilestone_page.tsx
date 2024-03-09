import * as React from 'react';
import {
  PressableAndroidRippleConfig,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  View,
  ViewStyle,
  useWindowDimensions,
} from 'react-native';
import globalStyles from '../../styles/styles';
import MyAppBar from '../../components/AppBarsHeaders';
import {
  TabView,
  SceneMap,
  TabBar,
  NavigationState,
  Route,
  SceneRendererProps,
  TabBarIndicatorProps,
  TabBarItemProps,
} from 'react-native-tab-view';
import colors from '../../config/colors';
import {Scene, Event} from 'react-native-tab-view/lib/typescript/src/types';
import HmHistoryScreen from './Component/hm_history';
import HmMilestoneScreen from './Component/hm_milestone';

const renderScene = SceneMap({
  first: HmHistoryScreen,
  second: HmMilestoneScreen,
});

const HistoryMilestoneScreen: React.FC = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: 'History'},
    {key: 'second', title: 'Milestone'},
  ]);
  const renderTabBar = (
    props: React.JSX.IntrinsicAttributes &
      SceneRendererProps & {
        navigationState: NavigationState<Route>;
        scrollEnabled?: boolean | undefined;
        bounces?: boolean | undefined;
        activeColor?: string | undefined;
        inactiveColor?: string | undefined;
        pressColor?: string | undefined;
        pressOpacity?: number | undefined;
        getLabelText?:
          | ((scene: Scene<Route>) => string | undefined)
          | undefined;
        getAccessible?:
          | ((scene: Scene<Route>) => boolean | undefined)
          | undefined;
        getAccessibilityLabel?:
          | ((scene: Scene<Route>) => string | undefined)
          | undefined;
        getTestID?: ((scene: Scene<Route>) => string | undefined) | undefined;
        renderLabel?:
          | ((
              scene: Scene<Route> & {focused: boolean; color: string},
            ) => React.ReactNode)
          | undefined;
        renderIcon?:
          | ((
              scene: Scene<Route> & {focused: boolean; color: string},
            ) => React.ReactNode)
          | undefined;
        renderBadge?: ((scene: Scene<Route>) => React.ReactNode) | undefined;
        renderIndicator?:
          | ((props: TabBarIndicatorProps<Route>) => React.ReactNode)
          | undefined;
        renderTabBarItem?:
          | ((
              props: TabBarItemProps<Route> & {key: string},
            ) => React.ReactElement<
              any,
              string | React.JSXElementConstructor<any>
            >)
          | undefined;
        onTabPress?: ((scene: Scene<Route> & Event) => void) | undefined;
        onTabLongPress?: ((scene: Scene<Route>) => void) | undefined;
        tabStyle?: StyleProp<ViewStyle>;
        indicatorStyle?: StyleProp<ViewStyle>;
        indicatorContainerStyle?: StyleProp<ViewStyle>;
        labelStyle?: StyleProp<TextStyle>;
        contentContainerStyle?: StyleProp<ViewStyle>;
        style?: StyleProp<ViewStyle>;
        gap?: number | undefined;
        testID?: string | undefined;
        android_ripple?: PressableAndroidRippleConfig | undefined;
      },
  ) => {
    return (
      <TabBar
        {...props}
        renderLabel={({focused, route}) => {
          return (
            <Text style={{color: focused ? colors.RED : colors.BLACK}}>
              {route.title}
            </Text>
          );
        }}
        indicatorStyle={styles.indicatorStyle}
        style={styles.tabBar}
      />
    );
  };
  return (
    <View style={globalStyles.safeArea}>
      <View style={globalStyles.container}>
        <View style={globalStyles.responsiveBox}>
          <MyAppBar
            title="History and Milestone"
            isHome={false}
            isRegisters={false}
          />

          <TabView
            renderTabBar={renderTabBar}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    marginTop: 20,
    backgroundColor: colors.WHITE,
  },
  indicatorStyle: {
    backgroundColor: colors.RED,
    padding: 1.5,
    marginBottom: -2,
  },
});

export default HistoryMilestoneScreen;
