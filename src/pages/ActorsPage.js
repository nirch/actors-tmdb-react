import { useState } from "react"
import { Container } from "react-bootstrap";
import ActorCard from "../components/ActorCard/ActorCard";
import SearchBox from "../components/SearchBox/SearchBox";
import ActorModel from "../model/ActorModel";
import './ActorsPage.css'

function ActorsPage() {
    const [actors, setActors] = useState([new ActorModel("Brad Pitt"), new ActorModel("Bruce Willis"), new ActorModel("Bla Willis"), new ActorModel("Sarah Willis")]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);

    function searchTextChange(newSearchText) {
        setSearchText(newSearchText);

        // update results is search is not empty
        if (newSearchText) {
            setResults(["John Doe", "Dave Doe"]);
        } else {
            setResults([]);
        }
    }

    function addActor(index) {
        // alert(results[index]);
        setActors(actors.concat(new ActorModel(results[index])));
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