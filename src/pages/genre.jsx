
import styles from "../styles/genre.module.css"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const CARDS = [{
    id: 1,
    title: "Action",
    image: "https://via.placeholder.com/150",
    bg: "#72db73"
}, {
    id: 2,
    title: "Adventure",
    image: "https://via.placeholder.com/150",
    bg: "#72db73"
}, {
    id: 3,
    title: "Comedy",
    image: "https://via.placeholder.com/150",
    bg: "#72db73"
}, {
    id: 4,
    title: "Drama",
    image: "https://via.placeholder.com/150",
    bg: "#72db73"
}, {
    id: 5,
    title: "Fantasy",
    image: "https://via.placeholder.com/150",
    bg: "#72db73"
}, {
    id: 6,
    title: "Horror",
    image: "https://via.placeholder.com/150",
    bg: "#72db73"
}, {
    id: 7,
    title: "Mystery",
    image: "https://via.placeholder.com/150",
    bg: "#72db73"
}, {
    id: 8,
    title: "Romance",
    image: "https://via.placeholder.com/150",
    bg: "#72db73"
}, {
    id: 9,
    title: "Sci-Fi",
    image: "https://via.placeholder.com/150",
    bg: "#72db73"
}]
const Genre = () => {
    const navigate = useNavigate();
    const [selected, setSelected] = useState([]);
    const handleSelect = (card) => {
        if (selected.includes(card)) {
            setSelected(selected.filter((item) => item.id !== card.id));
        } else {
            setSelected([...selected, card]);
        }
    }
    const handleNext = () => {
        if (selected.length >= 3) {
            localStorage.setItem("selectedMovies", JSON.stringify(selected));
            navigate("/widgets")
        } else {
            alert("Please select at least 3 categories");
        }
    }
    return (
        <div className={styles.container}>
            <div className={styles.left}>
                <h1 className={styles.title}>Super App</h1>
                <h2 className={styles.subtitle}>Choose your<br /> entertainment<br /> category</h2>
                <div className={styles.selected}>
                    {selected.map((item) => <span className={styles.selectedItem} key={item.id}>{item.title}&nbsp;&nbsp;&nbsp;&nbsp;<span className={styles.remove} onClick={() => handleSelect(item)}>X</span></span>)}
                </div>
            </div>
            <div className={styles.right}>
                {CARDS.map((card) => (
                    <div className={styles.card} key={card.id} style={{ backgroundColor: card.bg, border: selected.includes(card) ? "2px solid #ffffff" : "none" }} onClick={() => handleSelect(card)}>
                        <img src={card.image} alt={card.title} />
                        <h3>{card.title}</h3>
                    </div>
                ))}
            </div>
            <button onClick={handleNext}>Next</button>
        </div>
    )
}

export default Genre