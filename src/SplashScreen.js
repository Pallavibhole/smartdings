import React, { Component } from 'react';
import {
  Animated, Dimensions,
  FlatList, Pressable, SafeAreaView, StatusBar, StyleSheet, Text, View
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
// import global_style from '../Style/GlobalStyle';
export const deviceHeight = Dimensions.get('window').height;
export const deviceWidth = Dimensions.get('window').width;


class SplashScreen extends Component {

  constructor(props) {
    super(props)
    this.animatedWidth = new Animated.Value(0)
    this.state = {
      TopCategory: [
        { Side: 'Front Shopping Window', count: '5 Accessories', Btn: 'On', color: "#60A5E6" },
        { Side: 'Kids Shopping Window', count: '2 Accessories', Btn: 'On', color: "#60A5E6" },
        { Side: 'Earing Shopping Window', count: '4 Accessories', Btn: 'On', color: "#60A5E6" },
        { Side: 'Shoe wall', count: '1 Accessories', Btn: 'Off', color: "#60A5E6" },
      ]
    }
  }

  gotoSilderDetails = (item, index) => {
    this.props.navigation.navigate('ProductDetais', {
      param_index: index
    });
  }

  render() {

    return (

      <SafeAreaView style={{ flex: 1, backgroundColor: '#000' }}>

        {/* for status bar color */}
        <StatusBar
          barStyle="dark-content"
          hidden={true}
          backgroundColor={global.statusBarColor}
          translucent={true} />

        <ScrollView style={{ padding: 10 }}>

          <FlatList
            data={this.state.TopCategory}
            style={{ width: deviceWidth, marginTop: 10 }}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
            renderItem={({ item, index }) =>

              <Pressable
                activeOpacity={global.activeOpacity}
                hitSlop={{ top: 30, bottom: 30, left: 30, right: 30 }}
                onPress={() => this.gotoSilderDetails(item, index)}
                style={{ paddingVertical: 5 }}>

                <View style={[styles.dropdownStyle]}>

                  <View style={{ marginVertical: 20 }}>
                    <Text style={[styles.text]}>{item.Side}</Text>

                    <Text style={[styles.text1]}>{item.count}</Text>

                    <Text style={[styles.textBtn]}>{item.Btn}</Text>
                  </View>

                </View>


              </Pressable>

            } />

        </ScrollView>

      </SafeAreaView>

    );
  }
}

const styles = StyleSheet.create({

  text: {
    fontSize: 20,
  },

  text1: {
    fontSize: 14,
    marginTop: 10
  },
  textBtn: {
    fontSize: 16,
    marginTop: 10,
    backgroundColor: 'green',
    height: 40,
    width: 40,
    textAlign: 'center',
    padding: 5,
    borderRadius: 5,
    opacity: 0.5
  },
  dropdownStyle: {
    margin: 10,
    backgroundColor: '#FFF',
    width: '100%',
    alignSelf: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderColor: '#707070',
    borderRadius: 5,
    ...Platform.select({
      ios: {
        borderWidth: 0.25,
        padding: 15,
        shadowColor: '#0000000D',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 3,

      },
      android: {
        shadowColor: '#0000000D',
        shadowOffset: { width: 10, height: 5 },
        shadowOpacity: 10,
        shadowRadius: 4,
        elevation: 4,

      }
    })
  },
});

export default SplashScreen;