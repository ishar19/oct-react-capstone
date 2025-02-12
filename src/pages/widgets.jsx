import styles from '../styles/widgets.module.css';
export default function Widgets() {
    return <div className={styles.widgets} >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gridTemplateRows: "1fr 1fr" }}>
            <div style={{ backgroundColor: 'green', gridRow: "span 2", display: "grid", gridTemplateRows: "repeat(5, 1fr)" }}>
                <div style={{ backgroundColor: 'purple', gridRow: "2fr" }}></div>
                <div style={{ backgroundColor: 'orange', gridRow: "1fr" }}></div>
                <div style={{ backgroundColor: 'pink', gridRow: "2fr", }}></div>
            </div>
            <div style={{ backgroundColor: 'yellow', gridRow: "span 2", height: "60vh" }}>right side</div>
        </div>
        <div style={{ backgroundColor: 'blue' }}>left side</div>
    </div>;
}