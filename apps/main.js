import React, { Component } from 'react';
import {
    PropTypes,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native'

export default class Main extends Component {
    constructor(props) {
        super(props);
    }

    openControlPanel = () => {
        this.drawer.open()
    };
    closePanel() { 
        this.drawer.close();
    }

    render() {
        return (
            <ScrollView style={styles.container}>
                <Text>MAIN</Text>
                <TouchableOpacity style={styles.button} onPress={ () => { this.openControlPanel() }}>
                    <Text>Open Drawer</Text>
                </TouchableOpacity>

            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#7699dd',
        padding: 20,
        flex: 1,
    },
    button: {
        backgroundColor: 'white',
        borderWidth: 1,
        borderColor: 'black',
        padding: 10,
    }
});