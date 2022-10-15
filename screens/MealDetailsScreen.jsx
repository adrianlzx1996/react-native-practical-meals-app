import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealDetails from "../components/MealDetails";
import Subtitle from "../components/MealDetail/Subtitle";
import List from "../components/MealDetail/List";
import { useContext, useLayoutEffect } from "react";
import IconButton from "../components/IconButton";
import { FavoritesContext } from "../store/context/favorites-context";

function MealDetailsScreen({ route, navigation }) {
	const favoriteMealsCtx = useContext(FavoritesContext)

	const mealId = route.params.mealId;

	const selectedMeal = MEALS.find(meal => meal.id === mealId);

	const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);

	function changeFavoriteStatusHandler() {
		if ( mealIsFavorite ) {
			favoriteMealsCtx.removeFavorite(mealId);
		} else {
			favoriteMealsCtx.addFavorite(mealId);
		}
	}

	useLayoutEffect(() => {
		navigation.setOptions({
			headerRight: () => {
				return (
					<IconButton onPress={changeFavoriteStatusHandler} icon={mealIsFavorite ? "star" : "star-outline"}
								color={"white"} />
				)
			},
		})
	}, [ navigation, changeFavoriteStatusHandler ]);

	return (
		<ScrollView style={styles.rootContainer}>
			<Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
			<Text style={styles.title}>{selectedMeal.title}</Text>

			<MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity}
						 affordability={selectedMeal.affordability} textStyle={styles.detailText} />

			<View style={styles.listOuterContainer}>
				<View style={styles.listContainer}>
					<Subtitle>Ingredients</Subtitle>
					<List data={selectedMeal.ingredients} />

					<Subtitle>Steps</Subtitle>
					<List data={selectedMeal.steps} />
				</View>
			</View>
		</ScrollView>
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