// useVModel.js
import { computed } from "vue";

export default function useVModle(props:any, propName:any, emit:Function) {
    return computed({
        get() {
            return new Proxy(props[propName], {
                get(target, key) {
                    return Reflect.get(target, key)
                },
                set(target, key, newValue) {
                    emit('update:' + propName, {
                        ...target,
                        [key]: newValue
                    })
                    return true
                }
            })
        },
        set(value) {
            emit('update:' + propName, value)
        }
    })
}
