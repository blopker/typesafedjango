from ninja import NinjaAPI, Schema

api = NinjaAPI()

_food = {
    "apple": 7,
    "banana": 2,
    "orange": 3,
    "pear": 1,
    "strawberry": 5,
}


class FoodLeftSchema(Schema):
    food: str
    foodleft: int


@api.get("/foodleft", response=FoodLeftSchema)
def foodleft(request, food: str) -> FoodLeftSchema:
    return FoodLeftSchema(
        food=food,
        foodleft=_food.get(food, 0),
    )


class FoodSchema(Schema):
    food: list[str]


@api.get("/food", response=FoodSchema)
def food(request) -> FoodSchema:
    return FoodSchema(food=list(_food.keys()))
