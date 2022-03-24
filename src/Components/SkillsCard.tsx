import { View, Text, TouchableOpacity, StyleSheet } from "react-native"


export function SkillsCard({ skill }) {
    return (
        <View style={styles.skillContainerControl}>
            <TouchableOpacity
                key={skill}
                style={styles.skillContainer}
                activeOpacity={.6}
            >
                <Text style={styles.skillText}>
                    {skill}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    skillContainerControl: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    skillContainer: {
        width: '90%',
        paddingVertical: 14,
        paddingHorizontal: 14,
        backgroundColor: '#1F1E25',
        marginTop: 14,
        borderRadius: 50,
        alignItems: 'center',

    },
    skillText: {
        color: '#F7F7F7',
        fontSize: 18,
        fontWeight: 'bold',
    }
})