import Vue from "vue";
import { ExtendedVue } from "vue/types/vue";

const A = Vue.extend({
  props: {
    a: Number,
  },
});

const a = new A();

class Poyo<T1, T2> {}

type Hoge = Poyo<number, string>;

type GetT1<X> = X extends Poyo<infer T, infer S> ? T : never;
type GetT2<X> = X extends Poyo<infer T, infer S> ? S : never;
// number
type T1 = GetT1<Hoge>;
// string
type T2 = GetT2<Hoge>;

type GetProp<X> = X extends ExtendedVue<
  infer Instance,
  infer Data,
  infer Methods,
  infer Computed,
  infer Props
>
  ? Props
  : never;

// any
type X = typeof a.$props.a;

// number
type Y = GetProp<typeof A>["a"];

async function main(): Promise<void> {
  console.log("poyo");
}

main();

process.on("unhandledRejection", (reason) => {
  console.error(reason);
  process.exit(1);
});
