import os
import re

replacements = {
    r'(?i)#DC1C2E': '#E11B22', # RE/MAX Red
    r'(?i)#003DA5': '#0054A4', # RE/MAX Blue
    r'(?i)#B72A25': '#B8161C', # Darker RE/MAX Red for hovers
    r'(?i)#002f80': '#004383', # Darker RE/MAX Blue for hovers
    r'(?i)#D1D3D4': '#D1D3D4', # Gray (might not exist yet, we can map some things)
    r'(?i)#A0A0A0': '#A0A0A0', # Silver
}

directories = ['components', 'app']

for d in directories:
    for root, dirs, files in os.walk(d):
        for file in files:
            if file.endswith(('.tsx', '.ts', '.css')):
                filepath = os.path.join(root, file)
                with open(filepath, 'r') as f:
                    content = f.read()
                
                new_content = content
                for old, new in replacements.items():
                    new_content = re.sub(old, new, new_content)
                
                if new_content != content:
                    with open(filepath, 'w') as f:
                        f.write(new_content)
                    print(f"Updated {filepath}")
