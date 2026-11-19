import { Pressable, Text } from "react-native"
import { styles } from "./style"

export const ButtonPrimary = ({ title, onPress }) => {
    return(
        <Pressable style={styles.btnPrimary} onPress={onPress}>
            <Text style={styles.txtBtnPrimary}>{title}</Text>
        </Pressable>
    )
}