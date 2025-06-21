const Card = ({ name, url, description, imageURL }) => {
    return (
        <article>
            <figure>
                <img src={imageURL} />
            </figure>
            <div>
                <header>{name}</header>
                {description}
                <footer>{url}</footer>
            </div>
        </article>
    )
}

export default Card
