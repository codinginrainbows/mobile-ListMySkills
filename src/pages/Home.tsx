import { useEffect, useState } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    FlatList,
    StatusBar
} from 'react-native';

import { ButtonAdd } from '../Components/ButtonAdd';
import { SkillCard } from '../Components/SkillCard';

import Icon from 'react-native-vector-icons/FontAwesome5';

interface SkillProps {
    id: string;
    name: string;
    date?: Date;
}

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [listMySkills, setListMySkills] = useState<SkillProps[]>([])
    const [greeting, setGreeting] = useState('')

    function handleAddNewSkill() {
        const skillData = {
            id: String(new Date().getTime()),
            name: newSkill,
        }

        if (newSkill !== '') {
            setListMySkills(prevState => [...prevState, skillData])
            setNewSkill('') //clear input field
        }
    }

    function handleClearSkillList() {
        setListMySkills([])
    }

    function handleClearSingleSkill(id: string) {
        setListMySkills(prevState => prevState.filter(
            skill => skill.id !== id
        ))
    }

    useEffect(() => {
        const currentTimeOfTheDay = new Date().getHours()


        if (currentTimeOfTheDay >= 6 && currentTimeOfTheDay <= 12) {
            setGreeting('Good morning, ')
        } else if (currentTimeOfTheDay > 12 && currentTimeOfTheDay <= 18) {
            setGreeting('Good afternoon, ')
        } else if (currentTimeOfTheDay >= 17 && currentTimeOfTheDay <= 23) {
            setGreeting('Good evening, ')
        } else {
            setGreeting('Go to sleep, ')
        }
    }, [listMySkills])

    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />

            <Text style={styles.title}>
                <Text style={styles.title}>{greeting}</Text> Gabriel.
            </Text>

            <TextInput
                style={styles.input}
                placeholder='New skill'
                placeholderTextColor='#333'
                onChangeText={setNewSkill}
                value={newSkill}
            />

            <ButtonAdd title='Add' onPress={handleAddNewSkill} />

            <View style={styles.buttonContainer}>
                <Text style={[styles.title, { marginTop: 32, marginBottom: 20 }]}>
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
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    <View style={styles.skillContainer}>
                        <SkillCard
                            skill={item.name}

                        />
                        <TouchableOpacity
                            onPress={() => handleClearSingleSkill(item.id)}
                        >
                            <Icon
                                name="trash"
                                color="#FF5E5B"
                                size={24}
                            />
                        </TouchableOpacity>
                    </View>
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
        backgroundColor: '#121214',
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
        marginTop: 32,
        marginBottom: 20,
        borderRadius: 4,
        alignItems: 'center',
        justifyContent: 'center'

    },
    buttonText: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    skillContainer: {
        backgroundColor: '#1F1E25',

        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',

        paddingHorizontal: 24,
        paddingVertical: 12,
        borderRadius: 20,
    }
});

