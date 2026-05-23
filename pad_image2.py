from PIL import Image
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

# Get the background color by sampling the edges of the resized image
# Let's sample the left and right edges (middle y)
left_color = img_resized.getpixel((0, new_h // 2))
right_color = img_resized.getpixel((new_w - 1, new_h // 2))

# We'll use the left_color as the background color (assuming it's roughly symmetric)
bg_color = left_color

# Create a new image of the target size with the sampled background color
new_img = Image.new("RGBA", (target_w, target_h), bg_color)

# Paste the resized image onto the background
x = (target_w - new_w) // 2
y = (target_h - new_h) // 2

new_img.paste(img_resized, (x, y), img_resized)

# Save the result
new_img.convert("RGB").save(output_path, quality=100)
print(f"Sampled bg color: {bg_color}")
print(f"Successfully saved {output_path} with size {new_img.size}")
