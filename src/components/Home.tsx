import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section className="bg-light rounded-4 p-5 mt-4 shadow-sm">
      <div className="container px-1 py-2">
        <div className="row align-items-center">
            <h3>Citizen Wellbeing Program For Health Benefits</h3>
          <div className="col-lg-12 text-left mt-8 mt-lg-0">
            <div className="p-4 bg-white rounded-4 shadow-sm">
                <h2 className="h4">Southern Cross Info Hub</h2>
                <p className="mb-3 text-muted">
                Explore the Southern Cross society resource hub for wellbeing advice, community support,
                and health information.
                </p>
                <ul className="list-unstyled mb-3">
                <li>
                    <a
                    href="https://www.southerncross.co.nz/society/info-hub"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Southern Cross Info Hub
                    </a>
                </li>
                <li>
                    <a
                    href="https://www.southerncross.co.nz/society"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Southern Cross Society overview
                    </a>
                </li>
                <li>
                    <a
                    href="https://www.southerncross.co.nz/news"
                    target="_blank"
                    rel="noreferrer"
                    >
                    Latest health news
                    </a>
                </li>
                </ul>
                <p className="mb-0 text-muted">
                These links guide visitors to community wellbeing resources and practical health support.
                </p>
            </div>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
