import { View } from "react-native";
import { StartScreen } from "./screens/StartScreen";
import { HomeScreen } from "./screens/HomeScreen";
import { ProductsScreen } from "./screens/ProductsScreen"
import { DetailsProduct } from "./screens/DetailsProduct";
import { AppRouter } from "./routes/router";

export default function App() {
  return (
    <AppRouter/>
  );
}
