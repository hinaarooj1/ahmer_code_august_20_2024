import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable, { TableColumn } from "react-data-table-component";
import { BASE_URL } from "../../utils/constant";
import './media.css';

const UploadMedia = () => {
    const [mediaData, setMediaData] = useState([]);
    const [file, setFile] = useState(null);
    const [mediaType, setMediaType] = useState('videos'); // Default type
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    // Fetch media data from API
    const fetchMediaData = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/api/admin/getMedia`);
            setMediaData(response.data.media);
        } catch (error) {
            console.error('Error fetching media data:', error);
        }
    };
    const tableCustomStyles = {
        header: {
            style: {
                backgroundColor: '#333',
                color: '#fff',
            },
        },
        headCells: {
            style: {
                color: '#fff',
                backgroundColor: '#333',
            },
        },
        cells: {
            style: {
                color: '#fff',
                backgroundColor: '#1a1a1a',
            },
        },
        rows: {
            style: {
                backgroundColor: '#1a1a1a',
                color: '#fff',
            },
            stripedStyle: {
                backgroundColor: '#333',
            },
        },
    };

    useEffect(() => {
        fetchMediaData();
    }, []);

    // Handle file input change
    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    // Handle media type change (dropdown)
    const handleMediaTypeChange = (event) => {
        setMediaType(event.target.value);
    };

    // Handle upload button click
    const handleUpload = async () => {
        if (!file) {
            setMessage('Please select a file to upload.');
            return;
        }
        if (!mediaType || mediaType === null || mediaType === "") {
            setMessage('Please select a file type to upload.');

        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', mediaType);

        try {
            setMessage('');
            setIsLoading(true);
            await axios.post(`${BASE_URL}/api/admin/uploadMedia`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessage('Upload successful!');
            setFile(null);
            setMediaType("videos");
            fetchMediaData(); // Fetch updated media data
        } catch (error) {
            console.error('Error uploading media:', error);
            setMessage('Upload failed. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    // Handle delete media
    const handleDelete = async (id) => {
        try {
            await axios.delete(`${BASE_URL}/api/admin/deleteMedia/${id}`);
            setMessage('Media deleted successfully.');
            fetchMediaData(); // Fetch updated media data
        } catch (error) {
            console.error('Error deleting media:', error);
            setMessage('Delete failed. Please try again.');
        }
    };

    // Define columns for the media table
    const columns = [
        {
            name: "Media",
            selector: (row) => row.fileName,
            cell: (row) => row.type === "images" || row.type === "image/png" ? <img className="preview-admin" src={row.thumbnailUrl} /> : row.type === "videos" ? <video className="preview-admin" >
                <source src={row.thumbnailUrl} type="video/mp4" />
            </video> : row.type === "pngImages" ? <img className="preview-admin" src={row.thumbnailUrl} /> : row.type === "alphaVideos" ? <video className="preview-admin" >
                <source src={row.thumbnailUrl} type="video/mp4" />
            </video> : ""
        },
        {
            name: "Type",
            selector: (row) => row.type,
        },
        {
            name: "Actions",
            cell: (row) => (
                <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(row._id)}
                >
                    Delete
                </button>
            ),
        },
    ];

    return (
        <div className="upload-media-container">
            <h1>Admin Media Upload</h1>

            {/* Upload Section */}
            <div className="upload-section">
                <label className="label-text">
                    Select Media Type:
                    <select value={mediaType} onChange={handleMediaTypeChange} className="select-input">
                        <option value="videos">Videos</option>
                        <option value="images">Images</option>
                        <option value="pngImages">Images (PNG)</option>
                        <option value="alphaVideos">Alpha Videos</option>
                    </select>
                </label>
                <input type="file" onChange={handleFileChange} className="file-input" />
                <button onClick={handleUpload} disabled={isLoading} className="btn-upload">
                    {isLoading ? "Uploading..." : "Upload"}
                </button>
                {message && <p className="upload-message">{message}</p>}
            </div>

            {/* Media Data Table */}
            <div className="media-table">
                <DataTable
                    title="Uploaded Media"
                    columns={columns}
                    data={mediaData}
                    pagination
                    customStyles={tableCustomStyles}
                />
            </div>
        </div>
    );
};

export default UploadMedia;
