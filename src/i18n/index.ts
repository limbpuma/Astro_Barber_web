import english from '../i18n/en.json';
import german from '../i18n/de.json';
import spanish from '../i18n/es.json';

const LANG = {
    GERMAN: 'de',
	ENGLISH: 'en',
	SPANISH: 'es',
};

//Logica de I18N
export const getI18N = ({
	currentLocale = 'de',
}: {
	currentLocale: string | undefined;
}) => {
	if (currentLocale === LANG.ENGLISH) return {...german, ...english};
	if (currentLocale === LANG.SPANISH) return {...german, ...spanish};
	return german;
};
