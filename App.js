import React,{useState, useEffect} from 'react';
import {View, StyleSheet ,Image , TouchableOpacity ,} from 'react-native';
import Torch from 'react-native-torch';
import RNShake from 'react-native-shake'
const App = ()=>{
  const [toggle, setToggle] = useState (true);
  const handleChangeToggle = () =>  setToggle=(oldToggle =>oldToggle);
  
  useEffect(()=>{
    // liga Flash
  Torch.switchState(toggle);

  },[toggle]);

  useEffect(()=>{

    // Quando o celular for chacoalhado ,mudaremos o toggle
    
    const subscription = RNShake.addListener(()=> {
      handleChangeToggle(oldToggle => oldToggle);
    });
    
    return ()=> subscription.remove();
    }, []);
    // Essa funçãp vai ser chamada quando o componentes 
    // for desmontado

    
    
  
  return (
  <View style = { toggle ? style.containerLigth : style.container}>
      <TouchableOpacity onPress = { handleChangeToggle}
    >
    <Image
    style={toggle ? style.lightingOn : style.lightingOff}
    source= { toggle ? require ('./assets/eco-light.png'  ) : require ('./assets/eco-light-off.png')}
    />
     <Image
    style = { style.logoDio}
    source= { toggle ? require ('./assets/logo-dio.png'  ) : require ('./assets/logo-dio-white.png')}
    />
         </TouchableOpacity>
    </View>)
};
export default App;''

const style = StyleSheet.create({
  container: { 
    flex: 1,
    backgroundColor:'black',
    alignItems : 'center',
    justifyContent:'center',
    
  },
  containerLigth: {
    
    flex:1,
    backgroundColor:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  lightingOn: {

      resizeMode:'center',
      alignSelf: 'center',
      width:150,
      height:150,
  },
  lightingOff: {
    resizeMode:'center',
    alignSelf: 'center',
    tintColor:'white',
    width:150,
    height:150,
  },
  logoDio: {
    resizeMode:'center',
    alignSelf: 'center',
    width:250,
    height:250,
  },
});