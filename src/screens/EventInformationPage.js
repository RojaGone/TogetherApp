import React from 'react';
import {View, Text, StyleSheet, TextInput, Switch} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {Card} from 'react-native-shadow-cards';
import SwitchSelector from 'react-native-switch-selector';
import Icon from 'react-native-vector-icons/AntDesign';

const EventInformationPage = () => {
  const nav = useNavigation();
  const [text, onChangeText] = React.useState('');
  const [MultiText, onChangeMultiText] = React.useState('');
  const [startDateText, onChangeStartDateText] = React.useState('');
  const [endDateText, onChangeEndDateText] = React.useState('');
  const [isEnabled, setIsEnabled] = React.useState(false);
  // const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [showhidePrivateEvent, setShowHidePrivateEvent] = React.useState(false);
  const [showhidePaidEvent, setShowHidePaidEvent] = React.useState(false);
  const [isChecked1, setIsChecked1] = React.useState(true);
  const [isChecked2, setIsChecked2] = React.useState(true);
  const [isChecked3, setIsChecked3] = React.useState(true);

  const NextBtn = () => {
    nav.navigate('SeatingArrangementPage1');
  };
  const IsCheckedFun1 = () => {
    isChecked1==false?setIsChecked1(true):setIsChecked1(false)
  }
  const IsCheckedFun2 = () => {
    isChecked2==false?setIsChecked2(true):setIsChecked2(false)
  }
  const IsCheckedFun3 = () => {
    isChecked3==false?setIsChecked3(true):setIsChecked3(false)
  }

  return (
    <View style={styles.Container}>
      <Text style={styles.txt1}>Event Name</Text>
      <TextInput
        style={styles.EventNameStyl}
        onChangeText={onChangeText}
        value={text}
        placeholder="Enter your event name"
        placeholderTextColor={'gray'}
      />
      <Text style={styles.txt2}>Description</Text>

      <Card
        style={{
          width: '93%',
          marginStart: 15,
          height: 120,
          marginTop: 20,
          borderRadius: 10,
        }}>
        <TextInput
          style={styles.DescStyl}
          onChangeText={onChangeMultiText}
          value={MultiText}
          placeholder="Lorem lpsum is simply dummy text of the printing and typesetting industry.Lorem lpsum has been the industry's standard dummy text ever since."
          placeholderTextColor={'gray'}
          multiline={true}
          textAlignVertical={'top'}
        />
      </Card>
      <View style={styles.Container1}>
        <Text
          style={{
            color: 'black',
            minWidth: '50%',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          Start date
        </Text>
        <Text
          style={{
            color: 'black',
            minWidth: '50%',
            textAlign: 'center',
            fontWeight: 'bold',
            fontSize: 15,
          }}>
          End date
        </Text>
      </View>
      <View style={styles.Container2}>
        <TextInput
          style={styles.StartDateStyl}
          onChangeText={onChangeStartDateText}
          value={startDateText}
          placeholder="10May2022 14:23PM"
          placeholderTextColor={'black'}
        />
        <TextInput
          style={styles.EndDateStyl}
          onChangeText={onChangeEndDateText}
          value={endDateText}
          placeholder="15May2022 14:23PM"
          placeholderTextColor={'black'}
        />
      </View>
      <View style={styles.Container3}>
        <Text style={styles.privateEventTxtStyl}>Private Event</Text>
        {/* <Switch 
            trackColor={{ false: "#767577", true: "#5ac74e" }}
            thumbColor={isEnabled ? "#FFFFFF" : "#FFFFFF"}
            ios_backgroundColor="#3e3e3e"
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 1.5 }, { scaleY: 1.5 }] }}
          /> */}
        <View style={{width: '11%', marginTop: 10, marginEnd: 15}}>
          <SwitchSelector
            initial={0}
            selectedColor="#964e4e"
            fontSize={15}
            backgroundColor={showhidePrivateEvent ? "#5ac74e" : "#767577"}
            buttonColor="#FFFFFF"
            height={23}
            hasPadding
            onPress={value => setShowHidePrivateEvent(value)}
            options={[
              {label: '', value: false},
              {label: '', value: true},
            ]}
          />
        </View>
      </View>
      <View style={styles.Container7}>
        <Text style={styles.privateEventTxtStyl}>Paid Event</Text>
        <View style={{width: '11%', marginTop: 10, marginEnd: 15}}>
          <SwitchSelector
            initial={0}
            selectedColor="#964e4e"
            fontSize={15}
            backgroundColor={showhidePaidEvent ? "#5ac74e" : "#767577"}
            buttonColor="#FFFFFF"
            height={23}
            hasPadding
            onPress={value => setShowHidePaidEvent(value)}
            options={[
              {label: '', value: false},
              {label: '', value: true},
            ]}
          />
        </View>
      </View>
        <Text style={styles.paymentTypeStyl}>Payment Types</Text>
        <View style={styles.Container4}>
        <Icon
          name={isChecked1?"checkcircle":"checkcircleo"}
          size={23}
          color="#3949AB"
          style={styles.iconStyle}
          onPress={IsCheckedFun1}
        />
        <Text style={{color: 'black', marginTop: 10,fontSize: 15, marginStart: 10}}>Sell Tickets</Text>
        </View>
        <View style={styles.Container5}>
        <Icon
          name={isChecked2?"checkcircle":"checkcircleo"}
          size={23}
          color="#3949AB"
          style={styles.iconStyle}
          onPress={IsCheckedFun2}
        />
        <Text style={{color: 'black', marginTop: 10,fontSize: 15, marginStart: 10}}>Accept Gifts</Text>
        </View>
        <View style={styles.Container6}>
        <Icon
          name={isChecked3?"checkcircle":"checkcircleo"}
          size={23}
          color="#3949AB"
          style={styles.iconStyle}
          onPress={IsCheckedFun3}
        />
        <Text style={{color: 'black', marginTop: 10,fontSize: 15, marginStart: 10}}>Accept Donations</Text>
        </View>
      <View style={styles.Btn}>
        <Text
          style={{
            textAlign: 'center',
            textAlignVertical: 'center',
            fontSize: 20,
            color: 'white'     
          }}
          onPress={NextBtn}>
          Next
        </Text>
      </View>
    </View>
  );
};

export default EventInformationPage;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: 'white',
  },
  Container1: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginTop: 30,
  },
  Container2: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop:10,
  },
  Container3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20
  },
  Container4: {
    flexDirection: 'row'
  },
  Container5: {
    flexDirection: 'row'
  },
  Container6: {
    flexDirection: 'row'
  },
  Container7: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  Btn: {
    justifyContent:'center',
    alignSelf: 'center',
    width: '60%',
    height: '6%',
    backgroundColor: '#3949AB',
    borderRadius: 10,
    marginTop: 40,
    textAlignVertical: 'center',
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
    marginStart: 15,
    fontWeight: 'bold',
    fontSize: 18,
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
  DescStyl: {
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 10,
    minHeight: 120,
    color: 'black',
    borderWidth: 1,
    borderColor: 'gray',
    paddingLeft: 10,
    paddingRight: 10,
  },
  StartDateStyl: {
    height: 50, 
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    color: 'black',
    borderColor: 'gray',
    fontSize: 15,
  },
  EndDateStyl: {
    height: 50,
    borderWidth: 1,
    padding: 8,
    borderRadius: 5,
    color: 'black',
    borderColor: 'gray',
    fontSize: 15,
  },
  privateEventTxtStyl: {
    color: 'black',
    marginTop: 10,
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 15,
  },
  paymentTypeStyl: {
    color: 'black',
    fontSize: 15,
    fontWeight: 'bold',
    marginStart: 15,
    marginTop: 25
  },
  iconStyle: {
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginStart: 10,
    marginTop: 10,
  },
});
