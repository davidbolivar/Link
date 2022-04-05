import { Text, View, Button, Modal } from "react-native";
import styles from "../Styles";

export default function ModalItem(props) {
	const { visible, onDelete, item, onCancel } = props;

	return (
		<Modal animationType="slide" visible={visible}>
			<View style={styles.modalCentered}>
				<View style={styles.modalView}>
					<View style={styles.modalBody}>
						<View>
							<Text>¿Desea borrar la tarea {item.value}?</Text>
						</View>
					</View>
					<View style={styles.modalButtonContainer}>
						<View style={styles.modalButton}>
							<Button title="SI" color="#71B5E2" onPress={onDelete.bind(this, item.id)} />
						</View>
						<View style={styles.modalButton}>
							<Button title="NO" color="#A2A2A2" onPress={onCancel.bind(this)} />
						</View>
					</View>
				</View>
			</View>
		</Modal>
	);
}
