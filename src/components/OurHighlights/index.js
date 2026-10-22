import { ScrollView, Text, View, Ima } from "react-native"
import { CardProduct } from "../CardProduct"
import imageProduct1 from '../../assets/images/Product_TNT.png'
import { styles } from "./style"

export const OurHighlights = ()  => {
    return(
        <View style={styles.container}>
            <Text style={styles.textOurHighlights}>Nossos <Text style={styles.textHighlights}>Destaques</Text></Text>

            <View style={styles.containerProducts}>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>
                <CardProduct image={imageProduct1} title="TNT Roxo" description="Nosso sabor conta como..."/>
            </View>
        </View>
    )
}