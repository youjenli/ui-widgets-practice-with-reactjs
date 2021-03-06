/// <reference types="react" />
import * as React from 'react';

interface DropdownState {
    isVisible:boolean;
}

export class Dropdown extends React.Component<DropdownState, DropdownState> {
    constructor(props) {
        super(props);
    }
    render() {
        const additionalClasses = this.props.isVisible ? " active":"";

        return (
            <div className={"dropdown" + additionalClasses} >
                <a href="#">Item 1</a>
                <a href="#">Item 2</a>
                <a href="#">Item 3</a>
            </div>
        )
    }
}

interface HoverableDropdownState {
    isHovered:boolean;
}

export class HoverableDropdown extends React.Component<HoverableDropdownState,HoverableDropdownState> {
    constructor(props) {
        super(props);
        this.onMouseActionTriggered = this.onMouseActionTriggered.bind(this);
        this.state = props;
    }
    onMouseActionTriggered() {
        this.setState({
            isHovered:!this.state.isHovered
        });
    }
    render() {
        return (
            <div className="widget hoverableDropdown" onMouseEnter={this.onMouseActionTriggered} onMouseLeave={this.onMouseActionTriggered}>
                <button className="hoverable">Hover Me! {this.state.isHovered}</button>
                <Dropdown isVisible={this.state.isHovered} />
            </div>
        );
    }
}

interface ClickableDropdownState {
    isClicked:boolean;
}

export class ClickableDropdown extends React.Component<ClickableDropdownState, ClickableDropdownState> {
    constructor(props) {
        super(props);
        this.onClick = this.onClick.bind(this);
        this.state = props;
    }
    onClick () {
        this.setState({
            isClicked:!this.state.isClicked
        });
    }
    render () {
        return (
            <div  className="widget clickableDropdown" onClick={this.onClick}>
                <button className="clickable">Click Me! {this.state.isClicked}</button>
                <Dropdown isVisible={this.state.isClicked} />
            </div>
        );
    }
}