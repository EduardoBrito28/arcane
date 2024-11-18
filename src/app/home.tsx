import Header from '@/components/header';
import React from 'react';
import { Image, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Home() {
  return (
    <SafeAreaView className='flex-1 w-full flex flex-col'>
      <Header name='Houseman' />
      <View className='w-full p-5 flex flex-col'>
        <Text className='text-3xl font-bold'>Olá Eduardo</Text>
        <Text className='text-gray-700'>Seja Bem-vindo!</Text>
      </View>
      <View className='w-full px-5 flex flex-col gap-3'>

        <View className='w-full gap-3 flex flex-row justify-between items-center'>
          <View className='flex-1 flex flex-row items-center justify-between border border-[#D5D9FE] py-5 px-3 rounded-md'>
            <View className='flex flex-col'>
              <Text className='text-lg text-[#5A55FD] font-bold'>AOA574.200</Text>
              <Text className='text-gray-600 text-sm'>Total Ganho</Text>
            </View>
            <View>
              <Image
                source={require('../assets/icons/Earning.png')}
                className='h-12 w-12'
              />
            </View>
          </View>


          <View className='flex-1 flex flex-row items-center justify-between border border-[#D5D9FE] py-5 px-3 rounded-md'>
            <View className='flex flex-col'>
              <Text className='text-lg text-[#5A55FD] font-bold'>746</Text>
              <Text className='text-gray-600 text-sm'>Serviços Feitos</Text>
            </View>
            <View>
              <Image
                source={require('../assets/icons/Total.png')}
                className='h-12 w-12'
              />
            </View>
          </View>
        </View>

        <View className='w-full gap-3 flex flex-row justify-between items-center'>
          <View className='flex-1 flex flex-row items-center justify-between border border-[#D5D9FE] py-5 px-3 rounded-md'>
            <View className='flex flex-col'>
              <Text className='text-lg text-[#5A55FD] font-bold'>15</Text>
              <Text className='text-gray-600 text-sm'>Serviços Pendentes</Text>
            </View>
            <View>
              <Image
                source={require('../assets/icons/Total.png')}
                className='h-12 w-12'
              />
            </View>
          </View>


          <View className='flex-1 flex flex-row items-center justify-between border border-[#D5D9FE] py-5 px-3 rounded-md'>
            <View className='flex flex-col'>
              <Text className='text-lg text-[#5A55FD] font-bold'>2</Text>
              <Text className='text-gray-600 text-sm'>Serviços de Hoje</Text>
            </View>
            <View>
              <Image
                source={require('../assets/icons/Total.png')}
                className='h-12 w-12'
              />
            </View>
          </View>
        </View>


      </View>
    </SafeAreaView>
  )
}
