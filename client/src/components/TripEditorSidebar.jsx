import MediaUploader from "../media/MediaUploader";
import InvitePlaceholder from "../collaboration/InvitePlaceholder";
import VisibilityPlaceholder from "../collaboration/VisibilityPlaceholder";

const TripEditorSidebar = () => {
  return (
    <div style={sidebarStyle}>
      {/* Media Section */}
      <div style={sectionStyle}>
        <h3>Media</h3>
        <MediaUploader />
      </div>

      {/* Collaboration Section */}
      <div style={sectionStyle}>
        <h3>Collaboration</h3>
        <InvitePlaceholder />
        <VisibilityPlaceholder />
      </div>
    </div>
  );
};

const sidebarStyle = {
  width: "320px",
  borderLeft: "1px solid #e5e5e5",
  padding: "16px",
  overflowY: "auto",
  background: "#fafafa",
};

const sectionStyle = {
  marginBottom: "24px",
};

export default TripEditorSidebar;

