import {Dimensions, KeyboardAvoidingView, Platform, ScrollView, View, ImageBackground, Image} from 'react-native'
import React from 'react'
import {Slot} from "expo-router";
import {images} from "@/constants";
import CustomInput from "@/components/CustomInput";
import CustomButton from "@/components/CustomButton";

export default function AuthLayout() {
    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
            <ScrollView className="bg-white h-full" keyboardShouldPersistTaps="handled">

            <View className="w-full relative" style={{height: Dimensions.get("screen").height / 2.25}}>
                <ImageBackground source={images.loginGraphic} className={"size-full rounded-b-lg"} resizeMode="stretch" />
                <Image source={images.logo} className={"self-center size-48 absolute -bottom-16 z-10"} />
            </View>
                <CustomInput
                placeholder="Enter your email"
                value={""}
                onChangeText={(text) => {console.log({text})}}
                label={"Email"}
                keyboardType={"email-address"}
                />
                <CustomButton />
            </ScrollView>
            <Slot />
        </KeyboardAvoidingView>
    )
}
