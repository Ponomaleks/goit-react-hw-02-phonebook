export default function Form({ name, children, onSubmit }) {
  return (
    <form name={name} onSubmit={onSubmit}>
      {children}
    </form>
  );
}
