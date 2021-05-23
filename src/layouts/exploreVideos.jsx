import React from 'react';
import {StyleSheet,Text, View, ScrollView} from 'react-native';

import GridExplore from '../views/gridExplore'

const textDescription = "Lorem ipsum dolor sit amet consectetur adipisicing elit, eveniet aliquid culpa officia aut! Impedit sit sunt quaerat, odit, tenetur error, harum nesciunt ipsum debitis quas aliquid."

const ExploreVideosView = () => {
    return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionPageText}>{textDescription}</Text>
      </View>
      <ScrollView style={styles.scrollView}>
        <GridExplore/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  descriptionContainer: {
    flex: .2,
    backgroundColor: "#fff",
    padding: 20 
  },
  scrollView: {
    flex: .8, 
    backgroundColor: "#fff", 
  },
  descriptionPageText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 18,
  }
})


export default ExploreVideosView