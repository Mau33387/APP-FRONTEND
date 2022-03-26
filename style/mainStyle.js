

import { StyleSheet} from 'react-native';

const style = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccc',
      alignItems: 'center',
      justifyContent: 'center'
      
     },
     button: {
      width: "100%",
      marginTop: 10,
    

    },
    maskedInput:{
      flexGrow: 1,
      height: 40,
      fontSize:18,
      borderBottomColor:'#999',
      borderBottomWidth: 1,
      borderStyle:"solid",
      alignSelf:"flex-start"

  
          
    },
    containerMask:{
    flexDirection:"row",
    marginBottom: 15,
    marginLeft:15,
    marginRight:15
    },
    
    errorMessage:{
     alignSelf:"flex-start",
     marginLeft:10,
     color:"#f00",
     fontSize:12

    }
    
   });
   export default style





