import axios from "axios";
import {useEffect, useState} from "react";
import BoardCard from "../components/board/BoardCard";
import {Grid, Link} from "@material-ui/core";

export default function Home() {

    const [data, setData] = useState([]);

    useEffect(() => {
        async function fetchData(){
            const response = await axios.get("http://127.0.0.1:8000/api/board/")
            setData(response.data)
            return response
        }

        fetchData().then(r => {console.log(r.data)})
    }, [])

    return (
        <>
            <div>
                <Grid container>
                    {data.map(x => {
                        return(
                            <Grid key={x.id} item xs={4}>
                                <Link href={`/boards/${x.id}`}>
                                    <BoardCard
                                        name={x.name}
                                        imagePath={x.image_path}
                                        isPersonal={x.is_personal}
                                    />
                                </Link>
                            </Grid>
                        )
                    })}
                </Grid>
            </div>
        </>
    )
}
