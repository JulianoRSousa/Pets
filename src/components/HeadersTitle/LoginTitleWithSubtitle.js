import React from "react";
import { Text, View } from 'react-native';
import { rem } from "../../components/components";
import * as AppColors from "../../assets/AppColors";

export function LoginTitleWithSubtitle(props) {
    const fontSize = props.fontSize ? props.fontSize : 50
    return (
        <View>
            <Text
                style={{
                    fontFamily: "Delius",
                    fontSize: fontSize * rem,
                    textAlign: "center",
                    textAlignVertical: 'center',
                    maxHeight: 260 * rem,
                    color: AppColors.White,
                }}
            >
                {props.title ? props.title : 'Pets'}
            </Text>
            <Text
                style={{
                    fontFamily: "Delius",
                    fontSize: (fontSize * rem) / 3,
                    textAlign: "center",
                    textAlignVertical: 'center',
                    maxHeight: 260 * rem,
                    color: AppColors.White,
                }}>
                {props.subtitle ? props.subtitle : 'Criar Conta'}
            </Text>
        </View>

    )
}
