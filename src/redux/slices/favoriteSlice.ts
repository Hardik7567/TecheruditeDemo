import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProductItem } from '../../api/types/event.type';

interface FavoriteState {
  favoriteItems: ProductItem[];
}

const initialState: FavoriteState = {
  favoriteItems: [],
};

const favoriteSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<ProductItem>) => {
      const alreadyExists = state.favoriteItems.some(
        item => item.id === action.payload.id,
      );

      if (!alreadyExists) {
        state.favoriteItems.push(action.payload);
      } else {
        state.favoriteItems = state.favoriteItems.filter(
          item => item.id !== action.payload.id,
        );
      }
    },
  },
});

export const { addFavorite } = favoriteSlice.actions;

export default favoriteSlice.reducer;
