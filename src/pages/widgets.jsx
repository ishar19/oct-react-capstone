import styles from '../styles/widgets.module.css';
import User from '../../public/user.png'
import { useRef, useState } from "react";
export default function Widgets() {
    const [notes, setNotes] = useState("");
    const user = JSON.parse(localStorage.getItem("user"));
    const movies = JSON.parse(localStorage.getItem("selectedMovies"));
    const divRef = useRef(null);
    const handleNotes = (e) => {
        setNotes(e.target.value);
    }
    return <div className={styles.widgets} style={{
        maxHeight: "100vh", overflowY: "hidden", padding: "2rem"
    }} >
        <div style={{ display: "grid", gap: "2rem", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr", }}>
            <div style={{ gap: "2rem", gridRow: "1", display: "grid", gridTemplateRows: "60% 40%", gridTemplateColumns: "1fr" }}>
                <div style={{ backgroundColor: '#5746EA', display: "flex", gap: "1rem", borderRadius: "24px", padding: "2rem" }}>
                    <img src={User} alt="user" width={120} height={240} style={{ borderRadius: "24px" }} />
                    <div>
                        <h1 style={{ color: "#FFFFFF", fontWeight: "bold", fontSize: "36px" }}>{user?.name}</h1>
                        <p style={{ color: "#FFFFFF", fontSize: "16px" }}>{user?.email}</p>
                        <p style={{ color: "#FFFFFF", fontSize: "16px" }}>{user?.username}</p>
                        <div style={{
                            display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "1rem"
                        }}>
                            {movies?.map((movie) => (
                                <div key={movie.id} style={{ backgroundColor: "#9F94FF", color: "#FFFFFF", fontSize: "16px", padding: "0.5rem", width: "6rem", borderRadius: "10px", marginTop: "1px" }}>{movie.title}</div>
                            ))}
                        </div>
                    </div>
                </div>
                <div style={{ backgroundColor: 'orange' }}></div>
            </div>
            <div ref={divRef} className={styles.focus} onClick={() => {
                console.log("clicked")
                divRef.current.focus()
            }}
                contentEditable={true}
                onInput={handleNotes}
            >
                {notes}
            </div>
            <div style={{ backgroundColor: 'pink', gridColumn: "1 / -1" }}></div>
        </div>
        <div style={{ backgroundColor: 'blue' }}>left side</div>
    </div>;
}