function isBannedWord(str) {
    return str.match(/banana/)
}

export default Comment = (props) => {
    return !isBannedWord(props.text) ?
        (
            <div className="comment">
                <a href="/"><img src="" alt="avatar" /></a>
                <div className="content">
                    <a href="" className="author">{props.author}</a>
                    <p className="date">11/12 6:00pm</p>
                    <p className="text">{props.text}</p>
                </div>
            </div>
        ) : (
            <h5>Banned Comment!</h5>
        )
}
