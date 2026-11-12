import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";
import { fonts } from "../../themes/fonts";

export const styles = StyleSheet.create({
    containerStartScreen:{
        flex: 1,
        backgroundColor: colors.colorDarkPurple,
        justifyContent: "center",
        alignItems: "center",
        gap: 40,
    },
    textWelcome:{
        color: colors.colorGray,
        fontFamily: fonts.fontBody,
        fontSize: 20,
        textAlign:"center"
    },
    teste:{
        color: colors.colorWhite
    }
})