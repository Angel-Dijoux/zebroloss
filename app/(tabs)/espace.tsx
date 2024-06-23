import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Screen } from "@/components/navigation/Screen";
import { FlashList, ListRenderItem } from "@shopify/flash-list";
import { FormattedMessage } from "react-intl";
import { Image, View } from "react-native";

type Espace = {
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
};

const DATA: Espace[] = [
  {
    title: "Nouveau trou noir detecter",
    shortDescription: "Un trou noir detecter à coter de....",
    description: "...",
    image:
      "https://cdn.mos.cms.futurecdn.net/eC6Q4Civ8TurCZbYA5wNmm-650-80.jpg.webp",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Nouveau trou noir detecter",
    shortDescription: "Un trou noir detecter à coter de....",
    description: "...",
    image:
      "https://cdn.mos.cms.futurecdn.net/eC6Q4Civ8TurCZbYA5wNmm-650-80.jpg.webp",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Nouveau trou noir detecter",
    shortDescription: "Un trou noir detecter à coter de....",
    description: "...",
    image:
      "https://cdn.mos.cms.futurecdn.net/eC6Q4Civ8TurCZbYA5wNmm-650-80.jpg.webp",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Nouveau trou noir detecter",
    shortDescription: "Un trou noir detecter à coter de....",
    description: "...",
    image:
      "https://cdn.mos.cms.futurecdn.net/eC6Q4Civ8TurCZbYA5wNmm-650-80.jpg.webp",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    title: "Nouveau trou noir detecter",
    shortDescription: "Un trou noir detecter à coter de....",
    description: "...",
    image:
      "https://cdn.mos.cms.futurecdn.net/eC6Q4Civ8TurCZbYA5wNmm-650-80.jpg.webp",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default function Espace() {
  return (
    <Screen edges={["top"]}>
      <View style={{ marginTop: 22 }}>
        <ThemedText style={{ fontSize: 28, fontWeight: 800 }}>
          <FormattedMessage defaultMessage="Les actus de l'espace 🌌" />
        </ThemedText>
      </View>
      <FlashList
        data={DATA}
        renderItem={SpaceNewsItem}
        estimatedItemSize={200}
      />
    </Screen>
  );
}

const SpaceNewsItem: ListRenderItem<Espace> = ({ item }) => {
  return (
    <ThemedView
      style={{ borderRadius: 8, padding: 12, gap: 4, marginVertical: 8 }}
    >
      <ThemedText
        style={{
          fontWeight: 800,
          fontSize: 22,
          textDecorationLine: "underline",
        }}
      >
        {item.title}
      </ThemedText>
      <ThemedText
        style={{ fontSize: 12, fontWeight: 200, margin: 0, padding: 0 }}
      >
        {item.updatedAt.toString()}
      </ThemedText>
      <ThemedText style={{ fontWeight: 200 }}>
        {item.shortDescription}
      </ThemedText>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          marginTop: 4,
        }}
      >
        <Image
          source={{ uri: item.image }}
          style={{ width: "100%", height: 124, borderRadius: 4 }}
        />
      </View>
    </ThemedView>
  );
};
