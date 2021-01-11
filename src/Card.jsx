const styles = {
    backgroundColor: 'gray',
    padding: "1rem"
}

export default (props) => {
    return (
        <div style={styles}>
            {props.children}
        </div>
    )
}
