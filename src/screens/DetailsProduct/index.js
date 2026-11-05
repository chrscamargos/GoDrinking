import { Image, View } from "react-native"
import productImage from '../../assets/images/Product_TNT.png'
import optionImage from '../../assets/images/optionImage.png'


export const DetailsProduct = () => {
    return (
        <View>
            <View>
                <Image source={productImage}/>
                <View>
                    <Image source={optionImage}/>
                    <Image source={optionImage}/>
                    <Image source={optionImage}/>
                    <Image source={optionImage}/>
                </View>
            </View>
            <View>
            
            </View>
        </View>
    )
}