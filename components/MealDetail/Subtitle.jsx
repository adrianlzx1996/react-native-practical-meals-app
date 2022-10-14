import { StyleSheet, Text, View } from "react-native";

function Subtitle({ children }) {
	return (
		<View style={styles.subtitleContainer}>
			<Text style={styles.subtitle}>{children}</Text>
		</View>
	)
}

const styles = StyleSheet.create({
	subtitleContainer: {
		padding: 6,
		marginVertical: 4,
		marginHorizontal: 12,
		borderBottomWidth: 2,
		borderBottomColor: "#e2b497",
	},
	subtitle: {
		fontSize: 18,
		color: '#e2b497',
		fontWeight: "bold",
		textAlign: "center",
	},
})

export default Subtitle;