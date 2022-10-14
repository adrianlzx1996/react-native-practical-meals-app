import CategoriesScreen from "./screens/CategoriesScreen";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack"

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<StatusBar style="dark"/>
			<NavigationContainer>
				<Stack.Navigator>
					<Stack.Screen name={"MealCategories"} component={CategoriesScreen}/>
				</Stack.Navigator>
			</NavigationContainer>
		</>
	);
}