import { _RouteRecordBase } from "vue-router";

// 合并两个同名接口
declare module "vue-router" {
    interface _RouteRecordBase {
        hidden?: boolean | string | number;
    }

    withDefaults(defineProps<_RouteRecordBase>(), {
        hidden: false,
    });
}
