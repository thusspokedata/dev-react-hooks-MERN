import { useCounter, useFetch } from '../hook';

export const MultipleCustomHooks = () => {
  const { counter, increment } = useCounter(1);
  const { data, isLoading, hasError } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`,
  );
  const { author, quote } = !!data && data[0];
  // if (isLoading) {
  //   return <h1>loading...</h1>;
  // }
  return (
    <>
      <h1>BrakingBad Quotes</h1>
      <hr />
      {/* {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-1">{quote}</p>
          <footer className="blockquote-footer">{author}</footer>
        </blockquote>
      )} */}

      <loadingQuote />
      <Quote />

      <button
        className="btn btn-primary"
        disable={isLoading}
        onClick={() => increment()}
      >
        Next Quote
      </button>
    </>
  );
};
