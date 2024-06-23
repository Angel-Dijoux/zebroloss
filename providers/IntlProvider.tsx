import { PropsWithChildren } from "react";
import { IntlProvider as BaseIntlProvider } from "react-intl";

export function IntlProvider({ children }: Readonly<PropsWithChildren>) {
  return (
    <BaseIntlProvider locale="fr" defaultLocale="fr">
      {children}
    </BaseIntlProvider>
  );
}
