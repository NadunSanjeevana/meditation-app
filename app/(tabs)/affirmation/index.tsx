import { View, Text, ScrollView } from "react-native";
import React from "react";
import AppGradient from "@/components/AppGradient";
import AFFIRMATION_GALLERY from "@/constants/affirmation-gallery";
import GuidedAffirmationGallery from "@/components/GuidedAffirmationGallery";

const Affirmation = () => {
  return (
    <View className="flex-1">
      <AppGradient colors={["#2e1f58", "#54426b", "#a790af"]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text className="text-zinc-50 text-3xl font-bold">
            Change your beliefs with Affirmation
          </Text>
          <View>
            {AFFIRMATION_GALLERY.map((g) => {
              return (
                <GuidedAffirmationGallery
                  key={g.title}
                  title={g.title}
                  previews={g.data}
                />
              );
            })}
          </View>
        </ScrollView>
      </AppGradient>
    </View>
  );
};

export default Affirmation;