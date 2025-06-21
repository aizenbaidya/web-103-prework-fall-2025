const Card = ({ id, name, url, description, imageURL }) => {
    return (
        <article>
            <figure>
                <a href={`/view/${id}`}>
                    <img src={imageURL} />
                </a>
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
