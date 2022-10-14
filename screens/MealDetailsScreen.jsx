import { Button, Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useLayoutEffect } from "react";

function MealDetailsScreen({ route, navigation }) {
	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	function headerButtonPressHandler() {
		console.log("pressed");
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<Button title={"Tap Me"} onPress={headerButtonPressHandler} />
				)
			},
		})
	}, [ navigation, headerButtonPressHandler ]);

	return (
		<ScrollView style={styles.rootContainer} >
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<Text style={styles.title} >{selectedMeal.title}</Text >

			<MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity}
						 affordability={selectedMeal.affordability} textStyle={styles.detailText} />

			<View style={styles.listOuterContainer} >
				<View style={styles.listContainer} >
					<Subtitle >Ingredients</Subtitle >
					<List data={selectedMeal.ingredients} />

					<Subtitle >Steps</Subtitle >
					<List data={selectedMeal.steps} />
				</View >
			</View >
		</ScrollView >
	)
}

const styles = StyleSheet.create({
	rootContainer: { marginBottom: 32 },
	image: {
		width: "100%",
		height: 300,
	},
	title: {
		margin: 8,
		fontSize: 24,
		color: "white",
		fontWeight: 'bold',
		textAlign: "center",
	},
	detailText: {
		color: 'white',
	},
	listOuterContainer: {
		alignItems: 'center',
	},
	listContainer: {
		width: "80%",
	},
})

export default MealDetailsScreen;