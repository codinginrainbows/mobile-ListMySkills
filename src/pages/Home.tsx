import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

export function Home() {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Gabriel!</Text>

            <TextInput
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#333'
            />
            <TouchableOpacity
                style={styles.button}
                activeOpacity={.6}
            >
                <Text style={styles.buttonText}>Add</Text>
            </TouchableOpacity>

            <Text style={[styles.title, { marginTop: 40 }]}>
                My Skills:
            </Text>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 80,
        paddingHorizontal: 40,
    },
    title: {
        color: '#f7f7f7',
        fontSize: 24,
        fontWeight: 'bold'
    },
    input: {
        width: '100%',
        backgroundColor: '#1F1E25',
        color: '#fff',
        marginTop: 20,
        borderRadius: 4,

        fontSize: 18,
        height: 46,
        paddingVertical: 10,
        paddingHorizontal: 20,
    },
    button: {
        width: '100%',
        height: 50,
        backgroundColor: '#A370F7',
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    }
});
