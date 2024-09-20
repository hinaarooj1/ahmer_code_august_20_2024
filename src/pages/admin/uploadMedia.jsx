import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable, { TableColumn } from "react-data-table-component";
import Edit from "./Edit";
import Notification from "./Notification";
import CustomCursor from "../../components/CustomCursor";
import { BASE_URL } from "../../utils/constant";
import './media.css'
// const MyDataRow = {
//   _id: string;
//   file?: string;
//   text1?: string;
//   text2?: string;
// }

const UploadMedia = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isLoading, setisLoading] = useState(false);
    const [dropdownValue, setDropdownValue] = useState("");
    const [inputValue, setInputValue] = useState({ text: "", wordSlot: 1 });
    const [message, setMessage] = useState("");
    const [wordSlot, setWordSlot] = useState(1);
    const [loader, setLoader] = useState(false);
    const [onlyText, setOnlyText] = useState("");
    const [fileValue, setFileValue] = useState([]);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [state, setState] = useState([]);
    const [editableData, setEditableData] = useState(undefined);
    const [slug, setSlug] = useState("");
    const [error, setError] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [tokens, setTokens] = useState("");
    const [slugValues, setSlugValues] = useState([]);
    // const BASE_URL = process.env.REACT_APP_BASE_URL; 
    const handleDropDownChange = (event) => {

        setWordSlot(Number(event.target.value)); // Update the state with the selected value
    };

    useEffect(() => {
        const storedToken = typeof window !== "undefined" && typeof sessionStorage !== "undefined" ? sessionStorage.getItem('token') : null;
        if (storedToken) {
            setTokens(storedToken);
        }
    }, []); // Empty dependency array ensures this runs only once

    const fetchData = async () => {

        try {
            const response = await axios.post(`${BASE_URL}/api/getdata`);
            if (response?.data?.allData.length > 0) {
                setState(response.data.allData);
            }
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    const columns: TableColumn<MyDataRow>[] = [
        {
            name: "Data",
            selector: (row: any) => "file",
            cell: (row: any) => (
                <>
                    {row.text1 ? (
                        <div className="slot-text">
                            <span className="badge badge-success">Slot 1</span>
                            {row.text1}
                        </div>
                    ) : (
                        <div className="slot-text">
                            <span className="badge badge-success">Slot 2</span>
                            {row.text2}
                        </div>
                    )}
                </>
            ),
        },
        {
            name: "Action",
            cell: (row) => (
                <div className="action-button">
                    <button
                        type="button"
                        onClick={() => handleEdit(row)}
                        className="btn btn-info text-white mb-2 me-2"
                    >
                        Edit
                    </button>
                    <button
                        type="button"
                        onClick={() => handleDelete(row._id)}
                        className="btn btn-danger mb-2"
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];


    const handleEdit = (row: MyDataRow) => {
        if (row) {
            console.log("Edit row:", row);
            setEditableData(row);
            setIsModalOpen(true);
        }
    };

    const handleDelete = async (id: string) => {
        console.log("Delete row with id:", id);
        const apiCall = await axios.delete(`${BASE_URL}/api/admin/delete/${id}`);
        setMessage(apiCall.data.message);
        fetchData();
    };

    const handleSlug = async (event: any, index: Number) => {
        const newSlugValues = [...slugValues];
        const inputValue = event.target.value;
        newSlugValues[index] = {
            ...newSlugValues[index],
            value: inputValue,
        };
        setSlugValues(newSlugValues);
        const form = new FormData();
        form.append("text", event.target.value);
        const check = await axios.post(`${BASE_URL}/api/admin/textcheck`, form, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        });
        console.log(check.data.resp, "checkckckk");
        if (check.data.resp) {
            setError(true);
        } else {
            setError(false);
        }
        setSlug(event.target.value);
    };

    const toggleDropdown = () => setIsDropdownOpen(!isDropdownOpen);

    const handleDropdownChange = (value: string) => {
        setDropdownValue(value);
        setIsDropdownOpen(false);
    };

    const DropDown = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setWordSlot(Number(e.target.value));
    };

    const handleOnlyText = (e: React.ChangeEvent<HTMLInputElement>) => {
        setOnlyText(e.target.value);
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setInputValue(prev => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleFileInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const files = event.target.files;
        const fileList = Array.from(files || []).map(file => ({
            name: file.name,
            type: file.type,
            size: file.size,
            lastModified: file.lastModified,
            file,
        }));
        setFileValue(fileList);
    };

    const handleButtonClick = () => navigate("/");

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setLoader(true);
        const form = new FormData();
        if (!onlyText) {
            fileValue.forEach((file, index) => {
                form.append(`files[${index}]`, file.file);
            });
            slugValues.forEach((slug, index) => {
                form.append(`slugs[${index}]`, slug.value);
            });
            try {
                await axios.post(`${BASE_URL}/api/admin`, form);
                fetchData();
                setFileValue([]);
                setDropdownValue("");
            } catch (error) {
                console.error("Error submitting form:", error);
            }
        } else {
            form.append("inputValue", onlyText);
            form.append("wordSlot", wordSlot.toString());
            try {
                const response = await axios.post(`${BASE_URL}/api/text`, form);
                setMessage(response.data.message);
                fetchData();
                setOnlyText("");
                setWordSlot(1);
            } catch (error) {
                console.error("Error submitting text form:", error);
            }
        }
        setLoader(false);
        setTimeout(() => setMessage(""), 6000);
    };

    const login = async (event: React.FormEvent) => {
        event.preventDefault();
        const form = new FormData();
        form.append("email", email);
        form.append("password", password);
        try {
            const response = await axios.post(`${BASE_URL}/api/signin`, form);
            const data = response.data;
            if (typeof window !== "undefined" && typeof sessionStorage !== "undefined") {
                sessionStorage.setItem('token', data.token);
            }
            setTokens(data.token);
        } catch (error) {
            console.error("Error during login:", error);
        }
    };
    const [file, setFile] = useState(null);
    const [mediaType, setMediaType] = useState('videos'); // Default type
    const [messageMedia, setMessageMedia] = useState('');

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleMediaTypeChange = (event) => {
        setMediaType(event.target.value);
    };

    const handleUpload = async () => {
        if (!file) {
            setMessageMedia('Please select a file to upload.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);
        formData.append('type', mediaType); // Include media type in the request

        try {
            setMessageMedia('');
            setisLoading(true)
            await axios.post(`${BASE_URL}/api/admin/uploadMedia`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            setMessageMedia('Upload successful!');
            setFile(null); // Reset file input
            setMediaType('videos'); // Reset media type
            setisLoading(false)

        } catch (error) {
            console.error('Error uploading media', error);
            setMessageMedia('Upload failed. Please try again.');
            setisLoading(false)

        }
    };
    return (
        <div className="main-admin">
            <CustomCursor />
            {message && <Notification message={message} setMessage={setMessage} />}
            {!tokens ? (
                <div className="d-flex min-vh-100 flex-column justify-content-center px-4 py-5">
                    <div className="mx-auto w-100" style={{ maxWidth: "400px" }}>
                        <h2 className="mt-4 text-dark text-center h4 font-weight-bold">
                            Sign in to your account
                        </h2>
                    </div>
                    <div className="mt-4 mx-auto w-100" style={{ maxWidth: "400px" }}>
                        <form onSubmit={login}>
                            <div className="form-group">
                                <label htmlFor="email" className="form-label">
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="form-control"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="form-group mt-3">
                                <label htmlFor="password" className="form-label">
                                    Password
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="form-control"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </div>
                            </div>
                            <div className="mt-4 d-flex justify-content-center">
                                <button
                                    type="submit"
                                    className="btn btn-primary btn-block"
                                >
                                    Sign in
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            ) : (
                <>
                    <div className="admin-upload-page">
                        <h1>Admin Upload Page</h1>
                        <div className="upload-form">
                            <label>
                                Select Media Type:
                                <select value={mediaType} onChange={handleMediaTypeChange}>
                                    <option value="videos">Videos</option>
                                    <option value="images">Images</option>
                                    <option value="pngImages">Images (png)</option>
                                    <option value="alphaVideos">Videos (Alpha)</option>
                                </select>
                            </label>

                            <input type="file" onChange={handleFileChange} />
                            <button onClick={handleUpload}>Upload</button>
                        </div>

                        {messageMedia && <p className="upload-message">{messageMedia}</p>}
                        {isLoading && <p className="uploading-message">Media is uploading</p>}
                    </div>


                </>
            )}
        </div>
    );
};

export default UploadMedia;

const Modal = (loader) => {
    return (
        <>
            {loader && (
                <div className="loader-fixed inset-0 z-50 d-flex align-items-center justify-content-center bg-dark bg-opacity-50">
                    <div className="bg-white loader-w-auto text-center p-4 rounded">
                        {loader && (
                            <button
                                type="button"
                                className="btn btn-primary position-relative d-flex align-items-center justify-content-center"
                            >
                                <span>
                                    <div
                                        className="spinner-border spinner-border-sm"
                                        role="status"
                                    ></div>{" "}
                                    Processing...
                                </span>
                            </button>
                        )}
                    </div>
                </div>
            )}
        </>
    );
};

