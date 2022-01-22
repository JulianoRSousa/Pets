import React, { useState, useEffect, useRef } from "react";
import {
  View,
} from "react-native";
import api from "../../services/api";
import { useAuth } from "../../hooks/Auth";
import { OrangeBase } from "../../assets/AppColors";
import PetItem from "./PetItem";

function MyPets() {
  const [isMounted, setIsMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [petList, setPetList] = useState([]);
  const { token } = useAuth();

  useEffect(() => {
    setIsMounted(true);
    loadPets();
    return () => setIsMounted(false);
  }, []);

  async function loadPets() {
    setLoading(true);
    try {
      const response = await api.get("/getpetbytoken", {
        headers: {
          token,
        },
      });
      const petsInfo = response.data;
      setPetList(petsInfo);
      setLoading(false);
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  }

  const PetContainer = petList.map((item) => (
    <PetItem
      key={item.id}
      petImage={{ uri: item.picture_url }}
      petName={item.firstName + " " + item.lastName}
      petDescription={item.description}
      petAge={item.birthdate}
      petType={'Cat'}
      petSex={item.male ? 'Macho' : 'Fêmea'}
    />
  ));

  return <View style={{ backgroundColor: OrangeBase }}>{PetContainer}</View>;
}
export default MyPets;
