def hurdleRace(k, height):
    maxHeight = max(height)
    potions = maxHeight - k
    if potions < 0:
        return 0
    return potions