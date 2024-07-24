import { ProgressBar } from "react-loader-spinner";

const Loader = () => {
  return (
    <div className="loader">
      <ProgressBar
        visible={true}
        height="180"
        width="180"
        color="#4fa94d"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
};

export default Loader;
