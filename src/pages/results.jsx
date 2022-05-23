import { useLocation } from "react-router";
import {Link} from "react-router-dom";

function Results() {
    const { state } = useLocation();
    const { results } = state;
    return (
        <>
            { results ? results.map((result, idx) => (
                <div key = {idx}>
                    <Link to = {`/${idx}`}>
                        <h3>{result.volumeInfo.title}</h3>
                    </Link>
                </div>
            )) : <h2>Loading...</h2>}
        </>
    )
}

export default Results