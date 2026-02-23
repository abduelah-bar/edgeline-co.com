
import json
import re

image_links_file_path = 'workspace/image_links.txt'
placeholder_images_file_path = 'src/lib/placeholder-images.json'

with open(image_links_file_path, 'r') as f:
    links_content = f.read()

urls = re.findall(r'https?://[^\s,"]+', links_content)

with open(placeholder_images_file_path, 'r') as f:
    data = json.load(f)

data['placeholderImages'] = [p for p in data['placeholderImages'] if p.get('id') != 'project-test']

if urls:
    new_project = {
        "id": "project-test",
        "description": "Test Project",
        "longDescription": "<p>This is the Test Project, created from the provided image links.</p>",
        "imageUrl": urls[0],
        "imageHint": "test project",
        "gallery": [
            {"imageUrl": url, "imageHint": "gallery image"} for url in urls[1:]
        ]
    }
    data['placeholderImages'].append(new_project)

with open(placeholder_images_file_path, 'w') as f:
    json.dump(data, f, indent=2)

print(f"Successfully updated {placeholder_images_file_path} with {len(urls)} images.")
