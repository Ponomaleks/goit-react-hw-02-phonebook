export default function ButtonDelete({ type, text, id, onClick }) {
  return (
    <button type={type} onClick={() => onClick(id)}>
      {text}
    </button>
  );
}
