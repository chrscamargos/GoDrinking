import { StyleSheet } from "react-native";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    containerAvaliableSizes:{
        gap: 10
    },
    textTitle:{
        fontSize: 25,
        fontWeight: "700",
        fontFamily: fonts.fontTitle,
        color: colors.colorWhite
    },
    textHighLight:{
        color: colors.colorHotDrink
    }
})