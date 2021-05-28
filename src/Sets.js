import {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';

const Sets = () => {
    const [sets, setSets] = useState([]);
    const [setsShown, setSetsShown] = useState([]);
    useEffect(() => {
        fetch("https://db.ygoprodeck.com/api/v7/cardsets.php")
        .then(data => data.json())
        .then(json => {
            setSets(json);
            setSetsShown(json);
        })
    }, [])
    // const [sortDate, setSortDate] = useState("asc");
    // useEffect(() => {
    //     const sortByDate = () => {
    //         if (sortDate == "asc") {
    //             setSetsShown([...setsShown].sort((a,b) => {
    //                 if (a["tcg_date"] < b["tcg_date"]) {
    //                     return -1;
    //                 } else if (a["tcg_date"] > b["tcg_date"]) {
    //                     return 1;
    //                 }
    //                 return 0;
    //             }))
    //         } else {
    //             setSetsShown([...setsShown].sort((a,b) => {
    //                 if (a["tcg_date"] < b["tcg_date"]) {
    //                     return 1;
    //                 } else if (a["tcg_date"] > b["tcg_date"]) {
    //                     return -1;
    //                 }
    //                 return 0;
    //             }))
    //         }
    // }}, [sortDate]);
    return (
        <>
        <form id="setFilters" style={{color: "white"}}>
            <label htmlFor="number">
                Number Of Cards
                <select
                    id="number"
                    onChange={e => {
                        console.log(e);
                        setSetsShown(sets.filter(set => 
                            set["num_of_cards"] >= e.target.value.split(",")[0] && set["num_of_cards"] <= e.target.value.split(",")[1]))}
                        }
                    >
                    <option value={[1, 10]}>
                        1 - 10
                    </option>
                    <option  value={[10, 50]}>
                        10 - 50
                    </option>
                    <option  value={[50, 100]}>
                        50 - 100
                    </option>
                    <option value={[100, 200]}>
                        100 - 200
                    </option>
                    <option value={[200, 500]}>
                        More than 200    
                    </option>                    
                </select>
            </label>
            {/* <label htmlFor="date">
                Release Date
                {<button onClick={setSortDate(sortDate == "asc" ? "asc" : "desc")}>
                    {sortDate === "asc" ? "Ascending" : "Descending"}
                </button>}
            </label> */}
        </form>
        <h2 className="description">{setsShown.length} Sets</h2>
        <div id="sets">
            {sets.length && setsShown.map(({set_name, set_code, num_of_cards, tcg_date}) => (
                <Link to={`../setDetails/${set_name}`}>
                <div key={set_name} className="set">
                    <h1>{set_name}</h1>
                    <h2>{set_code}</h2>
                    <h3>{num_of_cards}</h3>
                    <h4>{`TCG Release Date - ${tcg_date}`}</h4>
                </div>
                </Link>
            ))}
        </div>
        </>
    )
}

export default Sets;