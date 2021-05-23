import React from 'react';
import {StyleSheet,Text, View} from 'react-native';

const CreateNewFaceView = () => {
    return (
    <View style={styles.container}>
      <View style={styles.descriptionContainer}>
            <Text style={styles.descriptionPageText}>Mis caras</Text>
            {/* Mis visages list  */}
      </View>
      <View style={styles.scrollView}>
        <Text style={styles.descriptionPageText}>Mis caras</Text>
      </View>
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

export default CreateNewFaceView