import React from "react";
import {Dropdown, DropdownToggle, DropdownMenu, DropdownItem} from "../../src";

class DropdownExample extends React.Component {
    state = {
        dropdownOpen: false,
    };

    toggle = () => {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen,
        });
    };

    render() {
        const {tag} = this.props;
        return (
            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                <DropdownToggle
                    className={`${tag === "span" ? "btn" : ""} btn-dropdown`}
                    color=""
                    tag={tag ? tag : "button"}
                    caret
                >
                    Apri dropdown
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Azione 1</DropdownItem>
                    <DropdownItem>Azione 2</DropdownItem>
                    <DropdownItem>Azione 3</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        );
    }
}

export default DropdownExample;