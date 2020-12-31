import { useState } from "react"
import { Container } from "react-bootstrap";
import ActorCard from "../components/ActorCard/ActorCard";
import ActorModel from "../model/ActorModel";

function ActorsPage() {
    const [actors, setActor] = useState([new ActorModel("Brad Pitt"), new ActorModel("Bruce Willis")]);

    const actorsView = actors.map(actor => <ActorCard actor={actor}/>)
    return (
        <>
            <Container>
                {actorsView}
            </Container>
        </>
    )
}

export default ActorsPage;