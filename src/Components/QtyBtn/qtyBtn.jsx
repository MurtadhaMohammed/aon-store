import "./qtyBtn.css";

const QtyBtn = ({ value = 0, onChange }) => {
  return (
    <div className="qty-btn">
      {value === 0 ? (
        <button className="add-btn" onClick={() => onChange(value + 1)}>
          Add
        </button>
      ) : (
        <div className="qty-group">
          <button className="dec-btn" onClick={() => onChange(value - 1)}>
            -
          </button>
          <span className="value">{value}</span>
          <button className="inc-btn" onClick={() => onChange(value + 1)}>
            +
          </button>
        </div>
      )}
    </div>
  );
};

export default QtyBtn;
