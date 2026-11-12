import { Image, Text, View, ViewBase } from "react-native"
import productImage from '../../assets/images/Product_TNT.png'
import optionImage from '../../assets/images/optionImage.png'
import { styles } from "./style"
import { ButtonPrimary } from "../../components/ButtonPrimary"


export const DetailsProduct = () => {
    return (
        <View style={styles.containerDetailsScreenProduct}>
            <View style={styles.feauredProducts}>
                <Image source={productImage} />
                <View style={styles.imagesProduct}>
                    <Image source={optionImage} />
                    <Image source={optionImage} />
                    <Image source={optionImage} />
                    <Image source={optionImage} />
                </View>
            </View>

            <View style={styles.detailsProduct}>
                <Text style={styles.volumeProduct}>269ml</Text>

                <View>
                    <View>
                        <Text style={styles.textTitle}>TNT Energy</Text>
                        <Text style={styles.textHighlight}>Açaí com Guaraná</Text>
                    </View>

                    <Text style={styles.textDescription}>Combina o sabor marcante do açaí com o toque do guaraná em uma bebida energética refrescante. Ideal para quem bus...</Text>
                </View>

                <ButtonPrimary title="Comprar"/>
            </View>
        </View>
    )
}