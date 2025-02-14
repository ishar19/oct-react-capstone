import styles from '../styles/widgets.module.css';
import User from '../../public/user.png'
import { useRef, useState, useEffect } from "react";
import { getNews } from '../services';
export default function Widgets() {
    const [notes, setNotes] = useState("");
    const [news, setNews] = useState(null);
    const user = JSON.parse(localStorage.getItem("user"));
    const movies = JSON.parse(localStorage.getItem("selectedMovies"));
    const divRef = useRef(null);
    const handleNotes = (e) => {
        setNotes(e.target.value);
    }
    useEffect(() => {
        getNews().then((res) => {
            setNews(res.articles[0])
        })
    }, [])
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
        <div style={{ backgroundColor: 'white', color: "black", borderRadius: "24px", overflow: "hidden" }}>
            {news === null ? <h1>Loading...</h1> : <>
                <div style={{
                    height: "50vh", width: "50vw", position: "relative",
                }}>
                    <img src={news.urlToImage} style={{
                        objectFit: "cover", height: "100%", width: "100%"
                    }} />
                    <div style={{
                        width: "40vw",

                        height: "20vh",
                        position: "absolute",
                        bottom: "0",
                        color: "white",
                        backgroundColor: "rgba(0,0,0,0.5)",
                        backdropFilter: "blur(10px)",
                        padding: "2rem",
                        // opacity: "30%"
                    }}><p style={{
                        whiteSpace: "wrap",
                        lineClamp: "1"
                    }}>{news.description}</p></div>
                </div>
                <div style={{
                    height: "50vh",
                    padding: "2rem",
                    overflowY: "scroll",

                }}>
                    <p >
                        {news.content}
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos similique accusamus corporis iste aspernatur cupiditate, sequi necessitatibus? Officiis numquam minima necessitatibus iusto suscipit, facere, nesciunt libero itaque, quo exercitationem dolorum.
                        Ullam vitae ipsa fugiat commodi eligendi exercitationem dolore, qui eveniet beatae iste minus quae deleniti modi repellendus velit alias at distinctio nihil ea! Quis, vero beatae rerum quam itaque praesentium!
                        Dolor sunt necessitatibus laborum nisi unde sit impedit, error quidem consequuntur ipsum commodi, inventore iure quis id, tenetur libero! Facilis corporis facere veritatis impedit libero iste blanditiis dignissimos omnis tenetur?
                        Nihil, maxime ipsa optio magnam repudiandae eos tempore natus nulla fuga, sunt, adipisci neque quod. Temporibus dignissimos, praesentium autem, error quam officiis recusandae accusantium beatae delectus esse qui iste ad?
                        Cumque magnam debitis numquam dolore commodi sunt in assumenda? Ab laudantium quam beatae, illum, molestiae veniam explicabo consequuntur aperiam dolor architecto voluptatum quaerat. Mollitia dolorum eum, sapiente cum expedita dolor!
                        Quis dolores repellat sunt ipsa alias quidem labore est fugiat maiores possimus repellendus error, neque dolorum natus perspiciatis assumenda sequi, voluptatibus dolorem incidunt quos! Repellendus mollitia doloremque voluptatem reiciendis quis!
                        Beatae dolorum, eius pariatur sunt distinctio nisi alias accusantium veritatis vero doloribus voluptate? Commodi quia voluptate consequuntur fugit sunt iste adipisci quaerat quas excepturi veniam qui, necessitatibus cumque numquam maiores?
                        Veritatis commodi officiis similique obcaecati odio adipisci modi, dolorum possimus, ullam animi vel voluptatem accusantium! Consectetur laudantium aut, debitis, ab excepturi molestiae animi laborum unde enim, blanditiis quis quam accusantium.
                        Aliquid laudantium molestias similique voluptate tempora. Vel, quasi pariatur blanditiis asperiores incidunt similique quisquam eum suscipit voluptatem quam inventore consectetur amet sit, sint consequatur ad provident necessitatibus repudiandae non assumenda.
                        Dignissimos omnis velit aut doloremque et perferendis placeat sint quas repudiandae facilis voluptatum, deserunt voluptate inventore error ea itaque corporis cum asperiores temporibus sapiente harum nam id magni modi? Architecto!
                    </p>
                </div></>}

        </div>
    </div>;
}








