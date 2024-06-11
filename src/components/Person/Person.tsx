import "./Person.scss"

interface IPersonProps {
    name: string,
    email: string,
    phone: string,
    city: string,
    skills: string,
    photo: string
}

const Person: React.FC<IPersonProps> = ({name, email, phone, city, skills, photo}) => {
    return (
        <div className="person">
            <div className="person__left">
                <img src={photo}/>
            </div>
            <div className="person__right">
                <span>Full Name: {name}</span>
                <span>Email: {email}</span>
                <span>Phone: {phone}</span>
                <span>City: {city}</span>
                <span>Skills: {skills}</span>
            </div>
        </div>
    )
}

export default Person