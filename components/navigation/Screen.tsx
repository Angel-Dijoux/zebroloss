import React, { PropsWithChildren } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import { Edge } from "react-native-safe-area-context";

import { SafeView } from "./SafeView";
import { StyleSheet, View } from "react-native";

type ScreenProps = {
  edges?: Edge[];
  shouldSkipMargins?: boolean;
  isScrollable?: boolean;
};

const Screen = ({
  children,
  edges,
  shouldSkipMargins = false,
  isScrollable = true,
}: Readonly<PropsWithChildren<ScreenProps>>) => {
  const Content = (
    <View style={[styles.container, shouldSkipMargins && styles.noMargin]}>
      {children}
    </View>
  );

  return (
    <SafeView edges={edges}>
      {isScrollable ? (
        <KeyboardAwareScrollView>{Content}</KeyboardAwareScrollView>
      ) : (
        <>{Content}</>
      )}
    </SafeView>
  );
};

export { Screen };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
  },
  noMargin: {
    paddingHorizontal: 0,
  },
});
