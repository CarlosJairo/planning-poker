const CardOnTable = ({ voted }) => {
  return <div className={`card-on-table ${voted ? "selected" : null}`}></div>;
};

export default CardOnTable;
