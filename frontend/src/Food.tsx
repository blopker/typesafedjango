import { createResource, createSignal, For, Show } from "solid-js";
import { demoApiFood, demoApiFoodleft } from "./client";
import styles from "./Food.module.css";

function Food() {
  const [currentFood, setCurrentFood] = createSignal("apple");
  const [foodResource] = createResource(() => demoApiFood());
  const [foodLeftResource] = createResource(currentFood, (food) =>
    demoApiFoodleft({ query: { food } }),
  );
  const food = () => foodResource()?.data?.food ?? [];
  const foodLeft = () => foodLeftResource()?.data?.foodleft ?? 0;
  return (
    <div class={styles.Food}>
      <div>
        <For each={food()}>
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
      <div class={styles.FoodCount}>{foodLeft()}</div>
    </div>
  );
}

export default Food;
