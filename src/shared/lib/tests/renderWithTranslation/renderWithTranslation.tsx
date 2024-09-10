// Функция обертка, для оборачивания компонентов для тестирования с переводом i18

import { render } from "@testing-library/react";
import { I18nextProvider } from "react-i18next";
import i18nextForTests from "shared/config/i18n/i18nextForTests";

export function renderWithTranslation(component: React.ReactNode) {
  return render(
    <I18nextProvider i18n={i18nextForTests}>{component}</I18nextProvider>
  );
}
