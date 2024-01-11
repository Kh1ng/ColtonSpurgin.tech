import PropagateLoader from "react-spinners/PropagateLoader";

function Loading(loading) {
  return (
    <div className="loading h-screen w-screen bg-900 text-100 justify-center items-center">
      <PropagateLoader
        className="align-middle justify-center"
        color="#9CD7E5"
        loading={loading}
        size={10}
      />
    </div>
  );
}
export default Loading;
