import PageTransition from '../components/PageTransition';
import PortfolioGrid from '../components/PortfolioGrid';

const Portfolio = () => {
  return (
    <PageTransition>
      <div className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Our Work</h1>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            A selection of our latest projects across video production, social media campaigns, and digital marketing.
          </p>
        </div>

        <PortfolioGrid />
      </div>
    </PageTransition>
  );
};

export default Portfolio;
