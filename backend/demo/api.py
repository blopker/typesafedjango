from ninja import NinjaAPI, Schema

api = NinjaAPI()

_food = {
    "apple": 1,
    "banana": 2,
    "orange": 3,
    "pear": 4,
    "strawberry": 5,
}


class FoodLeftSchema(Schema):
    food: str
    foodleft: int


@api.get("/foodleft", response=FoodLeftSchema)
def foodleft(request, food: str):
    return {
        "foodleft": _food.get(food, 0),
        "food": food,
    }


class FoodSchema(Schema):
    food: list[str]


@api.get("/food", response=FoodSchema)
def food(request):
    return {"food": list(_food.keys())}
