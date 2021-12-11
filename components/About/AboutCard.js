import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const AboutCard = ({card, height, paddingBottom}) => {
  return (
    <View style={{...styles.container, height: height}}>
      <Text
        style={{
          ...styles.text,
          color: card.textColor,
          paddingBottom: paddingBottom,
        }}>
        {card.heading}
      </Text>
      <Text style={styles.text}>{card.content}</Text>
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
