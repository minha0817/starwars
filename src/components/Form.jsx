import axios from "axios";
import React, {useState} from "react";

export default function Form (props) {


    const [id, setId] = useState("")

    const handleClick = function(event) {

        //button default behavior is submitting the form which refreshes the page. 
        event.preventDefault()
        axios(`https://swapi.dev/api/people/${id}`)
        .then(res => props.setState([res.data])) //여기서 res.data의 형태는 {}이므로 app.jsx의 map은 array에서만 적용되므로 사용할수가 없다. 이 아이도 []로 변경해야함. 

    }

    return (

        <form >
            <input

                placeholder="Enter ID"
                value={id}
                onChange={(event) => {
                    console.log(event.target.value)
                    setId(event.target.value)
                }}
            >
            </input>

            <button onClick={(event) => handleClick(event)}>search</button>
        </form>

    )
}
