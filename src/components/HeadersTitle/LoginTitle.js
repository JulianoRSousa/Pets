import React from "react";
import { Text } from 'react-native';
import { rem } from "../../components/components";
import * as AppColors from "../../assets/AppColors";

export function LoginTitle(props) {
    return (
        <Text
            style={{
                flex: 1,
                fontFamily: "Delius",
                fontSize: 80 * rem,
                textAlign: "center",
                textAlignVertical: 'center',
                maxHeight: 260 * rem,
                color: AppColors.White,
            }}
        >
            {props.title ? props.title : 'pets'}
        </Text>


    )
}
