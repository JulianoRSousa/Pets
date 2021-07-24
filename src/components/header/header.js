import { useNavigation, useRoute } from "@react-navigation/native";
import React from "react";
import { Dimensions, View } from "react-native";
import styled from "styled-components";
import * as AppColors from "../../assets/AppColors";
import BackButtonIcon from "../../assets/images/BackButtonIcon";
import MenuIcon from "../../assets/images/MenuIcon";
import { rem } from "../components";

function Header(props) {
  const navigation = useNavigation();
  const route = useRoute();
  const showBackButton =
    props.showBackButton == undefined ? true : props.showBackButton;
  const showTitle = props.showTitle == undefined ? true : props.showTitle;
  const showMenu = props.showMenu == undefined ? true : props.showMenu;

  const HeaderContainer = styled.View`
    background-color: ${AppColors.OrangeBase};
    height: ${70 * rem}px;
    width: 100%;
    justify-content: center;
  `;
  const HeaderItemsContainer = styled.View`
    height: ${38 * rem}px;
    margin-top: ${15 * rem}px;
    margin-left: ${15 * rem}px;
    margin-right: ${15 * rem}px;
    margin-bottom: ${15 * rem}px;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  `;

  const BackButtonContainer = styled.TouchableOpacity`
    background-color: ${AppColors.OrangeDark};
    height: ${38 * rem}px;
    width: ${38 * rem}px;
    border-radius: ${6 * rem}px;
    align-items: center;
    justify-content: center;
    align-self: flex-start;
  `;
  const MenuContainer = styled.TouchableOpacity`
    background-color: ${AppColors.OrangeDark};
    width: ${38 * rem}px;
    height: ${35 * rem}px;
    border-radius: ${6 * rem}px;
    align-items: center;
    justify-content: center;
    align-self: flex-end;
  `;

  const TitleContainer = styled.Text`
    color: white;
    text-align: center;
    font-family: "Delius";
    font-size: ${26 * rem}px;
    align-self: center;
    flex: 1;
  `;

  return (
    <HeaderContainer style={props.style}>
      <HeaderItemsContainer>
        {showBackButton ? (
          navigation.canGoBack() ? (
            <BackButtonContainer onPress={() => navigation.goBack()}>
              <BackButtonIcon height={27 * rem} width={30 * rem} />
            </BackButtonContainer>
          ) : (
            <View style={{ height: 38 * rem, width: 38 * rem }} />
          )
        ) : (
          <View style={{ height: 38 * rem, width: 38 * rem }} />
        )}
        <TitleContainer>
          {showTitle ? props.setTitle || route.name : ""}
        </TitleContainer>
        {showMenu ? (
          <MenuContainer onPress={() => navigation.toggleDrawer()}>
            <MenuIcon height={35 * rem} width={38 * rem} />
          </MenuContainer>
        ) : (
          <View style={{ height: 35 * rem, width: 38 * rem }} />
        )}
      </HeaderItemsContainer>
    </HeaderContainer>
  );
}
export default Header;
