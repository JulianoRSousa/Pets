import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { connect } from "react-redux";

function IntroSlider(props) {
    return (
        <View>
            <Text>IntroSlider</Text>
            <TouchableOpacity onPress={() => props.setFirstAccess(false)} style={{
                borderColor: '#c2c2c2', borderWidth: 1,
                padding: 10, width: 150,
                height: 50, borderRadius: 15, alignItems: "center", justifyContent: 'center',
                backgroundColor: '#25d'
            }}>
                <Text>Set FirstAccess</Text>
            </TouchableOpacity>
        </View>
    )
}

const mapDispatchToState = (dispatch) => {
    return {
        setFirstAccess: (firstAccess) => dispatch({ type: 'SET_FIRST_ACCESS', payload: { firstAccess } })
    }
}

export default connect(null, mapDispatchToState)(IntroSlider)
