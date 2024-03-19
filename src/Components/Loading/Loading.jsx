import imgLoading from '../../assets/loading.png';
import './Loading.css'

const Loading = () => {
  return (
    <div className="loading">
      <img src={imgLoading} alt="Loading" className="loading-img" />
      <p className="loading-text">Loading</p>
    </div>
  );
}

export default Loading;
