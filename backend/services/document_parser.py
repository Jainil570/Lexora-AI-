"""Document parser service for extracting and chunking text from files."""
import io
import logging
from typing import List

import fitz  # PyMuPDF
from docx import Document

logger = logging.getLogger(__name__)

def extract_text_from_pdf(file_bytes: bytes) -> str:
    """Extract text from a PDF file using PyMuPDF."""
    text = ""
    try:
        # Open PDF from bytes
        doc = fitz.open(stream=file_bytes, filetype="pdf")
        for page in doc:
            text += page.get_text("text") + "\n\n"
        doc.close()
    except Exception as e:
        logger.error(f"Failed to parse PDF: {e}")
        raise ValueError("Could not parse the PDF file.") from e
    
    return text.strip()

def extract_text_from_docx(file_bytes: bytes) -> str:
    """Extract text from a DOCX file using python-docx."""
    text = ""
    try:
        doc = Document(io.BytesIO(file_bytes))
        for para in doc.paragraphs:
            if para.text.strip():
                text += para.text.strip() + "\n\n"
    except Exception as e:
        logger.error(f"Failed to parse DOCX: {e}")
        raise ValueError("Could not parse the DOCX file.") from e
    
    return text.strip()

def chunk_text(text: str, max_words: int = 3000, overlap: int = 300) -> List[str]:
    """
    Split text into chunks of maximum `max_words` length, 
    with `overlap` words between consecutive chunks to maintain context.
    """
    words = text.split()
    if not words:
        return []
        
    chunks = []
    i = 0
    while i < len(words):
        end = min(i + max_words, len(words))
        chunk_words = words[i:end]
        chunks.append(" ".join(chunk_words))
        
        # If we reached the end, break
        if end == len(words):
            break
            
        # Move forward by (max_words - overlap)
        i += (max_words - overlap)
        
    return chunks

def parse_and_chunk(file_bytes: bytes, filename: str) -> List[str]:
    """Parse file and return text chunks."""
    ext = filename.lower().split('.')[-1]
    
    if ext == 'pdf':
        text = extract_text_from_pdf(file_bytes)
    elif ext == 'docx':
        text = extract_text_from_docx(file_bytes)
    elif ext == 'txt':
        text = file_bytes.decode('utf-8', errors='ignore')
    else:
        raise ValueError(f"Unsupported file format: .{ext}")

    if not text.strip():
        raise ValueError("No text could be extracted from the file.")

    # Using 3000 words per chunk for safety with 8b models, ensuring prompt + output fits context
    return chunk_text(text, max_words=3000, overlap=300)
