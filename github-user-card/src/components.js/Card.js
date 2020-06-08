import React from "React";


function Card(props){
    return(
        <Box>
            <Img src = {props.userImg}/>
            <h1>{props.name}</h1>
            <h2>{props.username}</h2>
            <a href = "https://github.com/Tera1971">{props.profile}</a>
            <h4>Followers {props.followers}</h4>
            <h4>Folowing {props.following}</h4>
            <p>{props.bio}</p>
        </Box>
)}

export default Card;