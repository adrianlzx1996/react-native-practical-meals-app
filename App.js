import 'react-native-gesture-handler';
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import { Button } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons"

import CategoriesScreen from "./screens/CategoriesScreen";
import FavoriteScreen from "./screens/FavoriteScreen";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
	return <Drawer.Navigator screenOptions={{
		headerStyle: {
			backgroundColor: "#351401",
		},
		headerTintColor: "white",
		sceneContainerStyle: {
			backgroundColor: "#3f2f25",
		},
		drawerContentStyle: {
			backgroundColor: "#3f2f25",
		},
		drawerInactiveTintColor: "white",
		drawerActiveTintColor: "#3f2f25",
		drawerActiveBackgroundColor: "#e4baa1",
	}}>
		<Drawer.Screen name={"Categories"} component={CategoriesScreen} options={{
			title: "All Categories",
			drawerIcon: ({ color, size }) => <Ionicons name={"list"} color={color} size={size} />,
		}
		} />
		<Drawer.Screen name={"Favorite"} component={FavoriteScreen} options={{
			drawerIcon: ({ color, size }) => <Ionicons name={"star"} color={color} size={size} />,
		}
		} />
	</Drawer.Navigator>
}

export default function App() {
	return (
		<>
			<StatusBar style="light" />
			<NavigationContainer>
				<Stack.Navigator screenOptions={{
					headerStyle: {
						backgroundColor: "#351401",
					},
					headerTintColor: "white",
					contentStyle: {
						backgroundColor: "#3f2f25",
					},
				}}>
					<Stack.Screen name={"Drawer"} component={DrawerNavigator} options={{
						headerShown: false,
					}} />
					<Stack.Screen name={"MealsOverview"} component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						//   const catId = route.params.categoryId;
						//   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
						//   return {
						// 	  title: selectedCategory.title,
						//   }
						// }}
					/>
					<Stack.Screen name={"MealDetail"} component={MealDetailsScreen} options={{
						title: "About the Meal",
						headerRight: () => {
							return (
								<Button title={"Tap Me!"} />
							)
						},
					}} />
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}