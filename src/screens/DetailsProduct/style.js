import { StyleSheet } from "react-native"
import { colors } from "../../themes/colors"
import { fonts } from "../../themes/fonts"

export const styles = StyleSheet.create({
    containerDetailsScreenProduct:{
        flex: 1,
        backgroundColor: colors.colorBlack
    },
    feauredProducts:{
        backgroundColor: colors.colorDarkPurple,
        flexDirection: "row",
        gap: 45,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingRight: 25,
        paddingVertical: 25
    },
    imagesProduct:{
        gap: 20
    },
    detailsProduct:{
        borderTopWidth: 2,
        borderTopColor: colors.colorHotDrink,
        backgroundColor: colors.colorBlack,
        paddingTop: 25,
        paddingLeft: 25,
        gap: 20
    },
    volumeProduct:{
        position: "absolute",
        top: -15,
        left: 25,
        backgroundColor: colors.colorHotDrink,
        color: colors.colorWhite,
        paddingVertical: 4,
        paddingHorizontal: 25
    },
    textTitle:{
        fontSize: 40,
        fontWeight: "700",
        color: colors.colorWhite,
        fontFamily: fonts.fontTitle
    },
    textHighlight:{
        fontSize: 40,
        fontWeight: "700",
        color: colors.colorHotDrink,
        lineHeight: 45,
        fontFamily: fonts.fontTitle
    },
    textDescription:{
        color: colors.colorGray,
        width: 380,
        fontSize: 18,
        fontFamily: fonts.fontBody
    },
})