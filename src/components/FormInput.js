import "./FormInput.css";

function FormInput(props) {
    return (
        <div className="formInput">
            <input name={props.name} placeholder={props.placeholder}/>
        </div>
    )
}

export default FormInput