export default function DeleteButton({ id, onDelete }) {
    return (
        <span className="material-symbols-outlined" onClick={() => onDelete(id)}>
            delete
        </span>
    );
}