import fitz # PyMuPDF
import sys

def main():
    doc = fitz.open("Refactoring_tailwindcss.pdf")
    text = ""
    for page in doc:
        text += page.get_text()
    
    with open("pdf_content.txt", "w") as f:
        f.write(text)
    
    print("PDF extracted to pdf_content.txt")

if __name__ == "__main__":
    main()
