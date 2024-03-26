import { Link } from "react-router-dom";

export default function Main() {
    return (
        <>
            <p><Link to={"/Vyber"}>Vybrat peníze</Link></p>
            <p><Link to={"/Vklad"}>Vložit peníze</Link></p>
            <p><Link to={"/Zustatek"}>Zůstatek</Link></p>
            <p><Link to={"/"}>Odejít</Link></p>
        </>
    )
}