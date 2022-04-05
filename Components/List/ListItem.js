import React from "react";
import { Text, View, Button, FlatList, ScrollView } from "react-native";
import styles from "../../Styles";

export default function ListItem(props) {
	const { listItem, onHandlerModal } = props;

	const renderItem = (data) => (
		<View style={styles.containerLista}>
			<View style={{ flexDirection: "row", alignItems: "center", height: 45 }}>
				<Text style={styles.textLista}>
					{data.item.value} - Limite: {data.item.price}
				</Text>
				<Text style={{ padding: 10, marginBottom: 5 }} onPress={onHandlerModal.bind(this, data.item.id)}>
					X
				</Text>
			</View>
		</View>
	);

	return (
		<>
			<ScrollView>
				<View style={{ flex: 1 }}>
					<FlatList data={listItem} renderItem={renderItem} keyExtractor={(item) => item.id} />
				</View>
			</ScrollView>
		</>
	);
}
