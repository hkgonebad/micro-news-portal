import { Link } from "react-router-dom";

const articlesData = [
  {
    id: 13,
    title: "Reliance will continue to play a leading role in Gujarat’s growth story",
    imageUrl: "/img/rewind/1.jpg",
    description: "Reliance will continue to play a leading role in Gujarat’s growth story | January 2024",
  },
  {
    id: 14,
    title: '"Reliance has proudly partnered in Tamil Nadu’s growth over the years"',
    imageUrl: "/img/rewind/no-image.jpg",
    description: "RIL CMD Mukesh Ambani at Tamil Nadu Global Investors’ Meet | January 2024",
  },
  {
    id: 15,
    title: "Nita Ambani re-elected unanimously as IOC member",
    imageUrl: "/img/rewind/3.jpg",
    // description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  { 
    id: 16,
    title: "Nita Ambani announces new initiative empowering women in sports to mark 3rd anniversary of Her Circle",
    imageUrl: "/img/rewind/4.jpg",
    // description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 17,
    title: "NMACC marks one year of celebrating the best of India and the world",
    imageUrl: "/img/rewind/5.jpg",
    // description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 18,
    title: "Isha M Ambani launches book on breast health awareness",
    imageUrl: "/img/rewind/6.jpg",
    // description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 19,
    title: "Nita M Ambani launches New Health Seva Plan to commemorate Sir HN RFH’s 10-year anniversary",
    imageUrl: "/img/rewind/7.jpg",
    // description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 20,
    title: "For India to shine, more and more girls must take up STEM",
    imageUrl: "/img/rewind/no-image.jpg",
    // description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 21,
    title: "Isha M Ambani among Fortune’s ‘100 Most Powerful Women Asia 2024’",
    imageUrl: "/img/rewind/no-image.jpg",
    // description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 22,
    title: "Nita M Ambani launches new health seva plan commemorating Sir HN Reliance Foundation Hospital’s 10-year anniversary",
    imageUrl: "/img/rewind/no-image.jpg",
    // description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 23,
    title: "RIL leaders address Reliance colleagues and families at grand Diwali event",
    imageUrl: "/img/rewind/no-image.jpg",
    // description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
  {
    id: 24,
    title: "Reliance is becoming a deep-tech and advanced manufacturing company to propel growth for a Viksit Bharat",
    imageUrl: "/img/rewind/no-image.jpg",
    // description: "RIL CMD Mukesh Ambani at 10th Vibrant Gujarat Summit | January 2024",
  },
];

const Rewind = () => {
  return (
    <section className="rewind pb-4">
      <div className="container">
        <div className="row">
          {articlesData.map((article) => (

            <div key={article.id} className="col-xl-3 col-lg-4 col-md-6">
             <Link to={`/LeadershipHighlights/article/${article.id}`}>
              <div className="article articleAlt">
                <div className="aImg special">
                  <img src={article.imageUrl} alt="" />
                </div>
                <div className="aContent">
                 
                    <h4>{article.title}</h4>
         
                  {article.description && <span>{article.description}</span>}
                </div>
         
              </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Rewind;
