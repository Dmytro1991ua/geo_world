import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<string[]>([]);

  const isFavorite = (code: string | null) => {
    if (!code) return false;

    return favorites.value.includes(code);
  };

  const toggleFavorite = (code: string | null) => {
    if (!code) return;

    if (isFavorite(code)) {
      favorites.value = favorites.value.filter((favoriteCode) => favoriteCode !== code);

      return;
    }

    favorites.value = [...favorites.value, code];
  };

  return {
    favorites,
    isFavorite,
    toggleFavorite,
  };
}, {
  persist: true,
});
