import axios from 'axios';
import IArticleData from '../types/ArticleData.interface';

interface IArticlesService {
  getArticlesByQuery(searchQuery: string): Promise<IArticleData[]>;
}

enum ArticlesEndpoints {
  everthing = '/v2/everything',
}

class ArticlesService implements IArticlesService {
  
  // USED NEXT API https://newsapi.org/docs
  private _baseURL = 'https://newsapi.org';

  getFetchURL = (baseURL: string, endpoint: string) => baseURL + endpoint;

  async getArticlesByQuery(query: string): Promise<IArticleData[]> {
    const response = await axios.get(this.getFetchURL(this._baseURL, ArticlesEndpoints.everthing), {
      params: {
        q: query,
        sortBy: 'popularity',
        apiKey: process.env.REACT_APP_NEWS_API_KEY,
      },
    });
    const responsedArticles: IArticleData[] = await response.data.articles;

    return responsedArticles;
  }
}

export default new ArticlesService();
