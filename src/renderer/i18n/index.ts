import { createI18n } from 'vue-i18n';

import { arSA } from './ar-SA';
import { caES } from './ca-ES';
import { csCZ } from './cs-CZ';
import { deDE } from './de-DE';
import { enUS } from './en-US';
import { esES } from './es-ES';
import { frFR } from './fr-FR';
import { huHU } from './hu-HU';
import { idID } from './id-ID';
import { itIT } from './it-IT';
import { jaJP } from './ja-JP';
import { koKR } from './ko-KR';
import { nlNL } from './nl-NL';
import { ptBR } from './pt-BR';
import { ruRU } from './ru-RU';
import { viVN } from './vi-VN';
import { zhCN } from './zh-CN';
const messages = {
   'en-US': enUS,
   'it-IT': itIT,
   'ar-SA': arSA,
   'es-ES': esES,
   'fr-FR': frFR,
   'pt-BR': ptBR,
   'de-DE': deDE,
   'vi-VN': viVN,
   'ja-JP': jaJP,
   'zh-CN': zhCN,
   'ru-RU': ruRU,
   'id-ID': idID,
   'ko-KR': koKR,
   'nl-NL': nlNL,
   'ca-ES': caES,
   'cs-CZ': csCZ,
   'hu-HU': huHU
};

type NestedPartial<T> = {
   [K in keyof T]?: T[K] extends Array<infer R> ? Array<NestedPartial<R>> : (T[K] extends unknown ? unknown : NestedPartial<T[K]>)
};

export type MessageSchema = typeof enUS
export type AvailableLocale = keyof typeof messages

const i18n = createI18n<[NestedPartial<MessageSchema>], AvailableLocale>({
   fallbackLocale: 'en-US',
   allowComposition: true,
   messages
});

export { i18n };
