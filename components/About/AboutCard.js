import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutCard = ({card, height, paddingBottom}) => {
  return (
    <View style={{...styles.container, height: height}}>
      <Text
        style={{...styles.text, color: card[3], paddingBottom: paddingBottom}}>
        {card[1]}
      </Text>
      <Text style={styles.text}>{card[2]}</Text>
    </View>
  );
};

AboutCard.defaultProps = {
  height: 65,
  paddingBottom: 0,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    marginBottom: 30,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AboutCard;
