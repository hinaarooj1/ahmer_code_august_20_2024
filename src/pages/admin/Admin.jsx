import { useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import DataTable, { TableColumn } from "react-data-table-component";
import Edit from "./Edit";
import Notification from "./Notification";
import CustomCursor from "../../components/CustomCursor";
import './admin.css'
// const MyDataRow = {
//   _id: string;
//   file?: string;
//   text1?: string;
//   text2?: string;
// }

const Admin = () => {
    const navigate = useNavigate();
    const [isModalOpen, setIsModalOpen] = useState(false);
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
    let BASE_URL = "https://webservice-xjm7.onrender.com"

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

    return (
        <div className="main-admin">
            <CustomCursor/>
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
                    <div className="container mx-auto max-w-screen-xl d-flex flex-wrap align-items-center justify-between p-4">
                        <div className="mt-2 w-100 d-flex flex-column gap-3">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="position-relative">
                                    <button
                                        id="dropdownDefaultButtonadmin"
                                        onClick={toggleDropdown}
                                        style={{backgroundColor:'#1f4cd5'}}
                                        className="btn btn-primary text-white dropdown-toggle"
                                        type="button"
                                    >
                                        {dropdownValue ? dropdownValue : "Select to upload"}
                                    </button>
                                    <div
                                        id="dropdown"
                                        className={`dropdown-menu${isDropdownOpen ? ' show' : ''}`}
                                        aria-labelledby="dropdownDefaultButtonadmin"
                                    >
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={() => handleDropdownChange("text")}
                                        >
                                            Text
                                        </a>
                                        <a
                                            className="dropdown-item"
                                            href="#"
                                            onClick={() => handleDropdownChange("image")}
                                        >
                                            Image
                                        </a>
                                    </div>
                                </div>
                                {loader && Modal(loader)}
                                <button
                                    onClick={handleButtonClick}
                                    className="btn btn-warning"
                                    style={{ padding: "0.5rem 1rem", borderRadius: "0.5rem", fontWeight: "500" }}
                                >
                                    Home
                                </button>
                            </div>

                            {dropdownValue && (
                                <form
                                    className="col-4 w-100 border mx-auto p-4"
                                    onSubmit={handleSubmit}
                                >
                                    {dropdownValue === "text" && (
                                        <>
                                            <label className="form-label text-success">
                                                Text
                                            </label>
                                            <input
                                                type="text"
                                                name="text"
                                                required
                                                id="username-success"
                                                className="form-control mb-2"
                                                placeholder="Enter text"
                                                onChange={handleOnlyText}
                                            />
                                            <h2 style={{ color: "red" }}>
                                                {error && "Slug already exists"}
                                            </h2>
                                            <select id="selectMenu" onChange={DropDown} name="wordSlot" className="form-select">
                                                <option value="1">Word Slot 1</option>
                                                <option value="2">Word Slot 2</option>
                                            </select>
                                        </>
                                    )}
                                    {dropdownValue === "image" && (
                                        <div>
                                            <label className="form-label text-primary">
                                                Upload file
                                            </label>
                                            <input
                                                className="form-control mb-2"
                                                aria-describedby="user_avatar_help"
                                                id="user_avatar"
                                                required
                                                multiple
                                                type="file"
                                                onChange={handleFileInputChange}
                                            />
                                            {fileValue.map((file, index) => (
                                                <input
                                                    key={index}
                                                    className="form-control mb-2"
                                                    type="text"
                                                    required
                                                    placeholder={`Slug ${index + 1}`}
                                                    onChange={(event) => handleSlug(event, index)}
                                                />
                                            ))}
                                            <h2 style={{ color: "red" }}>
                                                {error && "Slug already exists"}
                                            </h2>
                                        </div>
                                    )}

                                    <button
                                        className="btn btn-primary mt-4"
                                        disabled={error}
                                    >
                                        Upload
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                    <div className="container max-w-screen-xl mx-auto p-4">
                        <DataTable columns={columns} data={state} pagination />
                    </div>

                    {isModalOpen && (
                        <Edit
                            setIsModalOpen={setIsModalOpen}
                            editableData={editableData}
                            setState={setState}
                        />
                    )}
                </>
            )}
        </div>
    );
};

export default Admin;

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

