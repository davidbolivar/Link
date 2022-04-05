import { Text, View } from "react-native";
import styles from "../Styles";

export default function Header(props) {
	const { text } = props;
	return (
		<>
			<View style={styles.headerContainer}>
				<Text style={styles.headerText}>{text}</Text>
			</View>
		</>
	);
}
