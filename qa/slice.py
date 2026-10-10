import sys
from PIL import Image
src, prefix, chunk, scale = sys.argv[1], sys.argv[2], int(sys.argv[3]), float(sys.argv[4])
im = Image.open(src)
n = 0
for y in range(0, im.height, chunk):
    part = im.crop((0, y, im.width, min(im.height, y + chunk)))
    part = part.resize((int(part.width * scale), int(part.height * scale)))
    part.save(f"{prefix}-{n}.png"); n += 1
print(n)
