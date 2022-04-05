import React from "react";
import { View } from "react-native";
import { StatusBar } from "expo-status-bar";
import Header from "./Components/Header";
import AddItem from "./Components/AddItem";

export default function App() {
	return (
		<>
			<StatusBar style="auto" />
			<View>
				<Header text={"TAREAS PENDIENTES"} />
				<AddItem />
			</View>
		</>
	);
}
