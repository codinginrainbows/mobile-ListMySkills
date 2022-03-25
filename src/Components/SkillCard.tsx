import { View, Text, TouchableOpacity, TouchableOpacityProps, StyleSheet } from "react-native"



interface SkillCardProps extends TouchableOpacityProps {
    skill: string
}

export function SkillCard({ skill, ...rest }: SkillCardProps) {
    return (
        <TouchableOpacity
            key={skill}
            activeOpacity={.6}
            {...rest}
        >
            <Text style={styles.skillText}>
                {skill}
            </Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    skillText: {
        color: '#F7F7F7',
        fontSize: 18,
        fontWeight: 'bold',
    },
})