// Angular 2
// rc2 workaround
import { enableDebugTools, disableDebugTools } from '@angular/platform-browser';
import { enableProdMode, ApplicationRef } from '@angular/core';
// Environment Providers
let PROVIDERS: any[] = [
    // common env directives
];

// Angular debug tools in the dev console
// https://github.com/angular/angular/blob/86405345b781a9dc2438c0fbe3e9409245647019/TOOLS_JS.md
let _decorateModuleRef = function identity<T>(value: T): T {
    return value;
};

if ('production' === ENV || 'renderer' === ENV) {
    // Production
    disableDebugTools();
    enableProdMode();

    PROVIDERS = [
        ...PROVIDERS,
        // custom providers in production
    ];
} else {

    _decorateModuleRef = (modRef: any) => {
        const appRef = modRef.injector.get(ApplicationRef);
        const cmpRef = appRef.components[0];

        let _ng = (<any>window).ng;
        enableDebugTools(cmpRef);
        (<any>window).ng.probe = _ng.probe;
        (<any>window).ng.coreTokens = _ng.coreTokens;
        return modRef;
    };

    // Development
    PROVIDERS = [
        ...PROVIDERS,
        // custom providers in development
    ];

}

export const decorateModuleRef = _decorateModuleRef;

export const ENV_PROVIDERS = [
    ...PROVIDERS
];

export const websiteId = 1000001;


export const baseUrl = "https://api.b2bcoin.xyz";
//export const baseUrl = "http://localhost:8080";

export const languages = [
    {value: "af_NA", name: "Afrikaans (Namibia)"},
    {value: "af_ZA", name: "Afrikaans (South Africa)"},
    {value: "af", name: "Afrikaans"},
    {value: "ak_GH", name: "Akan (Ghana)"},
    {value: "ak", name: "Akan"},
    {value: "sq_AL", name: "Albanian (Albania)"},
    {value: "sq", name: "Albanian"},
    {value: "am_ET", name: "Amharic (Ethiopia)"},
    {value: "am", name: "Amharic"},
    {value: "ar_DZ", name: "Arabic (Algeria)"},
    {value: "ar_BH", name: "Arabic (Bahrain)"},
    {value: "ar_EG", name: "Arabic (Egypt)"},
    {value: "ar_IQ", name: "Arabic (Iraq)"},
    {value: "ar_JO", name: "Arabic (Jordan)"},
    {value: "ar_KW", name: "Arabic (Kuwait)"},
    {value: "ar_LB", name: "Arabic (Lebanon)"},
    {value: "ar_LY", name: "Arabic (Libya)"},
    {value: "ar_MA", name: "Arabic (Morocco)"},
    {value: "ar_OM", name: "Arabic (Oman)"},
    {value: "ar_QA", name: "Arabic (Qatar)"},
    {value: "ar_SA", name: "Arabic (Saudi Arabia)"},
    {value: "ar_SD", name: "Arabic (Sudan)"},
    {value: "ar_SY", name: "Arabic (Syria)"},
    {value: "ar_TN", name: "Arabic (Tunisia)"},
    {value: "ar_AE", name: "Arabic (United Arab Emirates)"},
    {value: "ar_YE", name: "Arabic (Yemen)"},
    {value: "ar", name: "Arabic"},
    {value: "hy_AM", name: "Armenian (Armenia)"},
    {value: "hy", name: "Armenian"},
    {value: "as_IN", name: "Assamese (India)"},
    {value: "as", name: "Assamese"},
    {value: "asa_TZ", name: "Asu (Tanzania)"},
    {value: "asa", name: "Asu"},
    {value: "az_Cyrl", name: "Azerbaijani (Cyrillic)"},
    {value: "az_Cyrl_AZ", name: "Azerbaijani (Cyrillic, Azerbaijan)"},
    {value: "az_Latn", name: "Azerbaijani (Latin)"},
    {value: "az_Latn_AZ", name: "Azerbaijani (Latin, Azerbaijan)"},
    {value: "az", name: "Azerbaijani"},
    {value: "bm_ML", name: "Bambara (Mali)"},
    {value: "bm", name: "Bambara"},
    {value: "eu_ES", name: "Basque (Spain)"},
    {value: "eu", name: "Basque"},
    {value: "be_BY", name: "Belarusian (Belarus)"},
    {value: "be", name: "Belarusian"},
    {value: "bem_ZM", name: "Bemba (Zambia)"},
    {value: "bem", name: "Bemba"},
    {value: "bez_TZ", name: "Bena (Tanzania)"},
    {value: "bez", name: "Bena"},
    {value: "bn_BD", name: "Bengali (Bangladesh)"},
    {value: "bn_IN", name: "Bengali (India)"},
    {value: "bn", name: "Bengali"},
    {value: "bs_BA", name: "Bosnian (Bosnia and Herzegovina)"},
    {value: "bs", name: "Bosnian"},
    {value: "bg_BG", name: "Bulgarian (Bulgaria)"},
    {value: "bg", name: "Bulgarian"},
    {value: "my_MM", name: "Burmese (Myanmar [Burma])"},
    {value: "my", name: "Burmese"},
    {value: "ca_ES", name: "Catalan (Spain)"},
    {value: "ca", name: "Catalan"},
    {value: "tzm_Latn", name: "Central Morocco Tamazight (Latin)"},
    {value: "tzm_Latn_MA", name: "Central Morocco Tamazight (Latin, Morocco)"},
    {value: "tzm", name: "Central Morocco Tamazight"},
    {value: "chr_US", name: "Cherokee (United States)"},
    {value: "chr", name: "Cherokee"},
    {value: "cgg_UG", name: "Chiga (Uganda)"},
    {value: "cgg", name: "Chiga"},
    {value: "zh_Hans", name: "Chinese (Simplified Han)"},
    {value: "zh_Hans_CN", name: "Chinese (Simplified Han, China)"},
    {value: "zh_Hans_HK", name: "Chinese (Simplified Han, Hong Kong SAR China)"},
    {value: "zh_Hans_MO", name: "Chinese (Simplified Han, Macau SAR China)"},
    {value: "zh_Hans_SG", name: "Chinese (Simplified Han, Singapore)"},
    {value: "zh_Hant", name: "Chinese (Traditional Han)"},
    {value: "zh_Hant_HK", name: "Chinese (Traditional Han, Hong Kong SAR China)"},
    {value: "zh_Hant_MO", name: "Chinese (Traditional Han, Macau SAR China)"},
    {value: "zh_Hant_TW", name: "Chinese (Traditional Han, Taiwan)"},
    {value: "zh", name: "Chinese"},
    {value: "kw_GB", name: "Cornish (United Kingdom)"},
    {value: "kw", name: "Cornish"},
    {value: "hr_HR", name: "Croatian (Croatia)"},
    {value: "hr", name: "Croatian"},
    {value: "cs_CZ", name: "Czech (Czech Republic)"},
    {value: "cs", name: "Czech"},
    {value: "da_DK", name: "Danish (Denmark)"},
    {value: "da", name: "Danish"},
    {value: "nl_BE", name: "Dutch (Belgium)"},
    {value: "nl_NL", name: "Dutch (Netherlands)"},
    {value: "nl", name: "Dutch"},
    {value: "ebu_KE", name: "Embu (Kenya)"},
    {value: "ebu", name: "Embu"},
    {value: "en_AS", name: "English (American Samoa)"},
    {value: "en_AU", name: "English (Australia)"},
    {value: "en_BE", name: "English (Belgium)"},
    {value: "en_BZ", name: "English (Belize)"},
    {value: "en_BW", name: "English (Botswana)"},
    {value: "en_CA", name: "English (Canada)"},
    {value: "en_GU", name: "English (Guam)"},
    {value: "en_HK", name: "English (Hong Kong SAR China)"},
    {value: "en_IN", name: "English (India)"},
    {value: "en_IE", name: "English (Ireland)"},
    {value: "en_JM", name: "English (Jamaica)"},
    {value: "en_MT", name: "English (Malta)"},
    {value: "en_MH", name: "English (Marshall Islands)"},
    {value: "en_MU", name: "English (Mauritius)"},
    {value: "en_NA", name: "English (Namibia)"},
    {value: "en_NZ", name: "English (New Zealand)"},
    {value: "en_MP", name: "English (Northern Mariana Islands)"},
    {value: "en_PK", name: "English (Pakistan)"},
    {value: "en_PH", name: "English (Philippines)"},
    {value: "en_SG", name: "English (Singapore)"},
    {value: "en_ZA", name: "English (South Africa)"},
    {value: "en_TT", name: "English (Trinidad and Tobago)"},
    {value: "en_UM", name: "English (U.S. Minor Outlying Islands)"},
    {value: "en_VI", name: "English (U.S. Virgin Islands)"},
    {value: "en_GB", name: "English (United Kingdom)"},
    {value: "en_US", name: "English (United States)"},
    {value: "en_ZW", name: "English (Zimbabwe)"},
    {value: "en", name: "English"},
    {value: "eo", name: "Esperanto"},
    {value: "et_EE", name: "Estonian (Estonia)"},
    {value: "et", name: "Estonian"},
    {value: "ee_GH", name: "Ewe (Ghana)"},
    {value: "ee_TG", name: "Ewe (Togo)"},
    {value: "ee", name: "Ewe"},
    {value: "fo_FO", name: "Faroese (Faroe Islands)"},
    {value: "fo", name: "Faroese"},
    {value: "fil_PH", name: "Filipino (Philippines)"},
    {value: "fil", name: "Filipino"},
    {value: "fi_FI", name: "Finnish (Finland)"},
    {value: "fi", name: "Finnish"},
    {value: "fr_BE", name: "French (Belgium)"},
    {value: "fr_BJ", name: "French (Benin)"},
    {value: "fr_BF", name: "French (Burkina Faso)"},
    {value: "fr_BI", name: "French (Burundi)"},
    {value: "fr_CM", name: "French (Cameroon)"},
    {value: "fr_CA", name: "French (Canada)"},
    {value: "fr_CF", name: "French (Central African Republic)"},
    {value: "fr_TD", name: "French (Chad)"},
    {value: "fr_KM", name: "French (Comoros)"},
    {value: "fr_CG", name: "French (Congo - Brazzaville)"},
    {value: "fr_CD", name: "French (Congo - Kinshasa)"},
    {value: "fr_CI", name: "French (Côte d’Ivoire)"},
    {value: "fr_DJ", name: "French (Djibouti)"},
    {value: "fr_GQ", name: "French (Equatorial Guinea)"},
    {value: "fr_FR", name: "French (France)"},
    {value: "fr_GA", name: "French (Gabon)"},
    {value: "fr_GP", name: "French (Guadeloupe)"},
    {value: "fr_GN", name: "French (Guinea)"},
    {value: "fr_LU", name: "French (Luxembourg)"},
    {value: "fr_MG", name: "French (Madagascar)"},
    {value: "fr_ML", name: "French (Mali)"},
    {value: "fr_MQ", name: "French (Martinique)"},
    {value: "fr_MC", name: "French (Monaco)"},
    {value: "fr_NE", name: "French (Niger)"},
    {value: "fr_RW", name: "French (Rwanda)"},
    {value: "fr_RE", name: "French (Réunion)"},
    {value: "fr_BL", name: "French (Saint Barthélemy)"},
    {value: "fr_MF", name: "French (Saint Martin)"},
    {value: "fr_SN", name: "French (Senegal)"},
    {value: "fr_CH", name: "French (Switzerland)"},
    {value: "fr_TG", name: "French (Togo)"},
    {value: "fr", name: "French"},
    {value: "ff_SN", name: "Fulah (Senegal)"},
    {value: "ff", name: "Fulah"},
    {value: "gl_ES", name: "Galician (Spain)"},
    {value: "gl", name: "Galician"},
    {value: "lg_UG", name: "Ganda (Uganda)"},
    {value: "lg", name: "Ganda"},
    {value: "ka_GE", name: "Georgian (Georgia)"},
    {value: "ka", name: "Georgian"},
    {value: "de_AT", name: "German (Austria)"},
    {value: "de_BE", name: "German (Belgium)"},
    {value: "de_DE", name: "German (Germany)"},
    {value: "de_LI", name: "German (Liechtenstein)"},
    {value: "de_LU", name: "German (Luxembourg)"},
    {value: "de_CH", name: "German (Switzerland)"},
    {value: "de", name: "German"},
    {value: "el_CY", name: "Greek (Cyprus)"},
    {value: "el_GR", name: "Greek (Greece)"},
    {value: "el", name: "Greek"},
    {value: "gu_IN", name: "Gujarati (India)"},
    {value: "gu", name: "Gujarati"},
    {value: "guz_KE", name: "Gusii (Kenya)"},
    {value: "guz", name: "Gusii"},
    {value: "ha_Latn", name: "Hausa (Latin)"},
    {value: "ha_Latn_GH", name: "Hausa (Latin, Ghana)"},
    {value: "ha_Latn_NE", name: "Hausa (Latin, Niger)"},
    {value: "ha_Latn_NG", name: "Hausa (Latin, Nigeria)"},
    {value: "ha", name: "Hausa"},
    {value: "haw_US", name: "Hawaiian (United States)"},
    {value: "haw", name: "Hawaiian"},
    {value: "he_IL", name: "Hebrew (Israel)"},
    {value: "he", name: "Hebrew"},
    {value: "hi_IN", name: "Hindi (India)"},
    {value: "hi", name: "Hindi"},
    {value: "hu_HU", name: "Hungarian (Hungary)"},
    {value: "hu", name: "Hungarian"},
    {value: "is_IS", name: "Icelandic (Iceland)"},
    {value: "is", name: "Icelandic"},
    {value: "ig_NG", name: "Igbo (Nigeria)"},
    {value: "ig", name: "Igbo"},
    {value: "id_ID", name: "Indonesian (Indonesia)"},
    {value: "id", name: "Indonesian"},
    {value: "ga_IE", name: "Irish (Ireland)"},
    {value: "ga", name: "Irish"},
    {value: "it_IT", name: "Italian (Italy)"},
    {value: "it_CH", name: "Italian (Switzerland)"},
    {value: "it", name: "Italian"},
    {value: "ja_JP", name: "Japanese (Japan)"},
    {value: "ja", name: "Japanese"},
    {value: "kea_CV", name: "Kabuverdianu (Cape Verde)"},
    {value: "kea", name: "Kabuverdianu"},
    {value: "kab_DZ", name: "Kabyle (Algeria)"},
    {value: "kab", name: "Kabyle"},
    {value: "kl_GL", name: "Kalaallisut (Greenland)"},
    {value: "kl", name: "Kalaallisut"},
    {value: "kln_KE", name: "Kalenjin (Kenya)"},
    {value: "kln", name: "Kalenjin"},
    {value: "kam_KE", name: "Kamba (Kenya)"},
    {value: "kam", name: "Kamba"},
    {value: "kn_IN", name: "Kannada (India)"},
    {value: "kn", name: "Kannada"},
    {value: "kk_Cyrl", name: "Kazakh (Cyrillic)"},
    {value: "kk_Cyrl_KZ", name: "Kazakh (Cyrillic, Kazakhstan)"},
    {value: "kk", name: "Kazakh"},
    {value: "km_KH", name: "Khmer (Cambodia)"},
    {value: "km", name: "Khmer"},
    {value: "ki_KE", name: "Kikuyu (Kenya)"},
    {value: "ki", name: "Kikuyu"},
    {value: "rw_RW", name: "Kinyarwanda (Rwanda)"},
    {value: "rw", name: "Kinyarwanda"},
    {value: "kok_IN", name: "Konkani (India)"},
    {value: "kok", name: "Konkani"},
    {value: "ko_KR", name: "Korean (South Korea)"},
    {value: "ko", name: "Korean"},
    {value: "khq_ML", name: "Koyra Chiini (Mali)"},
    {value: "khq", name: "Koyra Chiini"},
    {value: "ses_ML", name: "Koyraboro Senni (Mali)"},
    {value: "ses", name: "Koyraboro Senni"},
    {value: "lag_TZ", name: "Langi (Tanzania)"},
    {value: "lag", name: "Langi"},
    {value: "lv_LV", name: "Latvian (Latvia)"},
    {value: "lv", name: "Latvian"},
    {value: "lt_LT", name: "Lithuanian (Lithuania)"},
    {value: "lt", name: "Lithuanian"},
    {value: "luo_KE", name: "Luo (Kenya)"},
    {value: "luo", name: "Luo"},
    {value: "luy_KE", name: "Luyia (Kenya)"},
    {value: "luy", name: "Luyia"},
    {value: "mk_MK", name: "Macedonian (Macedonia)"},
    {value: "mk", name: "Macedonian"},
    {value: "jmc_TZ", name: "Machame (Tanzania)"},
    {value: "jmc", name: "Machame"},
    {value: "kde_TZ", name: "Makonde (Tanzania)"},
    {value: "kde", name: "Makonde"},
    {value: "mg_MG", name: "Malagasy (Madagascar)"},
    {value: "mg", name: "Malagasy"},
    {value: "ms_BN", name: "Malay (Brunei)"},
    {value: "ms_MY", name: "Malay (Malaysia)"},
    {value: "ms", name: "Malay"},
    {value: "ml_IN", name: "Malayalam (India)"},
    {value: "ml", name: "Malayalam"},
    {value: "mt_MT", name: "Maltese (Malta)"},
    {value: "mt", name: "Maltese"},
    {value: "gv_GB", name: "Manx (United Kingdom)"},
    {value: "gv", name: "Manx"},
    {value: "mr_IN", name: "Marathi (India)"},
    {value: "mr", name: "Marathi"},
    {value: "mas_KE", name: "Masai (Kenya)"},
    {value: "mas_TZ", name: "Masai (Tanzania)"},
    {value: "mas", name: "Masai"},
    {value: "mer_KE", name: "Meru (Kenya)"},
    {value: "mer", name: "Meru"},
    {value: "mfe_MU", name: "Morisyen (Mauritius)"},
    {value: "mfe", name: "Morisyen"},
    {value: "naq_NA", name: "Nama (Namibia)"},
    {value: "naq", name: "Nama"},
    {value: "ne_IN", name: "Nepali (India)"},
    {value: "ne_NP", name: "Nepali (Nepal)"},
    {value: "ne", name: "Nepali"},
    {value: "nd_ZW", name: "North Ndebele (Zimbabwe)"},
    {value: "nd", name: "North Ndebele"},
    {value: "nb_NO", name: "Norwegian Bokmål (Norway)"},
    {value: "nb", name: "Norwegian Bokmål"},
    {value: "nn_NO", name: "Norwegian Nynorsk (Norway)"},
    {value: "nn", name: "Norwegian Nynorsk"},
    {value: "nyn_UG", name: "Nyankole (Uganda)"},
    {value: "nyn", name: "Nyankole"},
    {value: "or_IN", name: "Oriya (India)"},
    {value: "or", name: "Oriya"},
    {value: "om_ET", name: "Oromo (Ethiopia)"},
    {value: "om_KE", name: "Oromo (Kenya)"},
    {value: "om", name: "Oromo"},
    {value: "ps_AF", name: "Pashto (Afghanistan)"},
    {value: "ps", name: "Pashto"},
    {value: "fa_AF", name: "Persian (Afghanistan)"},
    {value: "fa_IR", name: "Persian (Iran)"},
    {value: "fa", name: "Persian"},
    {value: "pl_PL", name: "Polish (Poland)"},
    {value: "pl", name: "Polish"},
    {value: "pt_BR", name: "Portuguese (Brazil)"},
    {value: "pt_GW", name: "Portuguese (Guinea-Bissau)"},
    {value: "pt_MZ", name: "Portuguese (Mozambique)"},
    {value: "pt_PT", name: "Portuguese (Portugal)"},
    {value: "pt", name: "Portuguese"},
    {value: "pa_Arab", name: "Punjabi (Arabic)"},
    {value: "pa_Arab_PK", name: "Punjabi (Arabic, Pakistan)"},
    {value: "pa_Guru", name: "Punjabi (Gurmukhi)"},
    {value: "pa_Guru_IN", name: "Punjabi (Gurmukhi, India)"},
    {value: "pa", name: "Punjabi"},
    {value: "ro_MD", name: "Romanian (Moldova)"},
    {value: "ro_RO", name: "Romanian (Romania)"},
    {value: "ro", name: "Romanian"},
    {value: "rm_CH", name: "Romansh (Switzerland)"},
    {value: "rm", name: "Romansh"},
    {value: "rof_TZ", name: "Rombo (Tanzania)"},
    {value: "rof", name: "Rombo"},
    {value: "ru_MD", name: "Russian (Moldova)"},
    {value: "ru_RU", name: "Russian (Russia)"},
    {value: "ru_UA", name: "Russian (Ukraine)"},
    {value: "ru", name: "Russian"},
    {value: "rwk_TZ", name: "Rwa (Tanzania)"},
    {value: "rwk", name: "Rwa"},
    {value: "saq_KE", name: "Samburu (Kenya)"},
    {value: "saq", name: "Samburu"},
    {value: "sg_CF", name: "Sango (Central African Republic)"},
    {value: "sg", name: "Sango"},
    {value: "seh_MZ", name: "Sena (Mozambique)"},
    {value: "seh", name: "Sena"},
    {value: "sr_Cyrl", name: "Serbian (Cyrillic)"},
    {value: "sr_Cyrl_BA", name: "Serbian (Cyrillic, Bosnia and Herzegovina)"},
    {value: "sr_Cyrl_ME", name: "Serbian (Cyrillic, Montenegro)"},
    {value: "sr_Cyrl_RS", name: "Serbian (Cyrillic, Serbia)"},
    {value: "sr_Latn", name: "Serbian (Latin)"},
    {value: "sr_Latn_BA", name: "Serbian (Latin, Bosnia and Herzegovina)"},
    {value: "sr_Latn_ME", name: "Serbian (Latin, Montenegro)"},
    {value: "sr_Latn_RS", name: "Serbian (Latin, Serbia)"},
    {value: "sr", name: "Serbian"},
    {value: "sn_ZW", name: "Shona (Zimbabwe)"},
    {value: "sn", name: "Shona"},
    {value: "ii_CN", name: "Sichuan Yi (China)"},
    {value: "ii", name: "Sichuan Yi"},
    {value: "si_LK", name: "Sinhala (Sri Lanka)"},
    {value: "si", name: "Sinhala"},
    {value: "sk_SK", name: "Slovak (Slovakia)"},
    {value: "sk", name: "Slovak"},
    {value: "sl_SI", name: "Slovenian (Slovenia)"},
    {value: "sl", name: "Slovenian"},
    {value: "xog_UG", name: "Soga (Uganda)"},
    {value: "xog", name: "Soga"},
    {value: "so_DJ", name: "Somali (Djibouti)"},
    {value: "so_ET", name: "Somali (Ethiopia)"},
    {value: "so_KE", name: "Somali (Kenya)"},
    {value: "so_SO", name: "Somali (Somalia)"},
    {value: "so", name: "Somali"},
    {value: "es_AR", name: "Spanish (Argentina)"},
    {value: "es_BO", name: "Spanish (Bolivia)"},
    {value: "es_CL", name: "Spanish (Chile)"},
    {value: "es_CO", name: "Spanish (Colombia)"},
    {value: "es_CR", name: "Spanish (Costa Rica)"},
    {value: "es_DO", name: "Spanish (Dominican Republic)"},
    {value: "es_EC", name: "Spanish (Ecuador)"},
    {value: "es_SV", name: "Spanish (El Salvador)"},
    {value: "es_GQ", name: "Spanish (Equatorial Guinea)"},
    {value: "es_GT", name: "Spanish (Guatemala)"},
    {value: "es_HN", name: "Spanish (Honduras)"},
    {value: "es_419", name: "Spanish (Latin America)"},
    {value: "es_MX", name: "Spanish (Mexico)"},
    {value: "es_NI", name: "Spanish (Nicaragua)"},
    {value: "es_PA", name: "Spanish (Panama)"},
    {value: "es_PY", name: "Spanish (Paraguay)"},
    {value: "es_PE", name: "Spanish (Peru)"},
    {value: "es_PR", name: "Spanish (Puerto Rico)"},
    {value: "es_ES", name: "Spanish (Spain)"},
    {value: "es_US", name: "Spanish (United States)"},
    {value: "es_UY", name: "Spanish (Uruguay)"},
    {value: "es_VE", name: "Spanish (Venezuela)"},
    {value: "es", name: "Spanish"},
    {value: "sw_KE", name: "Swahili (Kenya)"},
    {value: "sw_TZ", name: "Swahili (Tanzania)"},
    {value: "sw", name: "Swahili"},
    {value: "sv_FI", name: "Swedish (Finland)"},
    {value: "sv_SE", name: "Swedish (Sweden)"},
    {value: "sv", name: "Swedish"},
    {value: "gsw_CH", name: "Swiss German (Switzerland)"},
    {value: "gsw", name: "Swiss German"},
    {value: "shi_Latn", name: "Tachelhit (Latin)"},
    {value: "shi_Latn_MA", name: "Tachelhit (Latin, Morocco)"},
    {value: "shi_Tfng", name: "Tachelhit (Tifinagh)"},
    {value: "shi_Tfng_MA", name: "Tachelhit (Tifinagh, Morocco)"},
    {value: "shi", name: "Tachelhit"},
    {value: "dav_KE", name: "Taita (Kenya)"},
    {value: "dav", name: "Taita"},
    {value: "ta_IN", name: "Tamil (India)"},
    {value: "ta_LK", name: "Tamil (Sri Lanka)"},
    {value: "ta", name: "Tamil"},
    {value: "te_IN", name: "Telugu (India)"},
    {value: "te", name: "Telugu"},
    {value: "teo_KE", name: "Teso (Kenya)"},
    {value: "teo_UG", name: "Teso (Uganda)"},
    {value: "teo", name: "Teso"},
    {value: "th_TH", name: "Thai (Thailand)"},
    {value: "th", name: "Thai"},
    {value: "bo_CN", name: "Tibetan (China)"},
    {value: "bo_IN", name: "Tibetan (India)"},
    {value: "bo", name: "Tibetan"},
    {value: "ti_ER", name: "Tigrinya (Eritrea)"},
    {value: "ti_ET", name: "Tigrinya (Ethiopia)"},
    {value: "ti", name: "Tigrinya"},
    {value: "to_TO", name: "Tonga (Tonga)"},
    {value: "to", name: "Tonga"},
    {value: "tr_TR", name: "Turkish (Turkey)"},
    {value: "tr", name: "Turkish"},
    {value: "uk_UA", name: "Ukrainian (Ukraine)"},
    {value: "uk", name: "Ukrainian"},
    {value: "ur_IN", name: "Urdu (India)"},
    {value: "ur_PK", name: "Urdu (Pakistan)"},
    {value: "ur", name: "Urdu"},
    {value: "uz_Arab", name: "Uzbek (Arabic)"},
    {value: "uz_Arab_AF", name: "Uzbek (Arabic, Afghanistan)"},
    {value: "uz_Cyrl", name: "Uzbek (Cyrillic)"},
    {value: "uz_Cyrl_UZ", name: "Uzbek (Cyrillic, Uzbekistan)"},
    {value: "uz_Latn", name: "Uzbek (Latin)"},
    {value: "uz_Latn_UZ", name: "Uzbek (Latin, Uzbekistan)"},
    {value: "uz", name: "Uzbek"},
    {value: "vi_VN", name: "Vietnamese (Vietnam)"},
    {value: "vi", name: "Vietnamese"},
    {value: "vun_TZ", name: "Vunjo (Tanzania)"},
    {value: "vun", name: "Vunjo"},
    {value: "cy_GB", name: "Welsh (United Kingdom)"},
    {value: "cy", name: "Welsh"},
    {value: "yo_NG", name: "Yoruba (Nigeria)"},
    {value: "yo", name: "Yoruba"},
    {value: "zu_ZA", name: "Zulu (South Africa)"},
    {value: "zu", name: "Zulu"}
];
