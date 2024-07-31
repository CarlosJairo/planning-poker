const CardOnTable = ({ voted, isFinised }) => {
  return (
    <div
      className={`card-on-table ${voted && "selected"} ${isFinised && "show"}`}
    >
      {isFinised && voted.str}
    </div>
  );
};

export default CardOnTable;
