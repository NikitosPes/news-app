import { createAsyncThunk } from '@reduxjs/toolkit';
import ArticlesService from '../../services/ArticlesService';

export const fetchArticles = createAsyncThunk(
  'articles/fetchByQuery',
  async (query: string, thunkAPI) => {
    try {
      const response = await ArticlesService.getArticlesByQuery(query);
      return response;
    } catch (e) {
      return thunkAPI.rejectWithValue('Failed to load articles');
    }
  },
);
