import { ReactElement, createElement } from "react";
import { View } from "react-native";

import { mergeNativeStyles } from "@mendix/pluggable-widgets-tools";

import { CustomStyle } from "../CompactText";

import FunctionText from "./FunctionText";
export interface HelloWorldProps {
    size: number;
    content: string;
    style: CustomStyle[];
    BackgroundColor: string;
    FontColor: string;
    mC: string;
}
export function HelloWorld({ style , content , size,BackgroundColor,FontColor,mC}: HelloWorldProps): ReactElement {
    const defaultStyle: CustomStyle = {
        container: {
            backgroundColor: BackgroundColor,
            borderRadius: 10,
            padding: 10,
            margin: 10,
        },
        label: {
            color: FontColor,
        }
    };
    const styles = mergeNativeStyles(defaultStyle, style);
    return (
        <View style={styles.container}>
            <FunctionText text={content} limit={size} more={mC} color={FontColor}/>
        </View>
    );
}
