import "./Movie.scss"

interface IMovieProps {
    name: string,
    director: string,
    release: number,
    studio: string,
    poster: string
}

const Movie: React.FC<IMovieProps> = ({name, director, release, studio, poster}) => {
    return (
        <div className="movie">
            <div className="movie__left">
                <img src={poster}/>
            </div>
            <div className="movie__right">
                <span>Name: {name}</span>
                <span>Director: {director}</span>
                <span>Release Year: {release}</span>
                <span>Studio: {studio}</span>
            </div>
        </div>
    )
}

export default Movie