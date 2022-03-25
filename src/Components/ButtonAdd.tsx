import { TouchableOpacity, TouchableOpacityProps, Text, StyleSheet } from "react-native";

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function ButtonAdd({ title, ...rest }: ButtonProps) {
    return (
        <TouchableOpacity
            style={styles.buttonAdd}
            activeOpacity={.6}
            {...rest}
        >
            <Text style={styles.buttonText}>
                {title}
            </Text>
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