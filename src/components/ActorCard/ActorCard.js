import { Card } from "react-bootstrap";



function ActorCard(props) {
    const {actor} = props;
    return (
        <div className="c-actorcard">
            <Card>
            <Card.Img variant="top" src={actor.img} />
            <Card.Body>
                <Card.Title>{actor.name}</Card.Title>
            </Card.Body>
            </Card>        
        </div>
    )
}

export default ActorCard;