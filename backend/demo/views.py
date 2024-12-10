from datetime import datetime, timedelta

from django.shortcuts import render
from django.utils import timezone


def get_next_feed_time():
    now = timezone.now()  # current date and time
    target_hours = range(0, 24, 3)  # the desired hours
    next_hour = [a for a in target_hours if a > now.hour][0]
    if (
        next_hour == 24
    ):  # if the next appropriate hour has already passed today, use tomorrow's date
        days_to_add = 1
        next_hour = 0
    else:
        days_to_add = 0

    target_time = datetime(
        year=now.year, month=now.month, day=now.day, hour=next_hour, tzinfo=now.tzinfo
    ) + timedelta(
        days=days_to_add
    )  # create a new datetime object for the next appropriate time

    return target_time


def index(request):
    next_feed_time = get_next_feed_time()
    return render(request, "index.html", {"feed_time": next_feed_time})
