import { StyleSheet } from "react-native";
import { colors } from "../../themes/colors";

export const styles = StyleSheet.create({
    containerProductsScreen: {
        flex: 1,
        backgroundColor: colors.colorDarkPurple,
        gap: 40,
        paddingLeft: 20
    },
    imgLogo: {
        height: 55,
        width: 140,
    },
    input:{
        width: 338,
        height: 40,
        backgroundColor: "#de1eec",
        borderRadius: 5,
        borderWidth: 1,
        borderColor: "#de1eec"
})