export default function StatusButton({ label, filterHandler }) {
  return (
    <div>
      <button onClick={filterHandler} className="button">
        {label}
      </button>
    </div>
  );
}
