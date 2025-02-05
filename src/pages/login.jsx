import React from "react";
import poster from "../../public/login.png";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        username: "",
        mobile: "",
        terms: false,
    });
    const [error, setError] = useState({
        name: false,
        email: false,
        username: false,
        mobile: false,
        terms: false,
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        setError({
            name: false,
            email: false,
            username: false,
            mobile: false,
            terms: false,
        });
        if (formData.name.trim().length === 0) {
            setError((error) => {
                return { ...error, name: true };
            });
            return;
        }
        if (formData.email.trim().length === 0) {
            setError((error) => {
                return { ...error, email: true };
            });
            return;
        }
        if (formData.username.trim().length === 0) {
            setError((error) => {
                return { ...error, username: true };
            });
            return;
        }
        if (formData.mobile.trim().length === 0) {
            setError((error) => {
                return { ...error, mobile: true };
            });
            return;
        }
        if (!formData.terms) {
            setError((error) => {
                return { ...error, terms: true };
            });
            return;
        }
        localStorage.setItem("user", JSON.stringify(formData));
        toast.success("User created successfully");
        navigate("/genre");
    };
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                minHeight: "100vh",
                maxHeight: "100vh",
                overflow: "hidden",
            }}
        >
            <div
                style={{
                    width: "50vw",
                    position: "relative",
                }}
                className="login-poster"
            >
                <img src={poster} style={{}} alt="poster" />
                <h1
                    style={{
                        position: "absolute",
                        bottom: "5vh",
                        left: "3vw",
                        background: "transparent",
                        fontSize: "3.5rem",
                    }}
                >
                    Discover new things on
                    <br /> Superapp
                </h1>
            </div>
            <div
                className="login-form"

            >
                <h1
                    style={{
                        fontFamily: "Single Day",
                        fontSize: "2.5rem",
                        color: "#72DB73",
                        fontWeight: "bolder",
                    }}
                >
                    Super App
                </h1>
                <h2>Create your new account</h2>
                <form>
                    <input
                        style={{
                            border: error.name ? "1px solid red" : "1px solid #72DB73",
                        }}
                        type="text"
                        placeholder="Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    />
                    {error.name && <p style={{ color: "red" }}>Name is required</p>}
                    <input
                        style={{
                            border: error.email ? "1px solid red" : "1px solid #72DB73",
                        }}
                        type="text"
                        placeholder="Email"
                        value={formData.email}
                        onChange={(e) =>
                            setFormData({ ...formData, email: e.target.value })
                        }
                    />
                    {error.email && <p style={{ color: "red" }}>Email is required</p>}
                    <input
                        style={{
                            border: error.username ? "1px solid red" : "1px solid #72DB73",
                        }}
                        type="text"
                        placeholder="Username"
                        value={formData.username}
                        onChange={(e) =>
                            setFormData({ ...formData, username: e.target.value })
                        }
                    />
                    {error.username && (
                        <p style={{ color: "red" }}>Username is required</p>
                    )}
                    <input
                        style={{
                            border: error.mobile ? "1px solid red" : "1px solid #72DB73",
                        }}
                        type="text"
                        placeholder="Mobile"
                        value={formData.mobile}
                        onChange={(e) =>
                            setFormData({ ...formData, mobile: e.target.value })
                        }
                    />
                    {error.mobile && <p style={{ color: "red" }}>Mobile is required</p>}
                    <div
                        style={{
                            display: "flex",
                            alignItems: "center",
                            gap: "1vw",
                            marginTop: "1vh",
                        }}
                    >
                        <input
                            type="checkbox"
                            name="terms"
                            id="terms"
                            checked={formData.terms}
                            onChange={(e) =>
                                setFormData({ ...formData, terms: e.target.checked })
                            }
                        />
                        <label htmlFor="terms">
                            I agree to the{" "}
                            <span style={{ color: "#72DB73" }}>Terms of Service</span> and{" "}
                            <span style={{ color: "#72DB73" }}>Privacy Policy</span>
                        </label>
                    </div>
                    {error.terms && (
                        <p style={{ color: "red" }}>
                            Please accept the terms and conditions
                        </p>
                    )}
                    <button
                        onClick={handleSubmit}
                        style={{
                            backgroundColor: "#72DB73",
                            color: "white",
                            padding: "1rem",
                            fontSize: "1.2rem",
                            fontWeight: "bolder",
                            borderRadius: "30px",
                            border: "none",
                            marginTop: "2vh",
                            width: "50%",
                        }}
                    >
                        SIGN UP
                    </button>
                    <p
                        style={{
                            fontSize: "1rem",
                            color: "gray",
                            marginTop: "1vh",

                            width: "50%",
                        }}
                    >
                        By clicking on Sign up. you agree to Superapp
                        <span style={{ color: "#72DB73" }}>
                            {" "}
                            Terms and Conditions of Use
                        </span>
                    </p>
                    <p
                        style={{
                            fontSize: "1rem",
                            color: "gray",
                            marginTop: "1vh",

                            width: "50%",
                        }}
                    >
                        To learn more about how Superapp collects, uses, shares and protects
                        your personal data please head Superapp{" "}
                        <span style={{ color: "#72DB73" }}>Privacy Policy</span>
                    </p>
                </form>
            </div>
        </div>
    );
};

export default Login;
