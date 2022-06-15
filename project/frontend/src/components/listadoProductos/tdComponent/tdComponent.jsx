import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function TdComponent({ datarow }) {

    const [items, setItems] = useState([])

    useEffect(
        () => {
            const tempItems = [];

            for (let i in datarow) {
                console.log(i);
                if (i === "idproducto") {
                    tempItems.push(
                        <td><Link to={"/fichaproducto/" + datarow.idproducto}>{datarow.idproducto}</Link></td>
                    );
                }
                else { 
                tempItems.push(
                    <td>{datarow[i]}</td>
                )
            }
        }
            setItems(tempItems)
        },
[]
    )


return (
    <>
        <tr>
            {items}
        </tr>

    </>

)

}