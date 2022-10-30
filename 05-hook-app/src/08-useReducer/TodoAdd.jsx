import {useForm} from '../hook/useForm'

export const TodoAdd = ({onNewTodo}) => {
    const {description, onInputChange, onResetForm} = useForm({
        description: ""
    })

    const onFormSubmit = (e) => {
        e.preventDefault();
        if(description.length <= 1) return

        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }

        onNewTodo && onNewTodo(newTodo) /*--------------------------muy buena----------------*/
        onResetForm()
    }
  return (
    <form onSubmit={onFormSubmit}>
        <input
        text='text'
        placeholder="que hay que hacer?"
        className="form-control" 
        name="description"
        value={description}
        onChange={onInputChange}
        />
        <button 
            type="submit"
            className="btn btn-outline-primary mt-1">
            Agregar
        </button>
    </form>
  )
}
