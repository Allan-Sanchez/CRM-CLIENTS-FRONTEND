import BestSeller from '../components/graph/BestSeller';
import BestClient from '../components/graph/BestClient';

const Home = () => {
  return (
    <div className="lg:p-10 w-full min-w-full  grid lg:grid-cols-2">
      <BestSeller></BestSeller>
      <BestClient></BestClient>
    </div>
  );
};

export default Home;
