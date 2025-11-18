import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface FavoritesState {
	items: number[];
}

const initialState: FavoritesState = {
	items: [],
};

const favoritesSlice = createSlice({
	name: "favorites",
	initialState,
	reducers: {
		setFavorites: (state, action: PayloadAction<number[]>) => {
			state.items = action.payload;
		},
		addFavorite: (state, action: PayloadAction<number>) => {
			if (!state.items.includes(action.payload)) {
				state.items.push(action.payload);
				// Save to localStorage
				if (typeof window !== "undefined") {
					localStorage.setItem("favorites", JSON.stringify(state.items));
				}
			}
		},
		removeFavorite: (state, action: PayloadAction<number>) => {
			state.items = state.items.filter((id) => id !== action.payload);
			// Save to localStorage
			if (typeof window !== "undefined") {
				localStorage.setItem("favorites", JSON.stringify(state.items));
			}
		},
		toggleFavorite: (state, action: PayloadAction<number>) => {
			const id = action.payload;
			if (state.items.includes(id)) {
				state.items = state.items.filter((n) => n !== id);
			} else {
				state.items.push(id);
			}
			// Save to localStorage
			if (typeof window !== "undefined") {
				localStorage.setItem("favorites", JSON.stringify(state.items));
			}
		},
	},
});

export const { setFavorites, addFavorite, removeFavorite, toggleFavorite } =
	favoritesSlice.actions;

export default favoritesSlice.reducer;
