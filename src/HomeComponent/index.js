//React Imports
import React, {useState} from 'react';

//Redux Imports
import {useSelector, useDispatch} from 'react-redux';

//React Native Imports
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  Alert,
  Animated,
  Keyboard,
  ScrollView,
} from 'react-native';
import Swipeable from 'react-native-gesture-handler/Swipeable';

// Styles and Assets
import {styles} from './style';
import {addIcon, trashIcon} from '../Images';

// Actions
import {addTodo, deleteToDo, todoCompleted} from '../Actions';

const HomeScreen = () => {
  const TODOS = useSelector((state) => state);
  const dispatch = useDispatch();

  const [textFieldTxt, setTextFieldTxt] = useState('');

  function handleAddEvent() {
    if (textFieldTxt == '') {
      return Alert.alert(
        'No Input Text Found',
        "'TO DO' can't be empty !",
        [{text: 'OK'}],
        {cancelable: false},
      );
    }
    dispatch(addTodo(textFieldTxt, TODOS.length));
    handleClearEvent();
    Keyboard.dismiss();
  }

  function handleClearEvent() {
    setTextFieldTxt('');
  }

  function SwipeLeftAction() {
    return (
      <TouchableOpacity style={styles.swipeLeftAction}>
        <Animated.Text style={styles.actionTxt}>Delete</Animated.Text>
      </TouchableOpacity>
    );
  }

  return (
    <>
      <Text style={styles.headerTxt}> TO DO LIST - REDUX</Text>
      <View style={styles.headerView}>
        <TextInput
          placeholder="Start Typing Here ..."
          style={styles.txtInput}
          value={textFieldTxt}
          onChangeText={(txt) => setTextFieldTxt(txt)}
        />
        <TouchableOpacity onPress={handleClearEvent}>
          <Text style={styles.clearBtn}>Clear</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleAddEvent}>
          <Image source={addIcon} style={styles.addBtn} />
        </TouchableOpacity>
      </View>

      {TODOS.length > 0 ? (
        <ScrollView style={styles.scrollView}>
          <View style={styles.toDosView}>
            {TODOS.map((eachItem, idx) => (
              <Swipeable
                friction={2}
                key={idx}
                renderRightActions={SwipeLeftAction}
                onSwipeableRightOpen={() => dispatch(deleteToDo(eachItem.id))}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    onPress={() => dispatch(todoCompleted(eachItem.id))}>
                    <Text
                      numberOfLines={5}
                      style={
                        eachItem.isCompleted
                          ? styles.completedToDos
                          : styles.pendingToDos
                      }>
                      {eachItem.item}
                    </Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={{alignSelf: 'center'}}
                    onPress={() => dispatch(deleteToDo(eachItem.id))}>
                    <Image source={trashIcon} style={styles.trashIcon} />
                  </TouchableOpacity>
                </View>
              </Swipeable>
            ))}
          </View>
        </ScrollView>
      ) : (
        <Text style={styles.noTodoTxt} numberOfLines={2}>
          No TODO'S are available for now, Start typing to add a new one.
        </Text>
      )}
    </>
  );
};

export default HomeScreen;
