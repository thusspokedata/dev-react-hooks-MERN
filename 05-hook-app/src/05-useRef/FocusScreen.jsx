export const FocusScreen = () => {
    const onClick = () => {
        document.querySelector('input').focus();
    }
  return (
    <>
    <h1>FocusScreen</h1>
    <hr/>
    <input type="text" 
        placeholder="Ingrese su nombre: "
        className="form-control"
    />
    

    <button 
        className="btn btn-primary mt-2"
        onClick={ onClick}>Set Focus</button>
    </>
  )
} 
