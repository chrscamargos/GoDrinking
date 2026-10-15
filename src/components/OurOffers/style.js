import { StyleSheet } from "react-native";
import { fonts } from "../../themes/fonts";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    containerOurOffers:{
        gap: 10
    },
    textOurOffers:{
        fontFamily: fonts.fontTitle,
        fontSize: 25,
        color: colors.colorWhite,
        fontWeight: 700
    },
    textHighLight:{
        color: colors.colorHotDrink
    },
    scrollContent:{
        gap: 15
    }
})