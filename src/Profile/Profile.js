import React from "react";
import MyPhoto from '../Myphoto';
import MyIdendity from '../MyIdendity';
import MyProfil from '../MyProfil';
export default function Profile(props) {
    console.log(props)
    return (
        <div>
            <MyPhoto src={props.person.photo} />
            <MyIdendity firstName={props.person.name.firstName} lastName={props.person.name.lastName} ></MyIdendity>
            <MyProfil isShown={props.person.profileLink} onClick={() => {
                window.location = props.person.profileLink
            }}>
                My Facebook
            </MyProfil>
           
        </div>
    )
}
