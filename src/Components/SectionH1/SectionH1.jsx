import PropTypes from 'prop-types';

export default function SectionH1({ title, children }) {
  return (
    <>
      <h1>{title}</h1>
      <div>{children}</div>
    </>
  );
}

SectionH1.propTypes = {
  title: PropTypes.string,
  children: PropTypes.object,
};
