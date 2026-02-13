import { uploadMedia } from "../../api/media.api";

const MediaUploader = () => {
  const handleUpload = async (e) => {
    const file = e.target.files[0];
    const formData = new FormData();
    formData.append("file", file);
    await uploadMedia(formData);
  };

  return (
    <div style={{ flex: 1, padding: 10 }}>
      <h3>Upload Media</h3>
      <input type="file" onChange={handleUpload} />
    </div>
  );
};

export default MediaUploader;
