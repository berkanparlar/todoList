
import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import { styles } from './style';


const App =() => {
  let initTodoList =[
    {title:"YEMEK", complate:true},
    {title:"YEMEK", complate:true},
    {title:"YEMEK", complate:true},
    {title:"YEMEK", complate:true},
  ];
  const [todoList, setTodoList] = useState(initTodoList);
  const [todoTitle, setTodoTitle] = useState("");
  const addTodoList =()=>{
    let data ={title: todoTitle, complate: false};
    let newList= todoList;
    newList.push(data);
    setTodoList(newList);
    setTodoTitle("");
  };
  const updateTodoList=(todo,index)=>{
    let newList=[];
    todoList.forEach((item,i)=>{
      i==index
        ?newList.push({title:item.title,complate:!item.complate})
        :newList.push(item)
    });
    setTodoList(newList);
    setTodoTitle("");
  };
  const deleteTodoList=(todo,index)=>{
    let newList=[];
    todoList.map((item,i)=>{
      if(i!=index){
        newList.push(item);
      }
    });
    setTodoList(newList);
    setTodoTitle("");
  }
  return (
    <SafeAreaView style={styles.container}>
      <TextInput style={styles.textInput}
      value={todoTitle}
      onChangeText={value=>
      setTodoTitle(value)}
      ></TextInput>
    <ScrollView style={styles.scroolAction}>
      {todoList.map((todo,index)=>(
      <TouchableOpacity 
      key={index.toString()}
      onPress={()=>{
        updateTodoList(todo,index);
      }}
      onLongPress={()=>{
        deleteTodoList(todo,index);
      }}
      style={todo.complate?styles.todoAction:styles.todoUnAction}>
        <Text>{todo.title}</Text>
      </TouchableOpacity>
      ))}    
    </ScrollView>
      <TouchableOpacity 
      onPress={()=>addTodoList()}
      style={styles.buttonAction}><Text>+</Text></TouchableOpacity>
    </SafeAreaView>
  );
};



export default App;
