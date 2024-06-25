

const Card = (props) =>{ 
    return (
        <div className="card">
            <p> {props.taskName}</p>
            
            <button>Complete</button>
        </div>
    )
}
export default Card;