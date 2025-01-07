const Home = () => {
    return (
      <div className="container mx-auto mt-8">
        <h1 className="text-4xl font-bold text-center">Bienvenue sur Ruby Learning Platform</h1>
        <p className="text-center mt-4 text-gray-600">
          Apprenez Ruby et Ruby on Rails facilement grâce à des cours interactifs et adaptés à votre niveau.
        </p>
        <div className="mt-8 flex justify-center">
          <a
            href="/courses"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Voir les cours
          </a>
        </div>
      </div>
    );
  };
  
  export default Home;
  