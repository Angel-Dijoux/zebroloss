import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Image, StyleSheet, Text } from "react-native";

export default function Ciel() {
  return (
    <ParallaxScrollView
      headerImage={
        <Image
          source={{
            uri: "https://cdn.mos.cms.futurecdn.net/eC6Q4Civ8TurCZbYA5wNmm-650-80.jpg",
          }}
          style={styles.headerImage}
        />
      }
      headerBackgroundColor={{ light: "#D0D0D0", dark: "#353636" }}
    >
      <ThemedView style={styles.contentContainer}>
        <ThemedText style={styles.title}>Lorem Ipsum Title</ThemedText>
        <ThemedText style={styles.date}>June 23, 2024</ThemedText>
        <ThemedText style={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Aenean eget velit sit
          amet quam efficitur iaculis. Integer sit amet augue nec justo ultrices
          facilisis. Nam sit amet ultricies libero. Sed consectetur felis nec
          nisi dictum, at tempor est vulputate. Integer posuere tristique
          sapien, a accumsan velit pretium in. Donec fringilla eros et dui
          varius, a vulputate felis placerat. Quisque viverra, metus sit amet
          consectetur hendrerit, dolor lectus suscipit libero, eget vehicula
          libero arcu sit amet eros. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
          fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. Aenean eget velit
          sit amet quam efficitur iaculis. Integer sit amet augue nec justo
          ultrices facilisis. Nam sit amet ultricies libero. Sed consectetur
          felis nec nisi dictum, at tempor est vulputate. Integer posuere
          tristique sapien, a accumsan velit pretium in. Donec fringilla eros et
          dui varius, a vulputate felis placerat. Quisque viverra, metus sit
          amet consectetur hendrerit, dolor lectus suscipit libero, eget
          vehicula libero arcu sit amet eros.
        </ThemedText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    position: "absolute",
    width: "100%",
    height: "100%",
  },
  contentContainer: {
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 8,
  },
  date: {
    fontSize: 14,
    color: "#808080",
    marginBottom: 16,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
  },
});
