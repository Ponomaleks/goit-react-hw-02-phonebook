export default function Contacts({ contactsList }) {
  return (
    <ul>
      {contactsList.map(contact => {
        return <li key={contact.id}>{contact.name}</li>;
      })}
    </ul>
  );
}
