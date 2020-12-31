import { useState } from "react"
import { Container } from "react-bootstrap";
import ActorCard from "../components/ActorCard/ActorCard";
import SearchBox from "../components/SearchBox/SearchBox";
import ActorModel from "../model/ActorModel";
import './ActorsPage.css'

function ActorsPage() {
    const [actors, setActor] = useState([new ActorModel("Brad Pitt"), new ActorModel("Bruce Willis"), new ActorModel("Bla Willis"), new ActorModel("Sarah Willis")]);
    const [searchText, setSearchText] = useState("");
    const [results, setResults] = useState([]);

    const actorsView = actors.map((actor, index) => <ActorCard key={index} actor={actor}/>)
    return (
        <div className="p-actors">
            <Container>
                <SearchBox placeholder="Add actor..." value={searchText} onSearchChange={value => setSearchText(value)}
                    results={results}/>
                {actorsView}
            </Container>
        </div>
    )
}

export default ActorsPage;