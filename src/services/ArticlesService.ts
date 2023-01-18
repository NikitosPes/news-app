import axios from "axios";
import IArticleData from "../types/ArticleData.interface";

interface IArticlesService {
  getArticlesBySearchQuery(searchQuery: string): Promise<IArticleData[]>;
}

class ArticlesService implements IArticlesService {

  // USED NEXT API https://newsapi.org/docs
  private _baseURL = "https://newsapi.org/v2/everything";

  async getArticlesBySearchQuery(searchQuery: string): Promise<IArticleData[]> {
    const response = await axios.get(`${this._baseURL}?q=${searchQuery}&sortBy=popularity&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`);
    const responsedArticles: IArticleData[] = await response.data.articles;
  
    return responsedArticles;
  };
}

export default new ArticlesService();
