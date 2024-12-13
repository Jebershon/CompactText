import { ReactElement, createElement } from "react";
import { TextStyle, ViewStyle } from "react-native";

import { Style } from "@mendix/pluggable-widgets-tools";

import { HelloWorld } from "./components/HelloWorld";
import { CompactTextProps } from "../typings/CompactTextProps";

export interface CustomStyle extends Style {
    container: ViewStyle;
    label: TextStyle;
}

export function CompactText({ style, yourName }: CompactTextProps<CustomStyle>): ReactElement {
    return <HelloWorld name={yourName} style={style} />;
}
