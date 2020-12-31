import { useState } from "react"
import { Container } from "react-bootstrap";
import ActorCard from "../components/ActorCard/ActorCard";
import SearchBox from "../components/SearchBox/SearchBox";
import ActorModel from "../model/ActorModel";
import './ActorsPage.css'

function ActorsPage() {
    const [actors, setActor] = useState([new ActorModel("Brad Pitt"), new ActorModel("Bruce Willis")]);
    const [searchText, setSearchText] = useState("");

    const actorsView = actors.map(actor => <ActorCard actor={actor}/>)
    return (
        <div className="p-actors">
            <Container>
                <SearchBox placeholder="Add actor..." value={searchText} onSearchChange={value => setSearchText(value)}/>
                {actorsView}
            </Container>
        </div>
    )
}

export default ActorsPage;