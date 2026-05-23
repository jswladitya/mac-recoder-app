from PIL import Image, ImageDraw, ImageFilter
import sys

input_path = sys.argv[1]
output_path = sys.argv[2]

img = Image.open(input_path).convert("RGBA")

# Target dimensions
target_w, target_h = 1200, 630

# Calculate scaling factor to fit within 1200x630
img_w, img_h = img.size
scale = min(target_w / img_w, target_h / img_h)

new_w = int(img_w * scale)
new_h = int(img_h * scale)

img_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

# Get the background color by sampling the edges (average of top-left and top-right)
c1 = img_resized.getpixel((0, 0))
c2 = img_resized.getpixel((new_w - 1, 0))
bg_color = ((c1[0]+c2[0])//2, (c1[1]+c2[1])//2, (c1[2]+c2[2])//2, 255)

# Create a gradient mask for feathering the left and right edges
mask = Image.new("L", (new_w, new_h), 255)
draw = ImageDraw.Draw(mask)
fade_width = 30 # pixels to feather

for x in range(fade_width):
    # Left edge fade
    alpha = int((x / fade_width) * 255)
    draw.line([(x, 0), (x, new_h)], fill=alpha)
    # Right edge fade
    draw.line([(new_w - 1 - x, 0), (new_w - 1 - x, new_h)], fill=alpha)

# Create a new image of the target size with the sampled background color
new_img = Image.new("RGBA", (target_w, target_h), bg_color)

# Paste the resized image onto the background using the feather mask
x = (target_w - new_w) // 2
y = (target_h - new_h) // 2

# Create a composite of the resized image on the background using the mask
temp_img = Image.new("RGBA", (new_w, new_h), bg_color)
blended_resized = Image.composite(img_resized, temp_img, mask)

new_img.paste(blended_resized, (x, y), blended_resized)

# Save the result
new_img.convert("RGB").save(output_path, quality=100)
print(f"Sampled bg color: {bg_color}")
print(f"Successfully saved {output_path} with size {new_img.size}")
