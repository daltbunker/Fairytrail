import React from 'react';
import {View, Text} from 'react-native';
import AboutCard from './AboutCard';

const AboutCardList = ({cards}) => {
  const AboutCards = cards.map((card, i) => {
    // Adjusted Sizing for Wishes card
    if (i === 1) {
      return <AboutCard card={card} key={card[0]} height={100} />;
    }
    // Adjusted Sizing for Values and Hobbies card
    if (i > 1 && i < 4) {
      return (
        <AboutCard card={card} key={card[0]} height={100} paddingBottom={15} />
      );
    }
    return <AboutCard card={card} key={card[0]} />;
  });
  return (
    <View>
      <Text>{AboutCards}</Text>
    </View>
  );
};

export default AboutCardList;
