import { Text, View, StyleSheet } from 'react-native';

// You can import supported modules from npm
import { Card } from 'react-native-paper';

// or any files within the Snack
import AssetExample from './components/AssetExample';

export default function App() {
  return (
   <View style={css.container} >

   

   </View>
  );
}

const css = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // alinhamento vertical
    backgroundColor: '#F4E5E5',
    
  },
  box:{
    //backgroundColor: '#F0F',
    marginBottom:5,
    height:100,
    justifyContent: 'center',
    alignItems:'center',
  },
  titulos:{
    fontSize:25,
    fontFamily:'Open Sans',
    fontWeight:'bold',
    textAlign:'center'
  },
  linha:{
//backgroundColor: '#F0F',
flexDirection:'row',


  },
  dia:{
    height:50,
    width:'12.5%',
    //borderWidth:1,
     justifyContent: 'center',
    alignItems:'center',
  },
  
});
