export function TdComponent({datarow}) {
    return(
        <>
            <tr>
                {datarow.map((item) => {
                    return <td key ={item}>{item} </td>
                }
                
                )}

            </tr>
        
        </>

    )

}