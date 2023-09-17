export type TContact = {
	name: string,
	value: string,
	href?: string,
	tag?: string,
}

export const dataContacts:TContact[] = [
	{
		name: 'Электронная почта',
		value: 'asostrovskiy@yandex.ru',
		href: 'mailto:asostrovskiy@yandex.ru',
		tag: 'a'
	},
	{
		name: 'Контактный телефон',
		value: '+7 961 813 65 45',
		href: 'tel:+79618136545',
		tag: 'a'
	},
	{
		name: 'Whatsapp',
		value: '+7 961 813 65 45',
		tag: 'a',
		href: 'https://wa.me/79091607373?text=%D0%94%D0%BE%D0%B1%D1%80%D1%8B%D0%B9%20%D0%B4%D0%B5%D0%BD%D1%8C!%20'
	},
	{
		name: 'Telegram',
		value: '+7 961 813 65 45',
		tag: 'a',
		href: 'https://t.me/+79618136545'
	},
	{
		name: 'Город проживания',
		value:'г.Астрахань'
	}
]
