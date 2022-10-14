import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="light"/>
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
					<Stack.Screen name={"MealCategories"} component={CategoriesScreen} options={{
						title: "All Categories",
					}}/>
					<Stack.Screen name={"MealsOverview"} component={MealsOverviewScreen}
						// options={({ route, navigation }) => {
						//   const catId = route.params.categoryId;
						//   const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
						//   return {
						// 	  title: selectedCategory.title,
						//   }
						// }}
					/>
					<Stack.Screen name={"MealDetail"} component={MealDetailsScreen}/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}