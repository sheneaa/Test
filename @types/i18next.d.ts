import { resources, defaultNS } from "./i18n";
import en from '@/translations/en.json'
declare module 'i18next'{
    interface CustomTypesOptions {
        resources:{
            defaultNS: 'ns1';
            resources: {
              ns1: typeof en;
            };
        }
    }
}