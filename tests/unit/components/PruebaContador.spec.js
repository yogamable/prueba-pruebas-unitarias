import { mount } from "@vue/test-utils";
import store from "@/store";
import ContadorComponent from "@/components/ContadorComponent.vue";

describe('ContadorComponent.vue', () => {
   test('Validar que el contador parta en 0', () => {
    //selecciono sujeto de prueba
    const wrapper = mount(ContadorComponent, {
        global: {
            plugins: [store]
        }
    });

    const contador = wrapper.find('.contador').text();
    //aserción
    expect (store.state.contador).toBe(0);
   })

    test('Validar que al hacer click en ➕ aumente en 1 el valor del contador', async () => {
        //selecciono sujeto de prueba
        const wrapper = mount(ContadorComponent, {
            global: {
                plugins: [store]
            }
        })

        await wrapper.find('.botonIncrementar').trigger('click');
        
        //aserción
        expect (store.state.contador).toBe(1)
    })

    test('Validar que al hacer click en ➖ disminuya en 1 el valor del contador', async () => {
        //selecciono sujeto de prueba
        const wrapper = mount(ContadorComponent, {
            global: {
                plugins: [store]
            }
        })

        await wrapper.find('.botonDisminuir').trigger('click');
        
        //aserción
        expect (store.state.contador).toBe(0)
    })

});