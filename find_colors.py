from PIL import Image
from collections import Counter

img = Image.open('public/flyer-elements.png').convert('RGB')
colors = img.getdata()
counter = Counter(colors)

print("Most common colors:")
for color, count in counter.most_common(20):
    if color != (255, 255, 255): # ignore pure white
        print(f"Color: {color}, Count: {count}")
