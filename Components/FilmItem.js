// Components/FilmItem.js

import React from 'react'
import { StyleSheet, View, Text, Image } from 'react-native'

class FilmItem extends React.Component {
    render() {
        console.log(this.props)
        const film = this.props.film
        return (
          <View style={styles.main_container}>
            <Image
              style={styles.image}
              source={{uri: "image"}}
            />
            <View style={styles.content_container}>
              <View style={styles.header_container}>
                <Text style={styles.title_text}>{film.title}</Text>
                <Text style={styles.vote_text}>{film.vote_average}</Text>
              </View>
              <View style={styles.description_container}>
                <Text style={styles.description_text} numberOfLines={6}>{film.overview}</Text>
              </View>
              <View style={styles.date_container}>
                <Text style={styles.date_text}>Sorti le {film.release_date}</Text>
              </View>
            </View>
          </View>
        )
    }
}

const styles = StyleSheet.create({
  main_container: {
    height: 190,
    flexDirection: "row"
  },
  item_container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  img_film: {
    margin: 1,
    flex: 0.3
  },
  title_text: {
    margin: 1,
    flex: 0.7
  },
  vote_average: {
    flex: 0.3
  },
})

export default FilmItem