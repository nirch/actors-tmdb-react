import axios from "axios";
import { useState } from "react"
import { Container } from "react-bootstrap";
import ActorCard from "../components/ActorCard/ActorCard";
import SearchBox from "../components/SearchBox/SearchBox";
import ActorModel from "../model/ActorModel";
import './ActorsPage.css'

function ActorsPage() {
    const [actors, setActors] = useState([]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);
    const [resultsFull, setResultsFull] = useState([]);


    function searchTextChange(newSearchText) {
        setSearchText(newSearchText);

        // update results is search is not empty
        if (newSearchText) {
            axios.get("https://api.themoviedb.org/3/search/person?api_key=53d2ee2137cf3228aefae083c8158855&query=" + newSearchText).then(res => {
                setResults(res.data.results.map(result => result.name));
                setResultsFull(res.data.results);
            })
        } else {
            setResults([]);
        }
    }

    function addActor(index) {
        // alert(results[index]);
        setActors(actors.concat(new ActorModel(resultsFull[index].name, resultsFull[index].profile_path)));
        setSearchText("");
        setResults([]);
    }

    const actorsView = actors.map((actor, index) => <ActorCard key={index} actor={actor}/>)
    return (
        <div className="p-actors">
            <Container>
                <SearchBox placeholder="Add actor..." value={searchText} onSearchChange={searchTextChange}
                    results={results} onResultSelected={addActor}/>
                {actorsView}
            </Container>
        </div>
    )
}

export default ActorsPage;