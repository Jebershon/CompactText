import React, { createElement, useState } from 'react';
import { View, Text, TouchableOpacity,ScrollView,StyleSheet} from 'react-native';

interface TextShrinkerProps {
    text: string;
    limit: number;
    color: string;
    more:string;
}

const TextShrinker: React.FC<TextShrinkerProps> = ({ text, limit,more,color}) => {
    const [expanded, setExpanded] = useState(false);
    const truncatedText = text.length > limit ? text.slice(0, limit) + "..." : text;
    return (
        <ScrollView contentContainerStyle={styles.scrollView}>
        <View>
            <Text style={{ fontSize: 16,color:color}}>{expanded ? text : truncatedText}</Text>
            {text.length > limit && (
            <TouchableOpacity onPress={() => setExpanded(!expanded)}>
                <Text style={{ fontWeight: "bold", color: more }}>{expanded ? "Less" : "More"}</Text>
            </TouchableOpacity>
            )}
        </View>
        </ScrollView>
    );
};
const styles = StyleSheet.create({
    scrollView: {
        flexGrow: 1,
    },
    container: {
        padding: 16,
    },
});
export default TextShrinker;