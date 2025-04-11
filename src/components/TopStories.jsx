import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchRewindArticles } from "../services/guardianApi";
import AOS from "aos";
import "aos/dist/aos.css";

const TopStories = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({
      disable: "phone",
      duration: 600,
      offset: 120,
      easing: "ease-in-out",
    });
  }, []);

  useEffect(() => {
    const loadArticles = async () => {
      try {
        const data = await fetchRewindArticles(8);
        const transformedArticles = data.map((article, index) => ({
          id: article.id,
          title: article.title,
          date: new Date(article.date).toLocaleDateString(),
          imgSrc: article.image || `/img/rewind/${index + 1}.jpg`,
          description: article.description,
          author: article.author || "The Guardian",
        }));
        setArticles(transformedArticles);
      } catch (error) {
        console.error("Error loading top stories:", error);
      } finally {
        setLoading(false);
      }
    };

    loadArticles();
  }, []);

  if (loading) {
    return (
      <section className="rewind block" id="topStories">
        <div className="container">
          <div className="secHeading">
            <h3>Top Stories</h3>
          </div>
          <div>Loading articles...</div>
        </div>
      </section>
    );
  }

  return (
    <section className="rewind block" id="topStories">
      <div className="container">
        <div className="secHeading">
          <h3>Top Stories</h3>
        </div>
        <div className="row">
          {articles.map((article, index) => (
            <div className="col-lg-3 col-md-6" key={article.id} data-aos="fade-up" data-aos-delay={index * 100}>
              <div className="article">
                <Link to={`/article/${article.id}`}>
                  <div className="aImg">
                    <img src={article.imgSrc} alt={article.title} loading="lazy" />
                  </div>
                  <div className="aContent">
                    <small>{article.date}</small>
                    <h4>{article.title}</h4>
                    <span>{article.author}</span>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopStories;
