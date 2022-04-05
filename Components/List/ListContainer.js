import React, { useState } from "react";
import { Text, View } from "react-native";
import ModalItem from "../Modal";
import styles from "../../Styles";
import ListItem from "./ListItem";

export default function ListContainer(props) {
	const { listItem, setListItem } = props;
	//   const [textItem, setTextItem] = useState();
	const [selectedItem, setSelectedItem] = useState({});
	const [modalShow, setModalShow] = useState(false);

	const onHandlerDelete = (id) => {
		setListItem((currenItems) => currenItems.filter((item) => item.id !== id));
		setSelectedItem({});
		setModalShow(!modalShow);
	};
	const onHandlerModal = (id) => {
		setSelectedItem(listItem.filter((item) => item.id === id)[0]);
		setModalShow(!modalShow);
	};
	const modalClose = () => {
		setModalShow(!modalShow);
	};

	return (
		<>
			<View style={styles.listadoItems}>
				<Text style={styles.tituloLista}>LISTADO DE TAREAS</Text>

				<ListItem onHandlerModal={onHandlerModal} listItem={listItem} />
			</View>

			<ModalItem onDelete={onHandlerDelete} item={selectedItem} visible={modalShow} onCancel={modalClose} />
		</>
	);
}
