import "./Pet.scss"

interface IPetProps {
    name: string,
    age: number,
    notes: string,
    photo: string
}

const Pet: React.FC<IPetProps> = ({name, age, notes, photo}) => {
    return (
        <div className="pet">
            <div className="pet__left">
                <img src={photo}/>
            </div>
            <div className="pet__right">
                <span>Name: {name}</span>
                <span>Age: {age}</span>
                <span>Notes: {notes}</span>
            </div>
        </div>
    )
}

export default Pet