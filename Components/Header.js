import React from 'react'
import { View, Button, TextInput, StyleSheet, Text, Image, FlatList } from 'react-native'
import films from '../Helpers/filmsData'
import FilmItem from './FilmItem'

class Search extends React.Component {
    render() {
        return (
            <View style={styles.main_container}>
                <Image
            style={styles.tinyLogo}
            source={{
            uri: 'https://u4b9k3j4.stackpathcdn.com/wp-content/uploads/2019/11/Icon-SocialFoot_min_w.png',
            }}
            />
                <Text style={styles.name}> Social Foot ⚽ </Text>
                <Text style={styles.title}> Football Féminin et Masculin </Text>
                <TextInput style={styles.textinput} placeholder="Recherche d'un club ou d'un membre"/>
                <Button style={styles.button} title="Recherche" onPress={() => {}}/>
                <FlatList
                    data={films}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({item}) => <FilmItem/>}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    main_container: {
        paddingTop: 10,
        alignItems: 'center',
        flex: 1, 
        marginTop: 30,
        backgroundColor: '#028090',
        flexDirection: 'column'
    },
    tinyLogo: {
        width: 50,
        height: 50
      },
      name: {
        color: 'snow',
        paddingBottom: 10
      },
      title: {
        color: 'snow',
        fontFamily: 'serif',
        fontStyle: 'italic',
        paddingBottom: 10
      },
    button: {
        height: 50,
    },
    textinput: {
        marginLeft: 5,
        marginRight: 5,
        marginBottom: 5,
        height: 50,
        borderColor: '#000000',
        backgroundColor: 'white',
        borderWidth: 1,
        paddingLeft: 7,
        paddingRight: 7
        
    }
}
)

export default Search