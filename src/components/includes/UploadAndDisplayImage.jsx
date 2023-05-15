import React, { useState } from "react";

const UploadAndDisplayImage = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div style={{ height: "40px" }}>
            {selectedImage && (
                <div>
                    <img
                        className="image"
                        alt="not found"
                        width={"25px"}
                        src={URL.createObjectURL(selectedImage)}
                    />
                    <br />
                    <button
                        onClick={() => setSelectedImage(null)}
                        style={{ cursor: "pointer" }}
                    >
                        Remove
                    </button>
                </div>
            )}

            <br />
            <br />

            <input
                type="file"
                name="myImage"
                onChange={(event) => {
                    console.log(event.target.files[0]);
                    setSelectedImage(event.target.files[0]);
                }}
            />
        </div>
    );
};

export default UploadAndDisplayImage;
