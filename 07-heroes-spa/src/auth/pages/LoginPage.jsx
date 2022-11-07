import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
  const navigate = useNavigate();
  const onlogin = () => {
    navigate('/', { replace: true });
  };
  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />
      <button className="btn btn-primary" onClick={onlogin}>
        Login
      </button>
    </div>
  );
};

function solution(input, markers) {
  let string = '';
  if (input.includes('\n')) {
    for (let elem of markers) {
      string += input.replace(
        input.slice(input.indexOf(elem), input.indexOf('\n')),
        '',
      );
    }
  } else {
    return input.replace(input.slice(input.indexOf(elem)));
  }
  return string;
}
