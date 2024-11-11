interface ResetProps {
  resetLifeCounts: () => void; // Define the prop type
}

const Reset: React.FC<ResetProps> = ({ resetLifeCounts }) => {
  return (
    <span
      onClick={resetLifeCounts}
      className="material-symbols-outlined reset-button icon"
    >
      restart_alt
    </span>
  );
};

export default Reset;
