import sys

files = [
    "core.js",
    "input.js",
    "localization.js",
    "realtime.js",
    "render.js",
]

if __name__ == '__main__':
    assert len(sys.argv) >= 2
    for i in files:
        print(f'''<script src="{i}?v={sys.argv[1]}"></script>''')