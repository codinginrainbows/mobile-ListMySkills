import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { ButtonAdd } from '../Components/ButtonAdd';

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [listMySkills, setListMySkills] = useState([])

    function handleAddNewSkill() {
        setListMySkills(prevState => [...prevState, newSkill])
        setNewSkill('')
    }

    function handleClearSkillList() {
        setListMySkills([])
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                Welcome InnerSpeaker
            </Text>

            {/* adding skills */}
            <TextInput
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#333'
                onChangeText={setNewSkill}
                value={newSkill}
            />

            <ButtonAdd addSkill={handleAddNewSkill} />

            <Text style={[styles.title, { marginTop: 40 }]}>
                Skill List:
            </Text>

            {listMySkills.map(skill => (
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
            ))}

            <TouchableOpacity
                style={styles.buttonRemove}
                activeOpacity={.6}
                onPress={handleClearSkillList}
            >
                <Text style={styles.buttonText}>CLEAR</Text>
            </TouchableOpacity>

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
    buttonRemove: {
        width: '100%',
        height: 50,
        backgroundColor: '#FF392E',
        marginTop: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
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
});
