import { Image, ScrollView, Text, View } from "react-native"
import logo from "../../assets/images/logo.png"
import { styles } from "./style"
import {useFonts} from 'expo-font'
import { OurOffers } from "../../components/OurOffers"
import { AvaliableSizes } from "../../components/AvaliableSizes"
import { OurHighlights } from "../../components/OurHighlights"

export const HomeScreen = () => {
    useFonts ({
        Oswald: require('../../assets/fonts/Oswald-VariableFont_wght.ttf')
    })

    return(
        <ScrollView contentContainerStyle={styles.containerHomeScreen}>
            <Image source={logo} style={styles.logoHome}/>
            <OurOffers/>
            <AvaliableSizes/>
            <OurHighlights/>

        </ScrollView>
    )
}