


function ActorCard(props) {
    const {actor} = props;
    return (
        <div className="c-actorcard">
            <p>{actor.name}</p>
        </div>
    )
}

export default ActorCard;