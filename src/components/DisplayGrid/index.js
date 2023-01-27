import './index.css'
import { useState, useEffect } from "react"


const DisplayGrid = () => {

    const [apiList, setApiList] = useState([])
    //console.log(apiList)

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        const url = "https://gorest.co.in/public/v1/todos"
        const options = {
            method: "GET"
        }
        const response = await fetch(url, options)
        const apiData = await response.json()
        //console.log(apiData.data)
        setApiList(apiData.data)
    }




    return (
        <div className='display-grid-container'>
            <ul className='ul'>
                {apiList.map((each) =>

                (
                    < li className='li' key={each.id} >
                        <p>Id: {each.id}</p>
                        <p>User Id: {each.user_id}</p>
                        <p>Title: {each.title}</p>
                        <p>Due On: {each.due_on}</p>
                        <p>Status: {each.status}</p>
                    </li>
                )
                )}
            </ul>
        </div >
    )
}

export default DisplayGrid