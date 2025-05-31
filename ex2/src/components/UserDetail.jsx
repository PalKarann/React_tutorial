import React from "react";

function UserDetail({name, age}){
    return(
        <div>
            <h3>Name: {name}</h3>
            <h3>Age: {age}</h3>
        </div>
    );
}

export default UserDetail;