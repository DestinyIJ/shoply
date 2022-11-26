import React from "react";
import { useSelector } from "react-redux";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { DirectoryContainer } from "./directory.styled";
import MenuItem from "../menu-item/menu-item.component";


const Directory = () => {
    const sections = useSelector(selectDirectorySections)
    return (
        <DirectoryContainer>
            {
                sections.map(({id, ...otherProps}) => (
                    <MenuItem key={id} {...otherProps} />
                ))
            }
        </DirectoryContainer>
    )
}



export default Directory;