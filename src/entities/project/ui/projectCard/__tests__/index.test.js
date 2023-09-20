import { mount } from '@vue/test-utils'
import Component from '../index.vue';
import { dataProjects } from '../../../../../shared/data-base';

const project_mock = dataProjects[0]

test('displays project', () => {
	const wrapper = mount(Component, {
		props: {
			project: project_mock
		},
	})

	expect(wrapper.find('img').attributes('src')).toBe(project_mock.mainImg)
})