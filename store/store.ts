// store\store.ts
import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./themeSlice";
import favoritesReducer from "./favoritesSlice";

export const store = configureStore({
	reducer: {
		theme: themeReducer,
		favorites: favoritesReducer,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
