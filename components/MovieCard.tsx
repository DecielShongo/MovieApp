import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import {Link} from "expo-router";
import {icons} from "@/constants/icons";

const MovieCard = ({id, title, poster_path, vote_average, release_date, vote_count} : Movie) => {
    return (
        <Link href={`/movie/${id}`} asChild>
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{
                    uri : poster_path
                        ? `https://image.tmdb.org/t/p/w500/${poster_path}`
                        : `https://placehold.to/600x400/1a1a1a/ffffff.png`
                    }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />
                <Text className="text-white text-sm font-extrabold" numberOfLines={1}>{title}</Text>
                <View className="flex-row items-center justify-between">
                    <View className="flex-row items-center gap-x-1 justify-start">
                        <Image source={icons.star}/>
                        <Text className="text-xs font-bold uppercase text-white">{Math.round(vote_average/2)}/5</Text>
                    </View>
                    <Text className="text-xs font-bold uppercase text-white">({vote_count})</Text>
                </View>
                <View className="flex-row items-center justify-between">
                    <Text className="text-light-200 text-xs font-bold">{release_date.split("-")[0]}</Text>
                </View>
            </TouchableOpacity>
        </Link>
    );
};

export default Movie