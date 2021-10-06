import ButtonDelete from './ButtonDelete';

export default function Contacts({ contactsList, onDeleteContact }) {
  return (
    <ul>
      {contactsList.map(contact => {
        return (
          <li key={contact.id}>
            {contact.name}: {contact.number}{' '}
            <ButtonDelete
              type="button"
              text="Delete"
              id={contact.id}
              onClick={onDeleteContact}
            ></ButtonDelete>
          </li>
        );
      })}
    </ul>
  );
}
