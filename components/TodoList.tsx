import ParallaxScrollView from "@/components/ParallaxScrollView";
import {IconSymbol} from "@/components/ui/IconSymbol";
import {ThemedView} from "@/components/ThemedView";
import {ThemedText} from "@/components/ThemedText";
// import {extendedClient} from "@/prisma/db-module";
import {StyleSheet} from "react-native";

export default function TodoList() {

  // const todos = extendedClient.todo.useFindMany({});
  // console.dir(todos)

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Todos</ThemedText>
      </ThemedView>
      <ThemedText>abcccc</ThemedText>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
