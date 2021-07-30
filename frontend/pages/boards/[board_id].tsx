import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import axios from "axios";

const BoardShow = () => {

    const router = useRouter()

    const [data, setData] = useState({
        name: "",
        image_path: "",
        is_personal: false
    });

    const { board_id } = router.query

    useEffect(() => {
        async function fetchData(){

            if(board_id == undefined) return
            const response = await axios.get(`http://127.0.0.1:8000/api/board/${board_id}`)
            setData(response.data)
            return response
        }

        fetchData().then(r => {console.log(r)})
    }, [board_id])

    return(
        <>
            <img src={data.image_path} alt="画像の取得に失敗しました"/>
            <h1>{data.name}</h1>
            {data.is_personal}
        </>
    )
}

export default BoardShow
