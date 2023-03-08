import "../Configurator/style.css";
import "../../index.css";
import { useStore } from "../../store/store";
const Button = () => {
  return (
    <div className="configurator">
      {/* <div className="Configurator_section_title">Color</div> */}

      <div className="configurator__section">
        <div className="btnContainer">
          <button>Explode</button>
        </div>
        <div className="btnContainer">
          <button className="configurator__section__title"
            onClick={() => {
              //
              useStore.setState({
                openDimension: !useStore.getState().openDimension,
              });
            }}>
              Dimension
              </button>
        </div>
        <div className="btnContainer">
          <button
            className="configurator__section__title"
            onClick={() => {
              //
              useStore.setState({
                openExplode: !useStore.getState().openExplode,
              });
            }}
          >
            Statistics
          </button>
        </div>
      </div>
    </div>
  );
};

export default Button;
