import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { HelloWorld } from "./components/HelloWorld";
import { CompactTextProps } from "../typings/CompactTextProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function CompactText({ style, Text ,Size,BackgroundColor,FontColor,mC}: CompactTextProps<CustomStyle>): ReactElement {
    return <HelloWorld style={style} content={Text.value ?? ""} size={Size} BackgroundColor={BackgroundColor} FontColor={FontColor} mC={mC}/>;
}
