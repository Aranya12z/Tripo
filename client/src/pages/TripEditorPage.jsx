import TripCanvas from "../components/canvas/TripCanvas";
import TripEditorSidebar from "../components/sidebar/TripEditorSidebar";

const TripEditorPage = () => {
  return (
    <div style={containerStyle}>
      <div style={canvasContainerStyle}>
        <TripCanvas />
      </div>

      <TripEditorSidebar />
    </div>
  );
};

const containerStyle = {
  display: "flex",
  height: "100vh",
};

const canvasContainerStyle = {
  flex: 1,
};

export default TripEditorPage;

