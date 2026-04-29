from PIL import Image

def crop_blue_banner(input_path, output_path):
    img = Image.open(input_path).convert('RGB')
    width, height = img.size
    
    min_x = width
    min_y = height
    max_x = 0
    max_y = 0
    
    found = False
    
    for y in range(height):
        for x in range(width):
            r, g, b = img.getpixel((x, y))
            # Define "navy blue"
            if r < 100 and g < 100 and b > 80 and b > r + 20 and b > g + 20:
                if x < min_x: min_x = x
                if y < min_y: min_y = y
                if x > max_x: max_x = x
                if y > max_y: max_y = y
                found = True
                
    if found and (max_x - min_x > 50) and (max_y - min_y > 20):
        cropped = img.crop((min_x, min_y, max_x+1, max_y+1))
        # Ensure the image has transparency support (save as PNG)
        cropped.save(output_path, format="PNG")
        print(f"Success! Cropped banner from ({min_x}, {min_y}) to ({max_x}, {max_y}), size {cropped.size} to {output_path}")
    else:
        print("Blue banner not found! Please check color conditions.")

crop_blue_banner('public/flyer-elements.png', 'public/awards-strip.png')
