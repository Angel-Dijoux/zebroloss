import { Image, StyleSheet, Platform, View } from "react-native";
import { ThemedText } from "@/components/ThemedText";
import { Screen } from "@/components/navigation/Screen";
import { FormattedMessage } from "react-intl";
import { ThemedView } from "@/components/ThemedView";

export default function HomeScreen() {
  return (
    <Screen>
      <ThemedText style={{ fontSize: 28, fontWeight: 800, marginTop: 22 }}>
        <FormattedMessage defaultMessage="Visible dans le ciel ce soir" />
      </ThemedText>
      <View
        style={{
          backgroundColor: "#283454",
          opacity: 0.8,
          padding: 4,
          alignSelf: "flex-start",
          borderRadius: 4,
        }}
      >
        <ThemedText>Pluie d'étoiles filantes</ThemedText>
      </View>
      <ThemedView
        style={{ flex: 1, gap: 8, borderRadius: 8, marginVertical: 12 }}
      >
        <Image
          source={{
            uri: "https://cherry.img.pmdstatic.net/fit/https.3A.2F.2Fimg.2Emaxisciences.2Ecom.2Fs3.2Ffrgsd.2F1024.2Fastronomie.2Fdefault_2020-04-21_e745f801-a52c-4ee6-99d3-40deed9fd61f.2Ejpeg/640x360/quality/80/une-pluie-d-etoiles-filantes-impressionnante-a-ne-pas-manquer-cette-nuit.jpg",
          }}
          style={{ width: "100%", borderRadius: 8 }}
          height={146}
        />
        <View style={{ paddingVertical: 8, paddingHorizontal: 12 }}>
          <ThemedText>Ce soir - 00h30 en8direction de l'Est</ThemedText>
        </View>
      </ThemedView>
      <ThemedText style={{ fontSize: 28, fontWeight: 800, marginTop: 22 }}>
        <FormattedMessage defaultMessage="Prochain événements" />
      </ThemedText>
      <View
        style={{
          backgroundColor: "#283454",
          opacity: 0.8,
          padding: 4,
          alignSelf: "flex-start",
          borderRadius: 4,
        }}
      >
        <ThemedText>Eclipse solaire</ThemedText>
      </View>
      <ThemedView
        style={{ flex: 1, gap: 8, borderRadius: 8, marginVertical: 12 }}
      >
        <Image
          source={{
            uri: "https://journalmetro.com/wp-content/uploads/2017/08/eclipse3.jpeg?w=980",
          }}
          style={{ width: "100%", borderRadius: 8 }}
          height={146}
        />
        <View style={{ paddingVertical: 8, paddingHorizontal: 12 }}>
          <ThemedText>Lundi 22 Fev - 22h03</ThemedText>
        </View>
      </ThemedView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
