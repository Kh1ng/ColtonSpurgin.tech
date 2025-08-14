import PropagateLoader from "react-spinners/PropagateLoader";

function Loading(loading) {
  return (
    <div className="loading-wrap">
      <PropagateLoader
        className="loading-center"
        color="#9CD7E5"
        loading={loading}
        size={10}
      />
    </div>
  )
}

export default Loading
