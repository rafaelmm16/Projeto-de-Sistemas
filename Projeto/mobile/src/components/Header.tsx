import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

interface HeaderProps {
  title: string;
  showCancel?: boolean;
}

export default function Header({ title, showCancel = true }: HeaderProps) {
  const navigation = useNavigation();

  function handleGoBackToAppHomePage() {
    navigation.navigate('SGMap')
  }

  return (
    <View style={styles.container}>
      <BorderlessButton onPress={navigation.goBack}>
        <Feather name="arrow-left" size={24} color="#F5AB35" />
      </BorderlessButton>
      <Text style={styles.title}>
        { title }
      </Text>

      { showCancel ? (
          <BorderlessButton onPress={handleGoBackToAppHomePage}>
            <Feather name="x" size={24} color="#FF669D" />
         </BorderlessButton>
        ) : (
          <View />
        )
      }
    </View>
  );
}

const styles = StyleSheet.create({ 
  container:  {
    alignItems: 'center',
    //backgroundColor: '#F9FAFC',
    //borderBottomWidth: 1,
    //borderColor: '#DDE3F0',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 24,
    paddingTop: 44,
  },
  title: {
    color: '#F5AB35',
    fontFamily: 'Nunito_600SemiBold',
    fontSize: 25,
    fontWeight: '600',
  }
})
