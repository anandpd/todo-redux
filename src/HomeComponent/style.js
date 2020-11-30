import {StyleSheet} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const IMAGE = {
  dimensions: 20,
};

const COLORS = {
  white: '#fff',
  black: 'black',
  cyan: 'cyan',
  pink: 'pink',
  grey: 'grey',
  red: 'red',
  green: '#23A109',
  lightred: '#FF7979',
  veryLightGrey: '#F4F0EF',
  systemLightGrey: 'lightgrey',
  customLightGrey: '#d3d3d3',
};

export const styles = StyleSheet.create({
  headerView: {
    height: 80,
    backgroundColor: COLORS.customLightGrey,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
  },
  headerTxt: {
    fontSize: 20,
    marginVertical: '5%',
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  txtInput: {
    backgroundColor: COLORS.white,
    marginVertical: '3%',
    height: 50,
    width: '70%',
    borderRadius: 40,
    fontSize: 15,
  },
  clearBtn: {
    fontSize: 12,
    padding: 3,
    borderColor: COLORS.black,
    borderWidth: 0.2,
    borderRadius: 2,
  },
  addBtn: {
    height: IMAGE.dimensions,
    width: IMAGE.dimensions,
  },
  noTodoTxt: {
    fontSize: 20,
    color: COLORS.customLightGrey,
    textAlign: 'center',
    width: '80%',
    alignSelf: 'center',
    marginTop: '40%',
  },
  pendingToDos: {
    fontSize: 20,
    margin: 10,
  },
  completedToDos: {
    fontSize: 20,
    margin: 10,
    // Completed
    textDecorationLine: 'line-through',
    opacity: 0.3,
  },
  trashIcon: {
    height: IMAGE.dimensions,
    width: IMAGE.dimensions,
  },
  toDosView: {
    backgroundColor: COLORS.veryLightGrey,
    width: '90%',
    paddingHorizontal: '3%',
    alignSelf: 'center',
    borderRadius: 10,
  },
  swipeLeftAction: {
    backgroundColor: COLORS.lightred,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 80,
  },
  swipeRightAction: {
    backgroundColor: COLORS.green,
    justifyContent: 'center',
    alignSelf: 'center',
    width: 70,
  },
  actionTxt: {
    fontWeight: 'bold',
    color: COLORS.white,
    fontWeight: '600',
    padding: 20,
  },
  scrollView: {marginTop: '10%'},
});
