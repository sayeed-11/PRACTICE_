import withCounder from "../HOC/withCounder";

const ClickCounter = ({count, increment}) => {
  return (
    <div>
      <button
        onClick={increment}
        className="bg-red-500 text-white px-5 py-2 shadow-md rounded-md"
        type="button"
      >
        clicked {count} times
      </button>
    </div>
  );
};

export default withCounder(ClickCounter);