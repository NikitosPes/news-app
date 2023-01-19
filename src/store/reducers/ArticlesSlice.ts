import { fetchArticles } from './ActionCreators';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IArticleData from '../../types/ArticleData.interface';

interface IArticlesState {
  loading: boolean;
  fetchingError: string;
  articles: IArticleData[];
  selectedArticle: IArticleData | null;
}

const initialState: IArticlesState = {
  loading: false,
  fetchingError: '',
  articles: [],
  selectedArticle: null,
};

export const articlesSlice = createSlice({
  name: 'articles',
  initialState,
  reducers: {},
  extraReducers: {
    [fetchArticles.fulfilled.type]: (state, action: PayloadAction<IArticleData[]>) => {
      state.loading = false;
      state.fetchingError = '';
      state.articles = action.payload;
    },
    [fetchArticles.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchArticles.rejected.type]: (state, action: PayloadAction<string>) => {
      state.loading = false;
      state.fetchingError = action.payload;
    },
  },
});

export default articlesSlice.reducer;
