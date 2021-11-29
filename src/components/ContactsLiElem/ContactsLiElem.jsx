function ContactsLiElem({ id, name, number, onXClick }) {
    return (
        <li id={id} key={id}>
            <span>{name}: {number}</span>
            <button type="button" onClick={onXClick}>Delete</button>
    </li>
)
}
export default ContactsLiElem