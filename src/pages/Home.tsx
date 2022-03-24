import { useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList
} from 'react-native';

import { ButtonAdd } from '../Components/ButtonAdd';
import { SkillsCard } from '../Components/SkillsCard';

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [listMySkills, setListMySkills] = useState([])

    function handleAddNewSkill() {
        setListMySkills(prevState => [...prevState, newSkill])
        setNewSkill('') //clear input field
    }

    function handleClearSkillList() {
        setListMySkills([])
    }


    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                User: innerspeaker
            </Text>

            <TextInput
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#333'
                onChangeText={setNewSkill}
                value={newSkill}
            />

            <ButtonAdd addSkill={handleAddNewSkill} />

            <View style={styles.buttonContainer}>
                <Text style={[styles.title, { marginTop: 40 }]}>
                    Skill List:
                </Text>

                <TouchableOpacity
                    style={styles.buttonRemove}
                    activeOpacity={.6}
                    onPress={handleClearSkillList}
                >
                    <Text style={styles.buttonText}>CLEAR</Text>
                </TouchableOpacity>
            </View>

            {/* alternative for ScrollView that does not generate the whole list all at once
             FlatList does it broken in pieces which on the other hand brings performance */}
            <FlatList
                data={listMySkills}
                keyExtractor={skill => skill}
                renderItem={({ item }) => (
                    <SkillsCard skill={item} />
                )}
            />

            {/* {listMySkills.map(skill => (
                <SkillsCard skill={skill} key={skill} />
            ))} */}

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#121015',
        paddingVertical: 60,
        paddingHorizontal: 40,
    },
    title: {
        color: '#f7f7f7',
        fontSize: 24,
        fontWeight: 'bold',
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
    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    buttonRemove: {
        width: '30%',
        height: 36,
        backgroundColor: '#FF392E',
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
});
