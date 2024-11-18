import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

type Props = {
    name: string
}

export default function Header({ name }: Props) {
    return (
        <View className='w-full bg-[#5A55FD] py-5 pl-5 pr-6 flex flex-row justify-between items-center'>
            <Text className='text-white text-xl'>{name}</Text>
            <TouchableOpacity>
                <Image
                    source={require('../assets/icons/Chat.png')}
                    className='h-5 w-5'
                />
            </TouchableOpacity>
        </View>
    );
}
