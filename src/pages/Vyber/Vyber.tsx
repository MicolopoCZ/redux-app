import { Link } from "react-router-dom";

export default function Vyber() {
    return (
        <>
            <Link to={"/Main"}>Zpět</Link>
            <form>
                <input type="BigDecimal" name="Zadejte částku"></input>
            </form>
            <button>Vybrat</button>
        </>
    )
}