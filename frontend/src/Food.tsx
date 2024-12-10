import { For, Show, createResource, createSignal } from "solid-js";
import styles from "./Food.module.css";
import { demoApiFood, demoApiFoodleft } from "./client";

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
              onKeyDown={() => setCurrentFood(food)}
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
