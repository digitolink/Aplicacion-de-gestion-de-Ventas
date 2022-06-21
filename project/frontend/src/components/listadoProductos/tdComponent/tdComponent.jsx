import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function TdComponent({ datarow }) {

    const [items, setItems] = useState([])

    useEffect(
        () => {
            const tempItems = [];
            tempItems.push(
                <td><Link to={"/fichaproducto/" + datarow.idproducto}>{datarow.idproducto}</Link></td>
            );
            tempItems.push(
                <td>{datarow.nombre}</td>
            )
            tempItems.push(
                <td>{datarow.precio}</td>
            )
            tempItems.push(
                <td>{datarow.categorias}</td>
            )

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