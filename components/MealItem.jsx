import { Image, Platform, Pressable, StyleSheet, Text, View } from "react-native";

function MealItem({ title, imageUrl, duration, complexity, affordability, onSelectMeal }) {
	return (
		<View style={styles.mealItem}>
			<Pressable onPress={onSelectMeal} android_ripple={{ color: "#ccc" }}
					   style={({ pressed }) => pressed ? styles.buttonPressed : null}>
				<View style={styles.innerContainer}>
					<View>
						<Image source={{ uri: imageUrl }} style={styles.image}/>
						<Text style={styles.title}>{title}</Text>
					</View>

					<View style={styles.details}>
						<Text style={styles.detailItem}>{duration}m</Text>
						<Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
						<Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
					</View>
				</View>
			</Pressable>
		</View>
	)
}

const styles = StyleSheet.create({
	mealItem: {
		margin: 16,
		borderRadius: 8,
		overflow: Platform.OS === 'ios' ? "visible" : "hidden",
		backgroundColor: "white",

		elevation: 4,
		shadowColor: "black",
		shadowOpacity: 0.35,
		shadowOffset: { width: 0, height: 2 },
		shadowRadius: 8,
	},
	innerContainer: {
		borderRadius: 8,
		overflow: "hidden",
	},
	buttonPressed: {
		opacity: 0.5,
	},
	image: {
		width: "100%",
		height: 200,
	},
	title: {
		fontWeight: "bold",
		textAlign: "center",
		fontSize: 18,
		margin: 8,
	},
	details: {
		padding: 8,
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
	},
	detailItem: {
		marginHorizontal: 4,
		fontSize: 12,
	},
})

export default MealItem;