import { shallowMount } from '@vue/test-utils';
import HomeView from '@/views/HomeView.vue';
import ContadorComponent from '@/components/ContadorComponent.vue';
import ParentComponent from '@/components/ParentComponent.vue';

describe('HomeView.vue', () => {
  it('debería renderizar ContadorComponent', () => {
    const wrapper = shallowMount(HomeView);
    const contadorComponent = wrapper.findComponent(ContadorComponent);
    expect(contadorComponent.exists()).toBe(true);
  });

  it('debería renderizar ParentComponent', () => {
    const wrapper = shallowMount(HomeView);
    const parentComponent = wrapper.findComponent(ParentComponent);
    expect(parentComponent.exists()).toBe(true);
  });
});
