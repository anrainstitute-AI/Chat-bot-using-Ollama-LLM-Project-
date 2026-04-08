# Chat-bot-using-Ollama-LLM-Project-
Build a Chatbot using Ollama (free + open-source) that runs locally on your machine.

## Setup Instructions
### Install Ollama (https://ollama.com/)
- Run command:

```bash
ollama run gemma:2b
```
or
ollama run llama3 (if use llama3)

| Model     | RAM Needed | Speed   |
| --------- | ---------- | ------- |
| tinyllama | ~2GB       | ⚡ Fast  |
| phi       | ~2–3GB     | ⚡ Fast  |
| gemma:2b  | ~3GB       | 👍 Good |
| llama3    | ~8GB+      | ❌ Heavy |


### 1. Create Virtual Environment
```bash
python -m venv .venv
```
### 2. Activate Virtual Environment
```bash
.venv\scripts\activate
```
### 3. Install Requirement Package
```bash
pip3 install -r requirements.txt
```
- Run Backend:

```bash
cd backend
uvicorn app:app --reload
```


### Use new terminal for frontend 
- Run Frontend:

```bash
cd frontend
npm install
npm start
```
