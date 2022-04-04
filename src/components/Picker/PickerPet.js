import { BlurView } from "@react-native-community/blur";
import React, { useState, useEffect } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    Modal,
    ScrollView,
} from "react-native";
import {
    pickerColor,
    GrayDark,
    GrayLight,
} from "../../assets/AppColors";
import { rem } from "../components";
import api from "../../services/api";
import PetItem from "../Pets/PetItem";
import { connect } from "react-redux";


const PickerPet = (props) => {
    const [text, setText] = useState("escolha um de seus pets");
    const [isMounted, setIsMounted] = useState(false);
    const [visible, setVisible] = useState(false);
    const [petList, setPetList] = useState([]);
    const [selectedPet, setSelectedPet] = useState(null);

    useEffect(() => {
        setIsMounted(true);
        console.log(props.sessionToken)
        loadPets();
        return () => setIsMounted(false);
    }, []);

    async function loadPets() {
        props.setLoading(true);
        try {
            const response = await api.get("/getpetbytoken", {
                headers: {
                    token: props.sessionToken,
                },
            });
            if (response.status == 200) {
                const petsInfo = response.data;
                props.setPetList(petsInfo);
                setPetList(petsInfo)
            }
            props.setLoading(false);
        } catch (error) {
            console.error(error);
            props.setLoading(false);
        }
    }

    const PetContainer = petList.map((item) => (
        <TouchableOpacity
            key={item._id}
            onPress={() => {
                props.petId(item._id),
                    props.petFullname(item.fullname),
                    props.petPicture(item.picture),
                    props.petPictureUrl(item.pictureUrl),
                    props.petType(item.type),
                    setVisible(false);
            }}
        >
            <PetItem
                opacity={false}
                petName={item.fullname}
                petImage={{ uri: item.pictureUrl }}
                petDescription={"item.description"}
                petAge={item.birthdate}
                petType={item.type ? item.type : ""}
                petSex={item.isMale ? "Macho" : "Fêmea"}
            />
        </TouchableOpacity>
    ));

    return (
        <TouchableOpacity
            onPress={() => setVisible(true)}
            style={
                props.style
                    ? props.style
                    : {
                        borderColor: GrayDark,
                        borderWidth: 1,
                        borderRadius: 20 * rem,
                        flexDirection: "row",
                        justifyContent: "center",
                        alignItems: "center",
                        alignSelf: "center",
                        padding: 8 * rem,
                    }
            }
        >
            <Text
                style={{
                    color: GrayDark,
                    fontFamily: "Delius",
                    fontSize: 17 * rem,
                }}
            >
                {text}
            </Text>
            {visible ? (
                <Modal transparent={false} visible={visible}>
                    <BlurView
                        reducedTransparencyFallbackColor="gray"
                        blurType="light"
                        blurAmount={10}
                        style={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                        }}
                    />
                    <TouchableOpacity
                        onPress={() => setVisible(false)}
                        style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
                    >
                        {petList.length > 0 ? (
                            <ScrollView style={{ opacity: 0.9 }}>
                                <View style={{ alignSelf: "center" }}>
                                    <Text
                                        style={{
                                            fontFamily: "Delius",
                                            fontSize: 18 * rem,
                                            margin: 15 * rem,
                                            alignSelf: "center",
                                        }}
                                    >
                                        Escolha um de seus pets
                                    </Text>
                                    {PetContainer}
                                    <TouchableOpacity
                                        onPress={() => setVisible(false)}
                                        style={{
                                            borderWidth: 1,
                                            borderColor: GrayLight,
                                            borderRadius: 20 * rem,
                                            paddingHorizontal: 10 * rem,
                                            paddingVertical: 5 * rem,
                                            alignSelf: "center",
                                            margin: 15 * rem,
                                        }}
                                    >
                                        <Text style={{ fontFamily: "Delius", color: GrayDark }}>
                                            Cancelar
                                        </Text>
                                    </TouchableOpacity>
                                </View>
                            </ScrollView>
                        ) : (
                            <View>
                                <Text
                                    style={{
                                        color: pickerColor,
                                        fontFamily: "Delius",
                                        fontSize: 20 * rem,
                                    }}
                                >
                                    Nenhum pet adicionado
                                </Text>
                            </View>
                        )}
                    </TouchableOpacity>
                </Modal>
            ) : (
                <></>
            )}
        </TouchableOpacity>
    );
};

const mapStateToProps = (state) => {
    return {
        sessionToken: state.userReducer.sessionToken,
        petList: state.userReducer.user.petList
    }
}

const mapDispatchToState = (dispatch) => {
    return {
        setPetList: (petList) => dispatch({ type: 'SET_PET_LIST', payload: { petList } }),
        setLoading: (loading) => dispatch({ type: 'SET_LOADING', payload: { loading } })
    }
}

export default connect(mapStateToProps, mapDispatchToState)(PickerPet)