import { mount } from '@vue/test-utils'
/* const Component = required('./testThenDelete.vue'); */
/* import { dataProjects } from '@/shared/data-base'; */
import Component from './testThenDelete.vue';

const project = {
	id: '1',
	mainImg: 'holdem.wiki/0.jpg',
	alt: 'Сайт расчета покерных вариаций',
	name: 'Holdem.wiki',
	stek: ['Javascript', 'Nuxt 2.x', 'SCSS', 'ElementUI', 'Vuex', 'i18n'],
	description:
		'Простое и удобное браузерное приложение, которое предназначено для помощи игрокам в оттачивании навыков игры диапазонами в различных покерных ситуациях.',
	myWork: [
		'Стили переписаны на БЭМ',
		'Провел инкапсулякцию стилей компонентов',
		'Разработал страницу магазина, включая фильтры и сортировку',
		'Написал страницу товара',
		'Ручное тестирование',
	],

} // name: Holdem.wiki

test('displays project', async () => {
	const wrapper = mount(Component, {
		props: {
			project
		}
	})

	// Assert the rendered text of the component
	expect(wrapper.text()).toContain('Holdem.wiki')
})