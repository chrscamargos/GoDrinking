import { ScrollView, Text, View } from "react-native"
import { CardSize } from "../CardSize"
import Product_TNT from "../../assets/images/Product_TNT.png"
import Product_TNT_Bottle from "../../assets/images/Product_TNT_Bottle.png"
import { styles } from "./style"

export const AvaliableSizes = () => {
    return(
        <View style={styles.containerAvaliableSizes}>
            <Text style={styles.textTitle}>Tamanhos <Text style={styles.textHighLight}>Disponíveis</Text></Text>
            <ScrollView horizontal contentContainerStyle={styles.scrollView}>
                <CardSize image={Product_TNT} amount="269" measure="ml"/>
                <CardSize image={Product_TNT} amount="269" measure="ml"/>
                <CardSize image={Product_TNT} amount="269" measure="ml"/>
                <CardSize image={Product_TNT} amount="269" measure="ml"/>
                <CardSize image={Product_TNT_Bottle} amount="1" measure="L"/>
                <CardSize image={Product_TNT_Bottle} amount="1" measure="L"/>
                <CardSize image={Product_TNT_Bottle} amount="1" measure="L"/>
            </ScrollView>
        </View>
    )
}