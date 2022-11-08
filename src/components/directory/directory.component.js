import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectDirectorySections } from "../../redux/directory/directory.selector";
import { DirectoryContainer } from "./directory.styled";
import MenuItem from "../menu-item/menu-item.component";


const Directory = ({sections}) => {
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


const mapStateToProps = createStructuredSelector({
    sections: selectDirectorySections
})

export default connect(mapStateToProps)(Directory);