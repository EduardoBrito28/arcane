import { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useRouter } from 'expo-router';
import React from 'react';

export default function Login() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const router = useRouter();

  const handleLogin = () => {
    // Prossiga com o login
    router.push('/home');
  };


  return (
    <SafeAreaView className="h-full justify-center items-center bg-white w-full">

      <View className='w-full h-full text-center flex flex-col gap-0 justify-start '>

        <View className="w-full flex flex-col items-center">
          <Image
            source={require('../assets/login-image.png')}
            className='w-full h-64 max-h-64 object-contain'
          />
        </View>

        <View className='flex flex-col w-full items-center justify-center gap-2 p-5 mt-10'>

          <View className='w-full flex flex-col pb-5'>
            <Text className='w-full text-2xl font-black'>Welcome Back</Text>
            <Text className='w-full text-base text-gray-500'>Enter your credentials for login</Text>
          </View>

          {/* Input para Email */}
          <View className='flex flex-row items-center bg-[#D5D9FE] rounded-md px-4 py-2 w-full'>
            <Icon name="email-outline" size={20} color="#666" className='mr-3' />
            <TextInput
              className='flex-1 h-12 text-[16px]'
              placeholder="Email Address"
              value={email}
              onChangeText={setEmail}
              keyboardType="email-address"
              autoCapitalize="none"
              accessible
              accessibilityLabel="Campo de Email"
            />
          </View>

          {/* Input para Senha */}
          <View className='flex flex-row items-center bg-[#D5D9FE] rounded-md px-4 py-2 w-full'>
            <Icon name="lock-outline" size={20} color="#666" className='mr-3' />
            <TextInput
              className='flex-1 h-12 text-[16px]'
              placeholder="Password"
              value={password}
              onChangeText={setPassword}
              secureTextEntry={!isPasswordVisible}
            />

            {/* Botão para Mostrar ou Esconder Senha */}
            <TouchableOpacity onPress={() => setPasswordVisible(!isPasswordVisible)}>
              <Icon
                name={isPasswordVisible ? "eye-outline" : "eye-off-outline"}
                size={20}
                color="#666"
              />
            </TouchableOpacity>
          </View>

          {/* Botão para Login */}
          <TouchableOpacity onPress={handleLogin} className='w-full py-5 mt-2 bg-[#5A55FD] flex items-center justify-center rounded-md'>
            <Text className='text-white font-extrabold text-[15px]'>Login Now</Text>
          </TouchableOpacity>

          {/* Botão para Lembrar Password */}
          <TouchableOpacity className='w-full flex items-center justify-center mt-5'>
            <Text className='text-[#5A55FD] font-extrabold'>Forgot Password?</Text>
          </TouchableOpacity>
        </View>

        {/* Botão para ir a tela de cadastrar */}
        <View className="w-full flex flex-row justify-center items-center mt-4">
          <Text className="text-gray-500">Don't have an account? </Text>
          <TouchableOpacity>
            <Text className="text-[#5A55FD] font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>

      </View>
    </SafeAreaView>
  )
}
