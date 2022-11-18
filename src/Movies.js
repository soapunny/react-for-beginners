import React from "react";

function Movies(){
    const [isLoading, setLoading] = React.useState(true);
    const [movies, setMovies] = React.useState([]);
    const [id, setId] = React.useState();

    React.useEffect(() => {
        fetch("https://yts.mx/api/v2/list_movies.json?minimum_rating=8.5&sort_by=rating&order_by=desc&limit=30")
        .then(res => res.json())
        .then(json => {
            console.log(json.data.movies);
            setMovies(value => json.data.movies);
        }).then((json) => {
            setLoading((value) => false);
        });
    }, []);

    const onSelect = (evt) => {
        setId(value => parseInt(evt.target.value));
        alert(id +" selected!!");
    }

    return (
    <div>
        <h2>Best Movies</h2>
        {isLoading ? <strong>Loading ...</strong> : 
        <div>
            <select value={id} onChange={onSelect}>
                {movies ? movies.map((movie, index) => <option value={movie.id} key={movie.id}>{movie.title_long} - {movie.rating}
                </option>) : null}
            </select>
            <hr />
        </div>
        }
    </div>
    );
}

export default Movies;