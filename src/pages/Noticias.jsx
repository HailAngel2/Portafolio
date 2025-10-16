import NewsSection from '../templates/NewsSection';
import noticiasData from '../assets/Noticias.json';

const NewsPage = () => {
  const indices = noticiasData.map((_, index) => index);

  return (
    <main>
      <NewsSection indices={indices} />
    </main>
  );
};

export default NewsPage;
