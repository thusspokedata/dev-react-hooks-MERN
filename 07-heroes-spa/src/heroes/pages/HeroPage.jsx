import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroById';

export const HeroPage = () => {
  const { id } = useParams();
  const hero = getHeroById(id);
  const navigate = useNavigate();
  const onReturn = () => {
    navigate(-1); //goes to preview page!!!!!
  };
  if (!hero) {
    return <Navigate to="/marvel" />;
  }
  console.log(hero);
  return (
    <div>
      <div className="row mt-5 d-flex justify-content-evenly">
        <div className="col-4">
          <img
            src={`/assets/heroes/${hero.id}.jpg`}
            alt={hero.superhero}
            className="img-thumbnail"
          />
        </div>
        <div className="col-4 card">
          <h3>{hero.superhero}</h3>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">
              <b>Alterego:</b> {hero.alter_ego}
            </li>
            <li className="list-group-item">
              <b>Publisher:</b> {hero.publisher}
            </li>
            <li className="list-group-item">
              <b>first appearance:</b> {hero.first_appearance}
            </li>
          </ul>
          <h5 className="mt-5">Characters</h5>
          <p>{hero.characters}</p>
          <button className="btn btn-outline-info" onClick={onReturn}>
            back
          </button>
        </div>
      </div>
    </div>
  );
};
