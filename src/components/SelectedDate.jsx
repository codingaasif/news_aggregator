/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import axios from "axios";
import { useEffect, useState } from "react";

const SelectedDate = ({ searchActivityStartDate, searchActivityEndDate }) => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async () => {
    if (searchActivityStartDate && searchActivityEndDate) {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(
          "https://newsapi.org/v2/top-headlines",
          {
            params: {
              from: searchActivityStartDate.toISOString().split("T")[0], // Format the date as YYYY-MM-DD
              to: searchActivityEndDate.toISOString().split("T")[0], // Format the date as YYYY-MM-DD
              apiKey: "YOUR_NEWS_API_KEY", // Replace with your News API key
              language: "en", // Optional: specify language
              sortBy: "publishedAt", // Optional: specify sorting order
              pageSize: 10, // Optional: specify page size
            },
          }
        );
        setNews(response.data.articles);
      } catch (error) {
        setError("Error fetching news. Please try again.");
      } finally {
        setLoading(false);
      }
    } else {
      setError("Both start date and end date must be selected.");
    }
  };

  useEffect(() => {
    if (searchActivityStartDate && searchActivityEndDate) {
      fetchNews();
    }
  }, [searchActivityStartDate, searchActivityEndDate]);

  return (
    <div>
      {error && <p>{error}</p>}
      {loading ? (
        <p>Loading news...</p>
      ) : (
        news.map((article, index) => (
          <div key={index}>
            <h3>{article.title}</h3>
            <p>{article.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default SelectedDate;
