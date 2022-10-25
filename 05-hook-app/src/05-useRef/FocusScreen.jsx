export const FocusScreen = () => {
  let inputRef = '';
  const onClick = () => {
    // document.querySelector('input').focus();
    console.log(inputRef);
  };
  return (
    <>
      <h1>FocusScreen</h1>
      <hr />
      <input
        ref={inputRef}
        type="text"
        placeholder="Ingrese su nombre: "
        className="form-control"
      />

      <button className="btn btn-primary mt-2" onClick={onClick}>
        Set Focus
      </button>
    </>
  );
};
