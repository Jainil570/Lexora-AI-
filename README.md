<div align="center">

<img src="https://img.shields.io/badge/Lexora-AI%20Legal%20Intelligence-000000?style=for-the-badge&labelColor=000000&color=1c69d4" />

# Lexora AI

**Agentic Legal Intelligence Platform for Indian Startups**

Generate investor-safe NDAs, founder agreements, vendor contracts, and ESOP policies in minutes — with AI-powered risk analysis built in.

[![Demo Video](https://img.shields.io/badge/▶%20Watch%20Demo-Drive-black?style=for-the-badge&logo=google-drive&logoColor=white)](https://drive.google.com/file/d/1MaGXSkc8QnuKyEPmpqbOizdrUkUxSLK_/view?usp=sharing)
&nbsp;
[![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi)](https://fastapi.tiangolo.com)
&nbsp;
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js)](https://nextjs.org)
&nbsp;
[![License: MIT](https://img.shields.io/badge/License-MIT-white?style=for-the-badge)](LICENSE)

---

[![MongoDB](https://img.shields.io/badge/MongoDB-4EA94B?style=flat-square&logo=mongodb&logoColor=white)](https://mongodb.com)
[![ChromaDB](https://img.shields.io/badge/ChromaDB-Vector%20DB-orange?style=flat-square)](https://trychroma.com)
[![Ollama](https://img.shields.io/badge/Ollama-Local%20LLM-black?style=flat-square)](https://ollama.com)
[![LangGraph](https://img.shields.io/badge/LangGraph-Workflow-purple?style=flat-square)](https://langchain-ai.github.io/langgraph)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)

</div>

---

## What is Lexora?

Early-stage Indian startups copy templates from the internet, sign vendor contracts they don't understand, and skip founder agreements until it's too late — because real legal help is too expensive and too slow.

Lexora is **not a chatbot**. It is a stateful agentic AI workflow that:

- Collects your startup's context through an adaptive intake (6 questions, not 40)
- Retrieves relevant legal clauses from a vetted India-specific clause library
- Generates a professionally structured legal draft — NDA, Founder Agreement, ESOP, Vendor Contract, or Employment Agreement
- Analyzes the output for risky clauses, missing protections, and Indian law compliance
- Flags when you genuinely need a lawyer — and explains every clause in plain English

> **Disclaimer:** Lexora generates first drafts for review purposes only. It is not a substitute for qualified legal advice.

---

## Demo

<div align="center">

[![Lexora Demo](https://img.shields.io/badge/▶%20Watch%20Full%20Walkthrough-Google%20Drive-4285F4?style=for-the-badge&logo=google-drive&logoColor=white&labelColor=000000)](https://drive.google.com/file/d/1MaGXSkc8QnuKyEPmpqbOizdrUkUxSLK_/view?usp=sharing)

*Click above to watch the full product walkthrough — document generation, risk analysis, and Red Flag mode.*

</div>

---

## Key Features

| Feature | What it does |
|---|---|
| **Adaptive Intake** | AI asks only the questions it needs. Infers defaults, detects missing fields dynamically |
| **Clause Library + RAG** | Generation grounded in a vetted clause library via ChromaDB — not zero-shot hallucination |
| **Startup Stage Awareness** | Idea stage vs Series A gets different clause language automatically |
| **Jurisdiction Intelligence** | Maharashtra, Karnataka, Delhi — state-specific stamp duty notes and court references |
| **Risk Analysis Engine** | Scores documents 0–100, flags missing clauses, one-sided terms, and compliance gaps |
| **Red Flag Mode** | Upload *any* contract you received — AI scans it for traps before you sign |
| **Clause Explanation** | Click any clause → plain English explanation in under 150 words |
| **Lawyer Escalation** | If risk score ≥ 50, system flags for mandatory human legal review |
| **DOCX + PDF Export** | Properly formatted, downloadable legal drafts |
| **Local-first LLM** | Runs on Ollama (Qwen2.5, Gemma, Llama) — zero API cost |

---

## Document Types

- **NDA** — Mutual and one-way, with IP ownership, Indian jurisdiction, confidentiality duration
- **Founder Agreement** — Equity split, vesting schedules, exit clauses, voting rights, IP assignment
- **ESOP Policy** — Pool size, vesting schedule, Income Tax Act Section 17(2) compliance
- **Vendor Contract** — Scope, payment schedule, IP ownership, penalty clauses, termination
- **Employment Agreement** — Role, compensation, NDA, IP assignment, non-compete (with Indian law enforceability note)

---

## How it Works

```
User Input (Form / Chat / Upload)
         ↓
  Structured Legal State
  (validated Pydantic schema)
         ↓
  Missing Field Detection
  (adaptive follow-up questions)
         ↓
  Clause Retrieval — ChromaDB
  (filtered by document type, stage, jurisdiction)
         ↓
  Grounded Document Generation
  (LLM customizes retrieved clauses)
         ↓
  Risk Analysis Engine
  (rule-based + LLM reasoning)
         ↓
  Export + Clause Explanation
  (DOCX, PDF, plain-English guide)
```

The system is agentic because it **decides** what to ask, which workflow to follow, which clauses to retrieve, and when human review is required — not because a user pushed a button.

---

## Tech Stack

### Frontend
| Layer | Technology |
|---|---|
| Framework | Next.js 14+ (App Router) |
| Styling | Tailwind CSS v4 |
| Auth | Auth.js / NextAuth |

### Backend
| Layer | Technology |
|---|---|
| API | FastAPI (Python, fully async) |
| Validation | Pydantic v2 |
| Workflow | LangGraph (stateful orchestration) |
| Document Export | python-docx + reportlab |
| PDF Parsing | pdfplumber |

### Data & AI
| Layer | Technology |
|---|---|
| Database | MongoDB + Motor async driver |
| Vector DB | ChromaDB (local persistent) |
| Embeddings | BAAI/bge-small-en-v1.5 (free, local) |
| LLM Runtime | Ollama (Qwen2.5 / Gemma / Llama) |
| LLM Fallback | OpenAI GPT-4o (optional, one env var) |

### Deployment
| Layer | Technology |
|---|---|
| Frontend | Vercel |
| Backend | Railway / Render |
| Database | MongoDB Atlas (free tier) |

---

## Project Structure

```
lexora/
│
├── lexora-frontend/              # Next.js 14 App Router
│   ├── src/app/
│   │   ├── page.js               # Landing
│   │   ├── how-it-works/
│   │   ├── pricing/
│   │   ├── document-generator/   # Core app — form, chat, results
│   │   ├── red-flag-analyser/    # Upload any contract for scanning
│   │   ├── dashboard/            # User document history
│   │   ├── about/
│   │   └── legal-disclaimer/
│   └── tailwind.config.mjs
│
├── backend/
│   ├── main.py
│   ├── routers/
│   │   ├── documents.py
│   │   ├── intake.py
│   │   └── health.py
│   ├── services/
│   │   ├── llm_client.py         # Provider abstraction (Ollama / OpenAI)
│   │   ├── document_generator.py
│   │   ├── intake_agent.py       # Adaptive questioning engine
│   │   ├── risk_analyzer.py      # Risk scoring + Red Flag detection
│   │   ├── clause_explainer.py
│   │   ├── document_parser.py    # PDF/DOCX extraction
│   │   ├── vector_store.py       # ChromaDB interface
│   │   ├── file_exporter.py      # DOCX + PDF export
│   │   └── db.py                 # MongoDB Motor client
│   ├── models/
│   │   ├── legal_state.py        # All Pydantic legal state schemas
│   │   ├── requests.py
│   │   └── responses.py
│   ├── workflows/
│   │   └── legal_agent_graph.py  # LangGraph stateful graph
│   ├── prompts/                  # All prompts stored as versioned text files
│   ├── data/
│   │   ├── clause_library.json   # 40+ vetted legal clauses
│   │   └── jurisdiction_rules.json
│   └── utils/
│       ├── logger.py
│       └── validators.py
│
└── chroma_db/                    # Persisted clause embeddings
```

---

## Local Setup

### Prerequisites

- Python 3.11+
- Node.js 18+
- [Ollama](https://ollama.com) installed and running
- MongoDB Atlas account (free tier) or local MongoDB

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/lexora.git
cd lexora
```

### 2. Backend setup

```bash
cd backend
python -m venv venv

# Windows
venv\Scripts\activate

# macOS/Linux
source venv/bin/activate

pip install -r requirements.txt
cp .env.example .env
# Fill in your .env values
```

### 3. Start Ollama with a local model

```bash
ollama pull qwen2.5:7b
ollama run qwen2.5:7b
```

### 4. Embed the clause library (first run only)

```bash
cd backend
python scripts/embed_clauses.py
```

### 5. Start the backend

```bash
uvicorn main:app --reload
# API available at http://localhost:8000
# Docs at http://localhost:8000/docs
```

### 6. Frontend setup

```bash
cd lexora-frontend
npm install
cp .env.local.example .env.local
# Set NEXT_PUBLIC_API_URL=http://localhost:8000
npm run dev
# App available at http://localhost:3000
```

---

## Environment Variables

```env
# backend/.env

# Database
MONGODB_URI=mongodb+srv://...

# LLM Provider — switch between ollama and openai with one variable
LLM_PROVIDER=ollama
OLLAMA_BASE_URL=http://localhost:11434
OLLAMA_MODEL=qwen2.5:7b

# Optional: OpenAI fallback
OPENAI_API_KEY=

# ChromaDB
CHROMA_DB_PATH=./chroma_db

# Auth
JWT_SECRET=your-secret-here

# CORS
FRONTEND_URL=http://localhost:3000
```

```env
# lexora-frontend/.env.local

NEXT_PUBLIC_API_URL=http://localhost:8000
NEXTAUTH_SECRET=your-nextauth-secret
NEXTAUTH_URL=http://localhost:3000
GOOGLE_CLIENT_ID=
GOOGLE_CLIENT_SECRET=
```

---

## API Reference

| Method | Endpoint | Description |
|---|---|---|
| `GET` | `/health` | Health check |
| `POST` | `/api/documents/generate` | Generate a legal document |
| `POST` | `/api/intake/start` | Begin adaptive chat intake |
| `POST` | `/api/intake/answer` | Submit one answer, receive next question |
| `POST` | `/api/documents/upload` | Upload PDF/DOCX for entity extraction |
| `POST` | `/api/documents/red-flag-analysis` | Upload any contract for risk scanning |
| `POST` | `/api/documents/explain-clause` | Get plain-English clause explanation |
| `GET` | `/api/user/documents` | Get user's document history |
| `GET` | `/api/user/documents/{session_id}/versions` | Get all versions of a document |

Full interactive docs available at `http://localhost:8000/docs` when the backend is running.

---

## Agentic Behavior Explained

Lexora qualifies as an agentic system because it does more than prompt → response:

| Behavior | Implementation |
|---|---|
| Maintains state across steps | `AgentState` TypedDict in LangGraph |
| Decides what to ask next | `IntakeAgent.get_missing_fields()` |
| Routes workflows conditionally | LangGraph conditional edges (upload path vs chat path) |
| Retrieves external knowledge | ChromaDB clause retrieval with metadata filters |
| Makes decisions autonomously | Risk scoring → lawyer escalation trigger |
| Adapts to context | Startup stage + jurisdiction change clause selection |

---

## Indian Law Coverage

| Law | What Lexora checks |
|---|---|
| Indian Contract Act 1872 | Offer, acceptance, consideration, enforceability |
| Companies Act 2013 | MCA compliance references in founder/ESOP docs |
| SEBI Regulations | Flagged when investor involvement detected |
| IT Act 2000 | Digital signature and data clause references |
| Income Tax Act S.17(2) | ESOP tax implications note |
| State Stamp Acts | Maharashtra, Karnataka, Delhi stamp duty notes |

---

## Development Phases

The project was built in 9 structured phases, each independently deployable and validated:

| Phase | What was built |
|---|---|
| 1 | Foundation NDA generator + navigation |
| 2 | Structured legal state engine + MongoDB sessions |
| 3 | Clause library + ChromaDB RAG |
| 4 | Adaptive chat intake (first agentic feature) |
| 5 | Document upload + PDF extraction pipeline |
| 6 | LangGraph stateful workflow orchestration |
| 7 | Risk analysis engine + Red Flag mode |
| 8 | All 5 document types + versioning |
| 9 | Auth + dashboard + production polish |

---

## License

MIT — see [LICENSE](LICENSE) for details.

---

<div align="center">

**Lexora AI** — Legal clarity should not be a luxury.

*Built for Indian founders, by people who understand the problem.*

</div>
