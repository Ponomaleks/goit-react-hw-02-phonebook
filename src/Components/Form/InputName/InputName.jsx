import PropTypes from 'prop-types';

export default function InputName({ value, onChange }) {
  return (
    <label className="nameLabel">
      Name
      <input
        onChange={onChange}
        type="text"
        name="name"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
        required
        value={value}
      />
    </label>
  );
}

InputName.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
