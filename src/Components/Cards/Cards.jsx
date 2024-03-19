import './Cards.css'

const Cards = ({ character, handleCardClick }) => {
    return (
        <div className="card" onClick={() => handleCardClick(character.id)}>
            <img src={character.image_url} alt={character.name} className={character.status.toLowerCase() === 'dead' ? "image-dead" : ""} />
            <div className="card-body">
                <h3 className="card-title">{character.name}</h3>
                <p className="card-text">{character.species}</p>
            </div>
        </div>
    )
}

export default Cards
