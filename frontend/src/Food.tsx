import { createResource, createSignal, For, Show } from "solid-js";
import { demoApiFood, demoApiFoodleft } from "./client";
import styles from "./Food.module.css";

function Food() {
  const [currentFood, setCurrentFood] = createSignal("apple");
  const [food] = createResource(() => demoApiFood());
  const [foodLeft] = createResource(currentFood, (food) =>
    demoApiFoodleft({ query: { food } }),
  );
  return (
    <div class={styles.Food}>
      <Show when={food()?.data}>
        <div>
          <For each={food()?.data?.food}>
            {(food) => (
              <div
                class={styles.FoodItem}
                classList={{
                  [styles.FoodItemActive]: food === currentFood(),
                }}
                onClick={() => setCurrentFood(food)}
              >
                {food}
              </div>
            )}
          </For>
        </div>
      </Show>
      <Show when={foodLeft.latest}>
        <div class={styles.FoodCount}>{foodLeft.latest?.data?.foodleft}</div>
      </Show>
    </div>
  );
}

export default Food;
