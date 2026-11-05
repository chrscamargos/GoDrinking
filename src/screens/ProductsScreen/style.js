import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    containerProductsScreen: {
        backgroundColor: colors.colorDarkPurple,
        gap: 40,
        paddingLeft: 20
    },
    imgLogo: {
        height: 55,
        width: 140,
    },
    input:{
        width: 310,
        height: 40,
        backgroundColor: "rgba(222, 30, 236, 0.21)",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#de1eec",
        color: colors.colorWhite
    },
    containerInput:{
        flexDirection: "row",
        alignItems: "center",
        gap: 10
    },
    ourProducts:{
        gap: 20,
    },
    textOurProducts:{
        fontSize: 40,
        fontWeight: "700",
        color: colors.colorWhite,
    },
    textHighlightOurProducts:{
        fontSize: 40,
        fontWeight: "700",
        color: colors.colorHotDrink
    },
    containerProducts:{
        flexDirection: "row",
        flexWrap: "wrap",
        gap: 10,
    }
})