import PropTypes from 'prop-types';

export default function SectionH2({ title, children }) {
  return (
    <>
      <h2>{title}</h2>
      <div>{children}</div>
    </>
  );
}

SectionH2.propTypes = {
  title: PropTypes.string,
};
