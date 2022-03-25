import { TouchableOpacity, Text, StyleSheet } from "react-native";

interface ButtonAddProps {
    addSkill: () => void;
}

export function ButtonAdd({ addSkill }: ButtonAddProps) {
    return (
        <TouchableOpacity
            style={styles.buttonAdd}
            activeOpacity={.6}
            onPress={addSkill}
        >
            <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    buttonAdd: {
        width: '100%',
        height: 50,
        backgroundColor: '#94B3FD',
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
})