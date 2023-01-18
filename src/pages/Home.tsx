import { useState, useEffect, ChangeEvent } from "react";

import useDebounce from "../hooks/useDebounce";

import IArticleData from "../types/ArticleData.interface";
import ArticlesService from "../services/ArticlesService";
import HomeTemplate from "../templates/HomeTemplate/HomeTemplate";


const Home = () => {
  const [query, setQuery] = useState<string>("ReactJS");
  const [loading, setLoading] = useState<boolean>(true);
  const [articles, setArticles] = useState<IArticleData[]>([]);

  const searchQuery = useDebounce<string>(query, 500);

  useEffect(() => {
    fetchArticlesDataByQuery(query)
  }, []);

  useEffect(() => {
    fetchArticlesDataByQuery(query)
  }, [searchQuery]);


  const fetchArticlesDataByQuery = async (query: string) => {
    setLoading(true);
    try {
      const response = await ArticlesService.getArticlesBySearchQuery(query);
      setArticles(response);
    } catch (err) {
      console.error(err);
    }
    setLoading(false);
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setQuery(event.target.value);
  };

  return (
    <>
      <HomeTemplate
        loading={loading}
        query={searchQuery}
        articles={articles}
        changeSearchQueryHandler={handleChange}
      />
    </>
  );
};

export default Home;
