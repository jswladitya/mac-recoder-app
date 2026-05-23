from PIL import Image
import sys

input_path = sys.argv[1]
output_path = sys.argv[2]

# Open the original image
img = Image.open(input_path)

# Target dimensions
target_w, target_h = 1200, 630

# Calculate scaling factor to fit within 1200x630 while preserving aspect ratio
img_w, img_h = img.size
scale = min(target_w / img_w, target_h / img_h)

# New dimensions after scaling
new_w = int(img_w * scale)
new_h = int(img_h * scale)

# Resize the image using high-quality downsampling
img_resized = img.resize((new_w, new_h), Image.Resampling.LANCZOS)

# Create a new black image of the target size
new_img = Image.new("RGB", (target_w, target_h), (0, 0, 0))

# Calculate coordinates to paste the resized image in the center
x = (target_w - new_w) // 2
y = (target_h - new_h) // 2

# Paste the resized image onto the black background
new_img.paste(img_resized, (x, y))

# Save the result
new_img.save(output_path, quality=100)
print(f"Successfully saved {output_path} with size {new_img.size}")
