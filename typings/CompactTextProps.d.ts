/**
 * This file was generated from CompactText.xml
 * WARNING: All changes made to this file will be overwritten
 * @author Mendix Widgets Framework Team
 */
import { CSSProperties } from "react";
import { DynamicValue } from "mendix";

export interface CompactTextProps<Style> {
    name: string;
    style: Style[];
    Size: number;
    Text: DynamicValue<string>;
    BackgroundColor: string;
    mC: string;
    FontColor: string;
}

export interface CompactTextPreviewProps {
    /**
     * @deprecated Deprecated since version 9.18.0. Please use class property instead.
     */
    className: string;
    class: string;
    style: string;
    styleObject?: CSSProperties;
    readOnly: boolean;
    renderMode?: "design" | "xray" | "structure";
    Size: number | null;
    Text: string;
    BackgroundColor: string;
    mC: string;
    FontColor: string;
}
