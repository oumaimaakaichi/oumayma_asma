import React , {useState , useEffect} from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Platform,
  StyleSheet,
  StatusBar,
  ScrollView,
  Alert,
  Image,
  Dimensions
} from "react-native";
const {width:WIDTH} =Dimensions.get('window')
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import AsyncStorage from "@react-native-async-storage/async-storage";
 import login from '../../assets/lo.png'
import { useTheme } from "react-native-paper";
import axios from "axios";
import { storeClientData  } from "../../utils/AsyncStorageClient";

const InscriC = ({ navigation }) => {
  
  const [data, setData] = React.useState({
    
    check_textInputChange: false,
    secureTextEntry: true,
    isValidUser: true,
    isValidPassword: true,
  });

  const { colors } = useTheme();

  

 
  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };

  const handleValidUser = (val) => {
    if (val.trim().length >= 4) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };
  const handleValidCin = (val) => {
    if (val.trim().length = 8) {
      setData({
        ...data,
        isValidUser: true,
      });
    } else {
      setData({
        ...data,
        isValidUser: false,
      });
    }
  };

  const [cin, setCin] = useState('');
  const [nom, setNom] = useState('');
  const [prenom, setPrenom] = useState('');
  const [Num_tel, setNumero] = useState('');
  const [email, setEmail] = useState('');
  const [Adr, setUsename] = useState('');
const [MPass, setPassword] = useState('');

async function AddClient(){

  
    fetch("http://192.168.43.230:3001/utilisateur/register" , {
        method: 'POST',
        headers:{
            "Content-Type" : 'application/json',
           
        },
        body:JSON.stringify({
          cin:cin,
          nom:nom,
          prenom:prenom,
          Num_tel:Num_tel,
          emaill:email,
          Adr:Adr,
          MPass:MPass,
          role:'client'
        }),
    }).then(res=>res.json())
    .then(async data=>{
      if(data){
       if(data.Adr!='' && data.MPass!=''){
        navigation.navigate('LoginC')
      }}
      
    })
    .catch(err=>{
      console.log(err)
    });
   
}
  return (
    <View style={styles.container}>
    <ScrollView   showsVerticalScrollIndicator={false}
    >
          
      <StatusBar backgroundColor="white"  />
     
      <Text style={styles.text_header}>Inscription</Text>
      <Animatable.View
        animation="fadeInUpBig"

        style={[
          styles.footer,
          {
            backgroundColor: colors.background,
            marginLeft:10,
            marginRight:10
          },
        ]}
      >
<Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              fontSize:15
            },
          ]}
        >
          Cin 
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="cin du client"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setCin(val)}
         
          />
         
        </View>
        
<Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              fontSize:15,
              marginTop: 35,
              
            },
          ]}
        >
          Nom
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="nom du client"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setNom(val)}
           
          />
         
        </View>
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              fontSize:15,
              marginTop: 35,
              
            },
          ]}
        >
          Prenom
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="prenom du client"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setPrenom(val)}
           
          />
         
        </View>
       
        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              fontSize:15,
              marginTop: 35,
              
            },
          ]}
        >
          Email
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={22} />
          <TextInput
            placeholder="email du client"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setEmail(val)}
           
          />
         
        </View>


        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              fontSize:15,
              marginTop: 35,
              
            },
          ]}
        >
          Numéro du téléphone
        </Text>
        <View style={styles.action}>
          <FontAwesome name="phone" color={colors.text} size={22} />
          <TextInput
            placeholder="tel du client"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setNumero(val)}
           
          />
         
        </View>
        




        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              fontSize:15,
              marginTop: 35,
            },
          ]}
        >
          Username 
        </Text>
        <View style={styles.action}>
          <FontAwesome name="user-o" color={colors.text} size={20} />
          <TextInput
            placeholder="username"
            placeholderTextColor="#666666"
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setUsename(val)}
            onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}
          />
          {data.check_textInputChange ? (
            <Animatable.View animation="bounceIn">
              <Feather name="check-circle" color="green" size={20} />
            </Animatable.View>
          ) : null}
        </View>
        {data.isValidUser ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Username doit contenir minimum 6 caractéres
            </Text>
          </Animatable.View>
        )}

        <Text
          style={[
            styles.text_footer,
            {
              color: colors.text,
              marginTop: 35,
              fontSize:15
            },
            
          ]}
        >
          Mot de passe 
        </Text>
        <View style={styles.action}>
          <Feather name="lock" color={colors.text} size={20} />
          <TextInput
            placeholder="Mot de passe"
            placeholderTextColor="#666666"
            secureTextEntry={data.secureTextEntry ? true : false}
            style={[
              styles.textInput,
              {
                color: colors.text,
              },
            ]}
            autoCapitalize="none"
            onChangeText={(val) => setPassword(val)}
          />
          <TouchableOpacity onPress={updateSecureTextEntry}>
            {data.secureTextEntry ? (
              <Feather name="eye-off" color="grey" size={20} />
            ) : (
              <Feather name="eye" color="grey" size={20} />
            )}
          </TouchableOpacity>
        </View>
        {data.isValidPassword ? null : (
          <Animatable.View animation="fadeInLeft" duration={500}>
            <Text style={styles.errorMsg}>
              Password doit contenir minimum 6 caractéres
            </Text>
          </Animatable.View>
        )}

        
        <View style={styles.button}>
          <TouchableOpacity
            style={styles.signIn}
            onPress={() => {
                AddClient();
            }}
          >
            <LinearGradient
              colors={["#4A919E", "#4A919E"]}
              style={styles.signIn}
            >
              <Text
                style={[
                  styles.textSign,
                  {
                    color: "#fff",
                  },
                ]}
              >
                Sign up
              </Text>
            </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity
           onPress={() => navigation.navigate('LoginC')}
            style={[
              styles.signIn,
              {
                borderColor: "#4A919E",
                borderWidth: 1,
                marginTop: 30,
                marginBottom:50
              },
            ]}
          >
            <Text
              style={[
                styles.textSign,
                {
                  color: "#4A919E",

                },
              ]}
            >
              Sign In
            </Text>
          </TouchableOpacity>
        </View>
      </Animatable.View>
      </ScrollView>
    </View>
  );
};

export default InscriC;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#4A919E",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 100,
    paddingBottom: 40,
    marginTop:10
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  text_header: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    alignSelf:'center',
    marginBottom:40,
    marginTop:20
  },
  text_footer: {
    color: "#4A919E",
    fontSize: 18,
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#4A919E",
    paddingBottom: 5,
  },
  actionError: {
    flexDirection: "row",
    marginTop: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#4A919E",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 10,
    color: "#4A919E",
  },
  errorMsg: {
    color: "#FF0000",
    fontSize: 12,
  },
  button: {
    alignItems: "center",
    marginTop: 40,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
  },
  textSign: {
    fontSize: 18,
    fontWeight: "bold",
  },

});