import React, { useState } from "react";
import { Text, View, Button, TextInput } from "react-native";
import styles from "../Styles";
import ListContainer from "./List/ListContainer";

export default function AddItem() {
	const [taskNameText, setTextItem] = useState();
	const [DateLimitText, setPriceItem] = useState();
	const [listItem, setListItem] = useState([]);
	const [idCount, setIdCount] = useState(0);

	const onHandlerChangeItem = (taskName) => {
		setTextItem(taskName);
	};
	const onHandlerChangePrice = (dateLimit) => {
		setPriceItem(dateLimit);
	};

	const addItem = () => {
		let nextId = idCount + 1;
		if (taskNameText != "" && DateLimitText != "") {
			setListItem([...listItem, { id: nextId, value: taskNameText, price: DateLimitText }]);
			setIdCount(nextId);
			setTextItem("");
			setPriceItem("");
		}
	};

	return (
		<View>
			<View style={styles.listado}>
				<Text style={styles.textNormal}>NUEVA TAREA</Text>
				<TextInput style={styles.textInputs} placeholder="Descripción" value={taskNameText} onChangeText={onHandlerChangeItem} />
				<TextInput style={styles.textInputs} placeholder="Fecha límite" value={DateLimitText} onChangeText={onHandlerChangePrice} />
				<View style={styles.btnContainer}>
					<View>
						<Button title="Agregar" color="#71B5E2" onPress={addItem} />
					</View>
				</View>
			</View>
			<ListContainer listItem={listItem} setListItem={setListItem} />
		</View>
	);
}
