import React, { useState } from "react";

interface ImageUploaderProps {
    handleImagesChange: (images: File[]) => void
  imageCountReq: number
}

const ImageUploader: React.FC<ImageUploaderProps> = ({ handleImagesChange, imageCountReq }) => {
  const [images, setImages] = useState<File[]>([]);
  const [error, setError] = useState<string>("");

  const maxImages = imageCountReq; // Maximum number of images allowed

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
  
    const selectedFiles = Array.from(e.target.files);
    const totalImages = images.length + selectedFiles.length;
  
    if (totalImages > maxImages) {
      setError(`You can upload a maximum of ${maxImages} images. Remove some files and try again.`);
      return;
    }
  
    if (totalImages < maxImages) {
      setError(`You can upload ${maxImages - totalImages} more images.`);
    } else {
      setError(""); // Clear the error if everything is fine
    }
  
    const updatedImages = [...images, ...selectedFiles];
    setImages(updatedImages);
    handleImagesChange(updatedImages); // Notify parent component
  };
  

  const handleRemoveImage = (index: number) => {
    const updatedImages = images.filter((_, i) => i !== index);
    if(updatedImages.length < maxImages){ setError("")}
    setImages(updatedImages);
    handleImagesChange(updatedImages);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();

    const droppedFiles = Array.from(e.dataTransfer.files);

    if (images.length + droppedFiles.length > imageCountReq) {
      setError(`You can upload up to ${imageCountReq} images.`);
      return;
    }

    const updatedImages = [...images, ...droppedFiles];
    setImages(updatedImages);
    handleImagesChange(updatedImages);
    setError("");
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
  };

  return (
    <div>
      <h3>Upload Images</h3>
      <div
        style={{
          border: "2px dashed #ccc",
          borderRadius: "5px",
          padding: "20px",
          textAlign: "center",
          marginBottom: "10px",
        }}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <p>Drag and drop images here, or click to select files</p>
        <input
          type="file"
          accept="image/*"
          multiple
          onChange={handleFileChange}
          style={{
            display: "block",
            margin: "10px auto",
          }}
        />
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}

      <div style={{ marginTop: "10px" }}>
        {images.length > 0 && (
          <div>
            <h4>Uploaded Images:</h4>
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
              {images.map((image, index) => (
                <div key={index} style={{ position: "relative" }}>
                  <img
                    src={URL.createObjectURL(image)}
                    alt={`Preview ${index + 1}`}
                    style={{
                      width: "100px",
                      height: "100px",
                      objectFit: "cover",
                    }}
                  />
                  <button
                    onClick={() => handleRemoveImage(index)}
                    style={{
                      position: "absolute",
                      top: 0,
                      right: 0,
                      background: "red",
                      color: "white",
                      border: "none",
                      borderRadius: "50%",
                      cursor: "pointer",
                    }}
                  >
                    &times;
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
