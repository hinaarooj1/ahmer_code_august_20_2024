import React from 'react';

const Loader = () => {
    return (
        <div className="loading-container on">
            <div className="screen">
                <h3 className="title loader-title">CONNECTION ESTABLISHED</h3>
                <div className="box--outer">
                    <div className="box-loader">
                        <div className="box--inner">
                            <div className="content">
                                <div className="holder">

                                    <span className="inner-text-loader">
                                        <b>R1000 Mainframe Activated</b> -- Scanning for Authorized Access <br /> Protocol Initiated
                                    </span>
                                    <br />
                                    <br />
                                    <div className="">
                                        <div className="col col__left label">Login</div>
                                        <div className="col col__center">
                                            <input id="login" type="text" value={loginValue} maxLength={32} readOnly />
                                        </div>
                                    </div>
                                    <form>
                                        <div className="">
                                            <div className="col col__left label">Password</div>
                                            <div className="col col__center">
                                                <input
                                                    type="password"
                                                    value={passwordValue}
                                                    name="password"
                                                    id="password"
                                                    required
                                                    maxLength={32}
                                                    autoComplete="new-password"
                                                    readOnly
                                                />
                                            </div>
                                        </div>
                                        <div className="">

                                            <button onClick={handleEnter} disabled={!showSubmitButton} className={`${showSubmitButton ? "glowing-enter" : ""}`} type="button" id="submit" name="submit">
                                                Enter
                                            </button>
                                        </div>
                                        <div className="main-container">
                                            <div id="main-loader">
                                                <div id="heading" classname="flex-container">
                                                    <p classname="loader-text">LOADING</p>
                                                    <div classname="rotating-symbol">∴</div>

                                                    <p className="percentage-value">%</p>
                                                </div>
                                                <div id="border-loading-bar">
                                                    <div className="filled-bar" style={{ width: `${progressLoader}%` }} ></div>
                                                </div>
                                                <div id="alert-warning">
                                                    <p>
                                                    </p><div classname="alert-symbol">!</div>
                                                    &nbsp; CAUTION, Do not turn off.
                                                    <p>
                                                    </p><div id="cascade-lines">
                                                    </div>
                                                </div>
                                            </div></div>


                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Loader;
