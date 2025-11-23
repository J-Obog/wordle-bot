import json


candidates = [] 

with open("known.json", "r", encoding="utf") as ifile:
    candidates = json.load(ifile)

target_word = "honor"
start_word = "rinse"

not_in_target = set()
known_idxs = {}
unknown_idxs = set()

guesses = 0


while guesses < 6:
    break


print("lost")