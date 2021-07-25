import axios from "axios";
import {useEffect, useState} from "react";

export default function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get("http://127.0.0.1:8000/api/board/get_all")
            setData(response.data)
            return response
        }

        fetchData().then(r => {console.log(r.data)})
    }, [])

    return (
        <>
            <div>
                {data.map(x => {
                    return <div key={x.id}>{x.name}</div>
                })}
            </div>
        </>
    )
}
