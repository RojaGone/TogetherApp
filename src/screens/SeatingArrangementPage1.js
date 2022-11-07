import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  ScrollView,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from 'react-native-shadow-cards';
import Icon from 'react-native-vector-icons/Feather';
import BottomSheet from 'reanimated-bottom-sheet';
import Animated, {set} from 'react-native-reanimated';
import {TouchableOpacity} from 'react-native-gesture-handler';
import CameraIcon from 'react-native-vector-icons/SimpleLineIcons';
import GalleryIcon from 'react-native-vector-icons/EvilIcons';

const SeatingArrangementPage1 = () => {
  const nav = useNavigation();
  const [text, onChangeText] = React.useState('');
  const [totalBoxes, onChangeTotalBoxes] = React.useState('');
  const [boxPrice, onChangeBoxPrice] = React.useState('');
  const [seatsPerBox, onChangeSeatsPerBox] = React.useState('');
  const [seatPrice, onChangeSeatPrice] = React.useState('');
  const [images, setimages] = React.useState([
    require('../assets/images/melbourne-cricket-ground-26.png'),
    require('../assets/images/pitch.jpg'),
    require('../assets/images/Raipur_International_Cricket_Stadium.png'),
  ]);
  var count = images.length;
  bs = React.createRef();
  fall = new Animated.Value(1);

  const NextBtn = () => {
    // nav.navigate('ChooseCaptureImagePage');
    nav.navigate('ThankYouPage');
  };

  const UploadBtnComponent = () => {
    bs.current.snapTo(0);
  };

  const renderInner = () => (
    <View style={{backgroundColor: 'white', height: '100%'}}>
      <View>
        <Text
          style={{
            color: 'black',
            backgroundColor: 'white',
            fontSize: 15,
            textAlign: 'justify',
            fontWeight: 'bold',
            marginStart: 15,
          }}>
          Choose from
        </Text>
      </View>
      <View
        style={{
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <Card
          style={{
            width: '45%',
            height: 120,
            marginTop: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <CameraIcon
            name="camera"
            size={30}
            color="#3949AB"
            style={styles.CameraIconStyle}
            onPress={UploadBtnComponent}
          />
          <Text style={{color: 'black', fontWeight: '700', fontSize: 20}}>
            Camera
          </Text>
        </Card>
        <Card
          style={{
            width: '45%',
            height: 120,
            marginTop: 20,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <GalleryIcon
            name="image"
            size={40}
            color="#3949AB"
            style={styles.GalleryIconStyle}
            onPress={UploadBtnComponent}
          />
          <Text style={{color: 'black', fontWeight: '700', fontSize: 20}}>
            Gallery
          </Text>
        </Card>
      </View>
    </View>
  );

  const SetValueFunc = () => {
    bs.current.snapTo(1);
  };

  const renderHeader = () => (
    <View style={styles.header} onStartShouldSetResponder={SetValueFunc}>
      <View style={styles.panelHeader}>
        <View style={styles.panelHandle}></View>
      </View>
    </View>
  );

  return (
    <ScrollView >
    <View style={styles.Container}>
      <Animated.View
        style={{opacity: Animated.add(0.3, Animated.multiply(fall, 1.0))}}>
         
        <Text style={styles.txt1}>Total Capacity</Text>
        <TextInput
          style={styles.EventNameStyl}
          onChangeText={onChangeText}
          value={text}
          placeholder="10,000"
          placeholderTextColor={'gray'}
          keyboardType="numeric"
        />
        <View style={styles.Container1}>
          <Text style={styles.txt2}>Total Boxes</Text>
          <Text style={styles.txt2}>Box Price</Text>
        </View>
        <View style={styles.Container2}>
          <TextInput
            style={styles.StartDateStyl}
            onChangeText={onChangeTotalBoxes}
            value={totalBoxes}
            placeholder="10"
            placeholderTextColor={'gray'}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.EndDateStyl}
            onChangeText={onChangeBoxPrice}
            value={boxPrice}
            placeholder="₹1299.45"
            placeholderTextColor={'gray'}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.Container1}>
          <Text style={styles.txt2}>Seats Per Box</Text>
          <Text style={styles.txt2}>Seat Price</Text>
        </View>
        <View style={styles.Container2}>
          <TextInput
            style={styles.StartDateStyl}
            onChangeText={onChangeSeatsPerBox}
            value={seatsPerBox}
            placeholder="10"
            placeholderTextColor={'gray'}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.EndDateStyl}
            onChangeText={onChangeSeatPrice}
            value={seatPrice}
            placeholder="₹1548.32"
            placeholderTextColor={'gray'}
            keyboardType="numeric"
          />
        </View>
        
        <Text style={styles.txt1}>Select layout or upload custom layout</Text>
       
        <FlatList
        
          data={images}
          renderItem={({item, index}) => (
            <View
              style={{
                flex: 0.5,
                width: '50%',
                flexDirection: 'column',
                height: 120,
                marginBottom:
                  count % 2 == 0 ? (index == count - 2 ? 130 : null) : 0,
              }}>
              {count % 2 == 0 ? (
                <Card style={styles.cardStylEven}>
                  <Image
                    source={item}
                    key={index}
                    style={styles.imageThumbnail}
                  />

                  {console.log('even value : ', count)}
                  {index == count - 2 ? (
                    <Card
                      style={{
                        width: '100%',
                        height: 100,
                        marginTop: 10,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: 'gray',
                        alignSelf: 'flex-start',
                      }}>
                      <Text
                        style={{
                          color: 'gray',
                          alignSelf: 'center',
                          marginTop: 20,
                        }}>
                        Upload Custom Layout
                      </Text>
                      <Icon
                        name="upload"
                        size={25}
                        color="#121110"
                        style={styles.iconStyle}
                        onPress={UploadBtnComponent}
                      />
                    </Card>
                  ) : null}
                </Card>
              ) : (
                <Card style={styles.cardStylOdd}>
                  <Image
                    source={item}
                    key={index}
                    style={styles.imageThumbnail}
                  />
                  {console.log('odd value : ', count)}
                  {index == count - 1 ? (
                    <Card
                      style={{
                        width: '100%',
                        height: 100,
                        marginStart: 27,
                        borderRadius: 10,
                        borderWidth: 1,
                        borderColor: 'gray',
                      }}>
                      <Text
                        style={{
                          color: 'gray',
                          alignSelf: 'center',
                          marginTop: 20,
                        }}>
                        Upload Custom Layout
                      </Text>
                      <Icon
                        name="upload"
                        size={25}
                        color="#121110"
                        style={styles.iconStyle}
                        onPress={UploadBtnComponent}
                      />
                    </Card>
                  ) : null}
                </Card>
              )}
            </View>
          )}
          //Setting the number of column
          numColumns={2}
          keyExtractor={(item, index) => index}
        />
       
        <Text style={styles.Btn} onPress={NextBtn}>
          Next
        </Text>
        
      </Animated.View>
      <BottomSheet
        ref={bs}
        snapPoints={[230, 0]}
        renderContent={renderInner}
        renderHeader={renderHeader}
        initialSnap={1}
        callbackNode={fall}
        enabledGestureInteraction={true}
        enabledHeaderGestureInteraction={true}
        enabledContentGestureInteraction={true}
      />
    </View>
    </ScrollView>
  );
};

export default SeatingArrangementPage1;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Container1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  Container2: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 10,
  },
  Btn: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'Lato',
    width: '95%',
    height: '6%',
    backgroundColor: '#3949AB',
    borderRadius: 10,
    textAlign: 'center',
    textAlignVertical: 'center',
    marginTop: 50,
    alignSelf: 'center',
  },
  txt1: {
    color: 'black',
    fontSize: 18,
    marginTop: 30,
    marginStart: 15,
    fontWeight: 'bold',
  },
  txt2: {
    color: 'black',
    minWidth: '43%',
    textAlign: 'left',
    fontWeight: 'bold',
    fontSize: 15,
  },
  EventNameStyl: {
    height: 50,
    margin: 15,
    borderWidth: 1,
    padding: 15,
    paddingStart: -10,
    color: 'black',
    borderTopColor: 'white',
    borderRightColor: 'white',
    borderLeftColor: 'white',
    borderBottomColor: 'gray',
    fontSize: 15,
    marginTop: -5,
  },
  StartDateStyl: {
    height: 50,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    color: 'black',
    borderColor: 'gray',
    fontSize: 15,
    width: '45%',
  },
  EndDateStyl: {
    height: 50,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    color: 'black',
    borderColor: 'gray',
    fontSize: 15,
    width: '45%',
  },
  cardStyl: {
    width: '87%',
    height: 100,
    borderRadius: 10,
    alignSelf: 'center',
    margin: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
  imgStyl: {
    height: 100,
    width: '150%',
    borderRadius: 10,
  },
  iconStyle: {
    alignSelf: 'center',
    marginTop: 10,
  },
  header: {
    backgroundColor: '#FFFFFF',
    shadowColor: '#333333',
    shadowOffset: {width: 0, height: -10},
    shadowRadius: 6,
    shadowOpacity: 0.4,
    paddingTop: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  panelHeader: {
    alignItems: 'center',
  },
  panelHandle: {
    width: 100,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#3949AB',
    marginBottom: 10,
  },
  CameraIconStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlignVertical: 'center',
  },
  GalleryIconStyle: {
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    textAlignVertical: 'center',
  },
  imageThumbnail: {
    height: 100,
    width: '100%',
    borderRadius: 10,
    alignSelf: 'center',
  },
  cardStylEven: {
    borderRadius: 10,
    width: '87%',
    height: 100,
    alignSelf: 'center',
    justifyContent: 'flex-start',
    marginTop: 10,
    flexDirection: 'column',
  },
  cardStylOdd: {
    borderRadius: 10,
    width: '87%',
    height: 100,
    alignSelf: 'center',
    margin: 15,
    marginTop: 10,
    flexDirection: 'row',
  },
});
