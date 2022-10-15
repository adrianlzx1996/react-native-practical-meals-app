import { createContext, useState } from "react"

const FavoritesContext = createContext({
	ids: [],
	addFavorite: (id) => {},
	removeFavorite: (id) => {},
})

function FavoritesContextProvider({ children }) {
	const [ favoriteMealIds, setFavoriteMealIds ] = useState([])

	function addFavorite(id) {
		setFavoriteMealIds([ ...favoriteMealIds, id ])
	}

	function removeFavorite(id) {
		setFavoriteMealIds((currentFavIds) => currentFavIds.filter(mealId => mealId !== id))
	}

	const value = {
		ids: favoriteMealIds,
		addFavorite,
		removeFavorite,
	}

	return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}

export default FavoritesContextProvider