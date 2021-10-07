import PropTypes from 'prop-types';

export default function Button({ type, text }) {
  return <button type={type}>{text}</button>;
}

Button.propTypes = {
  type: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};
