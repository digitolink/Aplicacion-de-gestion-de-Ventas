import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

export function TdComponent({ datarow }) {

    const [items, setItems] = useState([])

    useEffect(
        () => {
            const tempItems = [];
            tempItems.push(
                <td key={"1"}><Link to={"/fichaproducto/" + datarow.idproducto}>{datarow.idproducto}</Link></td>
            );
            tempItems.push(
                <td key={"2"}>{datarow.nombre}</td>
            )
            tempItems.push(
                <td key={"3"}>{datarow.precio}</td>
            )
            tempItems.push(
                <td key={"4"}>{datarow.categorias}</td>
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