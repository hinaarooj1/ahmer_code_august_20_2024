import React, { useState, useRef } from "react";
import axios from "axios";
import Notification from "./Notification";
import { BASE_URL } from "../../utils/constant";
const Edit = ({ setIsModalOpen, editableData, setState }) => {
  const [editedText, setEditedText] = useState(editableData.text1 || editableData.text2 || "");
  const [selectedImage, setSelectedImage] = useState(editableData.file || null);
  const [message, setMessage] = useState("");
  const [updatedFile, setUpdatedFile] = useState(null);
  const fileInputRef = useRef(null);
  const _id = editableData._id;

  const closeModal = () => {
    setIsModalOpen();
  };

  const handleTextChange = (e) => {
    setEditedText(e.target.value);
  };

  const handleImageChange = (e) => {
    const file = e.target.files && e.target.files[0];
    setUpdatedFile(file);
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setSelectedImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleClickImage = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const fetchData = async () => {
    try {
      const allData = await axios.post(`${BASE_URL}/api/getdata/image`);
      if (allData?.data?.allData.length > 0) {
        setState(allData.data.allData);
      }
    } catch (error) {
      console.error("Error fetching image data:", error);
    }
  };

  const fetchTextData = async () => {
    try {
      const allData = await axios.post(`${BASE_URL}/api/getdata`);
      if (allData?.data?.allData.length > 0) {
        setState(allData.data.allData);
      }
    } catch (error) {
      console.error("Error fetching text data:", error);
    }
  };

  const handleSubmit = async () => {
    if (updatedFile) {
      const form = new FormData();
      form.append('upload', updatedFile);
      form.append('_id', _id);
      try {
        const res = await axios.put(`${BASE_URL}/api/admin/updateFile`, form);
        setMessage(res.data.message);
        await fetchData();
        setTimeout(() => {
          closeModal();
        }, 2000);
      } catch (error) {
        console.error("Error updating file:", error);
      }
    } else if (editedText) {
      try {
        const apiCall = await axios.put(`${BASE_URL}/api/admin/updateText`, {
          _id,
          editedText
        });
        setMessage(apiCall.data.message);
        await fetchTextData();
        setTimeout(() => {
          closeModal();
        }, 2000);
      } catch (error) {
        console.error("Error updating text:", error);
      }
    } else {
      closeModal();
    }
  };

  return (
    <>
      {message && <Notification message={message} />}
      <div className="modal-backdrop d-flex justify-content-center align-items-center">
        <div className="modal-content p-4 w-100 w-sm-50 text-center position-relative">
          <span className="close-button" onClick={closeModal}>
            &times;
          </span>
          <h2 className="modal-title text-start mb-3">Detail</h2>
          <hr />
          {selectedImage ? (
            <div className="text-center edit-img-wrap mb-4">
              <img
                src={selectedImage}
                alt="Image"
                className="img-fluid mx-auto"
              />
            </div>
          ) : (
            <div className="form-group mb-4">
              <input
                type="text"
                value={editedText}
                onChange={handleTextChange}
                className="form-control"
              />
            </div>
          )}
          {editableData.file && (
            <button
              onClick={handleClickImage}
              className="btn btn-info text-white mb-2"
            >
              Select Image
            </button>
          )}
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
          <div>
            <hr />
            <button
              onClick={closeModal}
              className="btn btn-danger me-2 mb-2"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              className="btn btn-dark me-2 mb-2"
            >
              Continue
            </button>
          </div>
        </div>
      </div>
    </>

  );
};

export default Edit;
