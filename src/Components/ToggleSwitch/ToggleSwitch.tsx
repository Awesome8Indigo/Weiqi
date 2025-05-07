import React, { Component } from "react";

interface ToggleSwitchProps {
    options: string[];
    defaultOption: string;
    text?: string; // Optional prop
    buttonPadding_X?: number; // Optional prop
    buttonPadding_Y?: number; // Optional prop
    containerWidth?: number; // Optional prop
    containerHeight?: number; // Optional prop
    group?: string; // Optional prop
    fontsize?: number; // Optional prop
    orientation?: "vertical" | "horizontal"; // New prop
    className?: string; // Optional prop
}

interface ToggleSwitchState {
    selectedOption: string;
}

interface ToggleButtonProps {
    id: string;
    width: number;
    height: number;
    text?: string;
    group?: string;
    select?: boolean;
    isDefault?: boolean;
    padding_X?: number;
    padding_Y?: number;
    fontSize?: number;
}

class ToggleButton extends Component<ToggleButtonProps> {
    render() {
        const { id, width, height, text, group, isDefault, padding_X, padding_Y, fontSize } = this.props;

        return (
            <div>
                <input
                    type="radio"
                    name={group} // Ensure all buttons share the same group name
                    id={id}
                    value={text}
                    className="peer hidden"
                    defaultChecked={isDefault}
                />
                <label
                    htmlFor={id}
                    className={`
                        block cursor-pointer select-none rounded-xl text-center 
                        peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white
                    `}
                    style={{
                        width: `${width}px`,
                        height: `${height}px`,
                        padding: `${padding_Y ?? height / 4}px ${padding_X ?? width / 4}px`,
                        fontSize: `${fontSize ?? Math.min(width, height) / 3}px`,
                        lineHeight: `${height}px`,
                        textAlign: "center",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {text || "Button"}
                </label>
            </div>
        );
    }
}

class ToggleSwitch extends Component<ToggleSwitchProps, ToggleSwitchState> {
    buttons: React.JSX.Element[];
    constructor(props: ToggleSwitchProps) {
        super(props);

        this.state = {
            selectedOption: props.defaultOption,
        };

        const groupName = props.group || `toggle-group-${Math.random().toString(36).substring(2, 10)}`; // Unique group name

        this.buttons = props.options.map((option) => (
            <ToggleButton
                key={option}
                isDefault={option === props.defaultOption}
                id={props.options.indexOf(option).toString()}
                width={(props.containerWidth ?? 0) - (props.buttonPadding_X ?? 0)}
                height={(props.containerHeight ?? 0) - (props.buttonPadding_Y ?? 0)}
                text={option}
                group={groupName} // Assign the group name
                select={option === props.defaultOption}
                padding_X={props.buttonPadding_X}
                padding_Y={props.buttonPadding_Y}
                fontSize={props.fontsize}
            />
        ));
    }

    render() {
        const { containerWidth, containerHeight, orientation } = this.props;

        return (
            <main className={this.props.className}>
                <div
                    className={`grid gap-2 rounded-xl bg-gray-200`}
                    style={{
                        width: `${containerWidth ? containerWidth : "auto"}`,
                        height: `${containerHeight ? containerHeight : "auto"}`,
                        maxWidth: "100vw",
                        maxHeight: "100vh",
                        gridAutoFlow: orientation === "horizontal" ? "column" : "row", // Adjust orientation
                        alignItems: "center", // Ensure alignment in horizontal layout
                        justifyContent: "center", // Center items horizontally
                    }}
                >
                    {this.buttons}
                </div>
            </main>
        );
    }
}

export default ToggleSwitch;
