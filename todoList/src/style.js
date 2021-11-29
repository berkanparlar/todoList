import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container:{
    flex:1,
    alignItems:"center",
    },
    textInput:{
        width:"90%",
        height:50,
        borderWidth:3,
        borderRadius:10,
        borderColor:"#002",
        margin:10,
    },
    scroolAction:{
        width:"90%",
        marginLeft:15
    
    },
    todoAction:{
        width:"90%",
        height:50,
        backgroundColor:"#18A300",
        marginTop:20,
        
    },
    todoUnAction:{
        width:"90%",
        height:50,
        backgroundColor:"#c00021",
        marginTop:20,
    },
    buttonAction:{
        width:40,
        height:40,
        borderRadius:40,
        backgroundColor:"#4C86A8",
        justifyContent:"center",
        alignItems:"center",
    
    }
});