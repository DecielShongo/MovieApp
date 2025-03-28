import React from 'react';
import {View, Text, Image, TextInput} from 'react-native';
import {icons} from "@/constants/icons";

interface Props {
    onPress?: () => void;
    placeholder: string;
}

const SearchBar = ({onPress, placeholder}: Props) => {
    return (
        <View className="flex-row items-center bg-dark-200 rounded-full px-5 py-4">
            <Image source={icons.search} className="size-5" tintColor="#ab8bff" resizeMode="contain"/>
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#a8b5db"
                onPress={onPress}
                onChangeText={()=>{}}
                value=""
                className="bg-dark-200 ml-2 text-white"
            />

        </View>
    );
};

export default SearchBar;